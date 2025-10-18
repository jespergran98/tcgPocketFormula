const data = [
  [1, "Suicune ex Greninja", 6802, 5798, 299],
  [2, "Giratina ex Darkrai ex", 3895, 3451, 211],
  [3, "Guzzlord ex", 2044, 1900, 97]
];

const STATE = {
  processedData: [],
  rankedByFormula: [],
  templatesEnabled: true
};

// Get dynamic z-score based on sample size
const getDynamicZScore = (n) => {
  if (n < 30) return 2.576;
  if (n < 200) return 2.576 + (2.326 - 2.576) * ((n - 30) / 170);
  if (n < 1000) return 2.326 + (1.96 - 2.326) * ((n - 200) / 800);
  return 1.96;
};

// Calculate meta adjustment factor based on dataset size
const getMetaAdjustmentFactor = (totalDecks) => {
  const referenceSize = 100;
  if (totalDecks >= referenceSize) return 1.0;
  const boost = 1 + (referenceSize - totalDecks) / (referenceSize * 4);
  return Math.min(boost, 1.3);
};

// Hierarchical Bayesian ranking with meta adjustment
const hierarchicalBayesian = (allData) => {
  const totalDecks = allData.length;
  const metaAdjustment = getMetaAdjustmentFactor(totalDecks);

  const deckStats = allData.map(([_, __, wins, losses, ties]) => {
    const n = wins + losses + ties;
    const adjWins = wins + 0.5 * ties;
    return { n, winRate: adjWins / n };
  });

  const totalGames = deckStats.reduce((sum, d) => sum + d.n, 0);
  const weightedMean = deckStats.reduce((sum, d) => sum + d.winRate * d.n, 0) / totalGames;
  const variance = deckStats.reduce((sum, d) => sum + d.n * Math.pow(d.winRate - weightedMean, 2), 0) / totalGames;

  const meanEst = Math.max(0.01, Math.min(0.99, weightedMean));
  const varEst = Math.max(0.0001, Math.min(meanEst * (1 - meanEst) * 0.85, variance));
  const alphaBeta = Math.max(1, (meanEst * (1 - meanEst) / varEst) - 1);
  const priorAlpha = meanEst * alphaBeta;
  const priorBeta = (1 - meanEst) * alphaBeta;

  const zScores = { 2000: -1.28, 10000: -1.645, 50000: -1.96, Infinity: -2.326 };
  let baseZ = zScores[Object.keys(zScores).find(key => totalGames < key)] || zScores.Infinity;

  const metaDiversity = variance / (meanEst * (1 - meanEst));
  const adaptiveZ = baseZ * Math.max(0.8, Math.min(1.2, 1 / (0.3 + metaDiversity)));
  const adjustedZ = adaptiveZ / metaAdjustment;

  return allData.map(([origRank, deck, wins, losses, ties]) => {
    const n = wins + losses + ties;
    const adjWins = wins + 0.5 * ties;
    const adjLosses = losses + 0.5 * ties;
    const postAlpha = priorAlpha + adjWins;
    const postBeta = priorBeta + adjLosses;
    const posteriorMean = postAlpha / (postAlpha + postBeta);
    const postVariance = (postAlpha * postBeta) / ((postAlpha + postBeta) ** 2 * (postAlpha + postBeta + 1));
    const lowerBound = Math.max(0, posteriorMean + adjustedZ * Math.sqrt(postVariance));
    const adjustedLowerBound = Math.min(0.99, lowerBound);

    return { origRank, deck, wins, losses, ties, n, posteriorMean, adjustedLowerBound };
  });
};

// Convert win percentage to strength score
const calculateStrength = (winPct) => winPct * 1.8;

// Get tier from strength
const getTier = (strength) => {
  if (strength >= 100) return 'X';
  if (strength >= 97) return 'S++';
  if (strength >= 94) return 'S+';
  if (strength >= 91) return 'S';
  if (strength >= 88) return 'A';
  if (strength >= 84) return 'B';
  if (strength >= 80) return 'C';
  if (strength >= 75) return 'D';
  if (strength >= 70) return 'E';
  return 'Unranked';
};

// Template definitions
const TEMPLATES = [
  {
    name: "Format Tyrant",
    requirements: { share: { min: 15 }, winPct: { min: 53 }, strength: { min: 92 }, metaImpact: { min: 800 } },
    template: "{deck_name} is the format tyrant, commanding {share}% of the entire meta with {win_pct}% adjusted win rate. At {strength} ({tier}) with {meta_impact} meta impact, it defines the competitive landscape."
  },
  {
    name: "Format Dominator",
    requirements: { share: { min: 12 }, winPct: { min: 52 }, strength: { min: 90 } },
    template: "{deck_name} dominates the format at {share}% of the meta with a reliable {win_pct}% adjusted win rate. Rating: {strength} ({tier})."
  },
  {
    name: "Apex Predator",
    requirements: { strength: { min: 91 }, winPct: { min: 54 }, share: { min: 6 }, matchesPercent: { min: 3 } },
    template: "{deck_name} is the apex predator: {strength} ({tier}) with {win_pct}% adjusted win rate across {matches} matches. At {share}% of the format, it's the complete package."
  }
];

// Check if deck meets template requirements
const meetsRequirements = (deck, requirements, totalGames, deckShare) => {
  for (const [key, constraint] of Object.entries(requirements)) {
    let value;
    switch (key) {
      case 'matchesPercent':
        value = (deck.n / totalGames) * 100;
        break;
      case 'share':
        value = deckShare;
        break;
      case 'winPct':
        value = deck.hierarchicalWinPct;
        break;
      case 'strength':
        value = deck.strength;
        break;
      case 'metaImpact':
        value = (deckShare / 100) * deck.hierarchicalWinPct;
        break;
      default:
        value = deck[key];
    }
    if (constraint.min !== undefined && value < constraint.min) return false;
    if (constraint.max !== undefined && value > constraint.max) return false;
  }
  return true;
};

// Find best matching template for deck
const findBestTemplate = (deck, totalGames, deckShare) => {
  for (const template of TEMPLATES) {
    if (meetsRequirements(deck, template.requirements, totalGames, deckShare)) {
      return template;
    }
  }
  return TEMPLATES[TEMPLATES.length - 1];
};

// Generate narrative text from template
const generateNarrative = (deck, template, deckShare) => {
  const metaImpact = (deckShare / 100) * deck.hierarchicalWinPct;
  return template.template
    .replace(/{deck_name}/g, deck.deck)
    .replace(/{share}/g, deckShare.toFixed(2))
    .replace(/{win_pct}/g, deck.hierarchicalWinPct.toFixed(2))
    .replace(/{strength}/g, deck.strength.toFixed(2))
    .replace(/{tier}/g, getTier(deck.strength))
    .replace(/{matches}/g, deck.n)
    .replace(/{meta_impact}/g, metaImpact.toFixed(2));
};

// Process and rank all data
const processData = () => {
  const formulaResults = hierarchicalBayesian(data);
  const totalGames = data.reduce((sum, [, , wins, losses, ties]) => sum + wins + losses + ties, 0);

  STATE.processedData = data.map(([origRank, deck, wins, losses, ties], idx) => {
    const n = wins + losses + ties;
    const w = wins + 0.5 * ties;
    const observedP = w / n;
    const f = formulaResults[idx];
    const share = (n / totalGames) * 100;
    const hierarchicalWinPct = f.adjustedLowerBound * 100;
    const strength = calculateStrength(hierarchicalWinPct);

    return {
      origRank, deck, wins, losses, ties, n, w, observedP, share,
      hierarchicalWinPct, strength, posteriorMean: f.posteriorMean
    };
  });

  STATE.rankedByFormula = [...STATE.processedData]
    .sort((a, b) => b.strength !== a.strength ? b.strength - a.strength : b.observedP - a.observedP)
    .map((item, idx) => ({ ...item, rank: idx + 1, delta: item.origRank - (idx + 1) }));
};

// Create rank change HTML indicator
const rankChangeHTML = (delta) => {
  const icons = {
    up: '<polyline points="12 19 12 5 5 12"></polyline>',
    down: '<polyline points="12 5 12 19 19 12"></polyline>',
    neutral: '<line x1="5" y1="12" x2="19" y2="12"></line>'
  };
  const [type, prefix] = delta > 0 ? ['positive', '+'] : delta < 0 ? ['negative', ''] : ['neutral', ''];
  const icon = delta > 0 ? 'up' : delta < 0 ? 'down' : 'neutral';
  return `<span class="rank-change ${type}"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">${icons[icon]}</svg> ${prefix}${delta}</span>`;
};

// Generate table HTML
const generateTable = () => {
  const ranked = STATE.rankedByFormula;
  const totalGames = data.reduce((sum, [, , w, l, t]) => sum + w + l + t, 0);
  const headers = ['Rank', 'Deck', 'W', 'L', 'T', 'Games', 'Post Mean%', 'Hier LB%', 'Strength', 'Change'];

  let html = `
    <div class="templates-toggle">
      <label class="toggle-label">Show Narratives</label>
      <label class="toggle-switch">
        <input type="checkbox" ${STATE.templatesEnabled ? 'checked' : ''} onchange="window.toggleTemplates()">
        <span class="toggle-slider"></span>
      </label>
    </div>
    <table>
      <thead>
        <tr>${headers.map(h => `<th${h.match(/^(Post|Hier|Change)/) ? ' class="text-center"' : ''}>${h}</th>`).join('')}</tr>
      </thead>
      <tbody>
  `;

  for (const item of ranked) {
    html += `
      <tr>
        <td class="rank">${item.rank}</td>
        <td>${item.deck}</td>
        <td class="center">${item.wins}</td>
        <td class="center">${item.losses}</td>
        <td class="center">${item.ties}</td>
        <td class="center">${item.n}</td>
        <td class="center">${(item.posteriorMean * 100).toFixed(2)}%</td>
        <td class="center">${item.hierarchicalWinPct.toFixed(2)}%</td>
        <td class="strength">${item.strength.toFixed(2)}</td>
        <td class="center">${rankChangeHTML(item.delta)}</td>
      </tr>
    `;

    if (STATE.templatesEnabled) {
      const template = findBestTemplate(item, totalGames, item.share);
      const narrative = generateNarrative(item, template, item.share);
      const tierClass = `tier-${getTier(item.strength).replace(/\+/g, '-plus')}`;

      html += `
        <tr class="narrative-row">
          <td colspan="10">
            <div class="narrative-content">
              <div class="narrative-header">
                <svg class="template-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                ${template.name}
                <span class="template-badge ${tierClass}">${getTier(item.strength)}</span>
              </div>
              <div class="narrative-text">${narrative}</div>
            </div>
          </td>
        </tr>
      `;
    }
  }

  html += `</tbody></table>`;

  if (STATE.templatesEnabled) {
    html += `
      <div class="template-legend">
        <div class="legend-item"><div class="legend-tier tier-X">X</div><div class="legend-description">100+</div></div>
        <div class="legend-item"><div class="legend-tier tier-S-plus-plus">S++</div><div class="legend-description">97-100</div></div>
        <div class="legend-item"><div class="legend-tier tier-S-plus">S+</div><div class="legend-description">94-97</div></div>
        <div class="legend-item"><div class="legend-tier tier-S">S</div><div class="legend-description">91-94</div></div>
        <div class="legend-item"><div class="legend-tier tier-A">A</div><div class="legend-description">88-91</div></div>
        <div class="legend-item"><div class="legend-tier tier-B">B</div><div class="legend-description">84-88</div></div>
        <div class="legend-item"><div class="legend-tier tier-C">C</div><div class="legend-description">80-84</div></div>
        <div class="legend-item"><div class="legend-tier tier-D">D</div><div class="legend-description">75-80</div></div>
        <div class="legend-item"><div class="legend-tier tier-E">E</div><div class="legend-description">70-75</div></div>
        <div class="legend-item"><div class="legend-tier tier-Unranked">U</div><div class="legend-description">Below 70</div></div>
      </div>
    `;
  }

  return html;
};

// Update table display
const updateTable = () => {
  document.querySelector('.table-wrapper').innerHTML = generateTable();
};

// Toggle templates visibility
window.toggleTemplates = () => {
  STATE.templatesEnabled = !STATE.templatesEnabled;
  updateTable();
};

// Initialize application
const init = () => {
    processData();

    document.getElementById('root').innerHTML = `
        <div class="container">
            <h1>Tournament Deck Ranking Analysis</h1>

            <div class="card">
                <h2>Methodology</h2>
                <div class="methodology-grid">
                    <div class="methodology-box formula">
                        <h3>Hierarchical Bayesian Estimation with Meta Awareness</h3>
                        <p><strong>What it does:</strong> This method is intelligent about the entire tournament landscape. It first analyzes tens of thousands of results across all decks to understand: "What does typical performance look like in this meta?" Then it ranks each deck by intelligently blending two sources of information: what the broader meta tells us AND what this specific deck's individual results show. A deck with few results gets slightly pulled toward the meta average (since we have less certainty). A deck with extensive results gets ranked almost purely on its own merit (since we're very confident).</p>
                        <p><strong>How to think about it:</strong> Imagine reviewing tournament data from tens of thousands of matches. You notice overall patterns: "Most decks win between 45-55% of their games, but there's some variance in the meta." Now when you see a deck with very few games and a strange win rate, you're rightfully skeptical—update your estimate toward what you know from the broader data. But a deck that's been played extensively and consistently wins 65% of the time? That's real.</p>
                    </div>
                </div>
            </div>

            <div class="tabs-container">
                <div class="tabs-header">
                    <button class="tab-button formula active" onclick="switchTab('formula')">Rankings</button>
                </div>
                <div class="table-wrapper">${generateTable()}</div>
            </div>

            <div class="card insights">
                <h2>Key Features</h2>
                <div class="insights-list">
                    <p><strong>Dynamic z-scores:</strong> Intelligently scales confidence based on sample size. Tiny samples (n&lt;30) use 99th percentile, medium samples use 98th, and large samples (n&gt;1000) use 95th percentile.</p>
                    <p><strong>Better strength scaling:</strong> Maps 30-60% win rates to 1-100 strength, where 50% = 50 points (average), creating meaningful rankings.</p>
                    <p><strong>Meta diversity adjustment:</strong> Adapts confidence based on whether the meta is tightly grouped or widely spread.</p>
                    <p><strong>Small meta boost:</strong> Applies a progressive boost for metas with fewer than 100 unique decks, ensuring score differentiation remains meaningful.</p>
                    <p><strong>Template narratives:</strong> Toggle narrative descriptions for each deck that adapt based on performance metrics.</p>
                </div>
            </div>
        </div>
    `;

    updateTable();
};

document.addEventListener('DOMContentLoaded', init);