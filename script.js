const data = [
    [1, "Giratina ex Darkrai ex", 7284, 5937, 221],
    [2, "Gyarados ex Manaphy", 3632, 3116, 92],
    [3, "Giratina ex Mewtwo ex", 1934, 1790, 47],
    [4, "Gallade ex Hitmonlee", 1718, 1683, 38],
    [5, "Charizard ex Moltres ex", 1371, 1379, 27],
    [6, "Dialga ex Arceus ex", 1130, 1291, 23],
    [7, "Rampardos Lucario", 1023, 1001, 27],
    [8, "Magnezone Meowscarada", 1040, 928, 17]
];

const STATE = {
    activeTab: 'formula1',
    templatesEnabled: false,
    processedData: [],
    rankedByFormula1: [],
    rankedByFormula2: []
};

// Get dynamic z-score based on sample size
const getDynamicZScore = (n) => {
    if (n < 30) return 2.576;
    if (n < 200) return 2.576 + (2.326 - 2.576) * ((n - 30) / 170);
    if (n < 1000) return 2.326 + (1.96 - 2.326) * ((n - 200) / 800);
    return 1.96;
};

// Wilson score lower bound
const wilsonLower = (p, n) => {
    if (n === 0) return 0;
    const z = getDynamicZScore(n);
    const z2 = z * z;
    const term1 = p + z2 / (2 * n);
    const term2 = z * Math.sqrt((p * (1 - p) / n) + (z2 / (4 * n * n)));
    const denom = 1 + z2 / n;
    return (term1 - term2) / denom;
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

    return allData.map(([origRank, deck, wins, losses, ties]) => {
        const n = wins + losses + ties;
        const adjWins = wins + 0.5 * ties;
        const adjLosses = losses + 0.5 * ties;

        const postAlpha = priorAlpha + adjWins;
        const postBeta = priorBeta + adjLosses;
        const posteriorMean = postAlpha / (postAlpha + postBeta);
        const postVariance = (postAlpha * postBeta) / ((postAlpha + postBeta) ** 2 * (postAlpha + postBeta + 1));
        const lowerBound = Math.max(0, posteriorMean + adaptiveZ * Math.sqrt(postVariance));
        const adjustedLowerBound = Math.min(0.99, lowerBound * metaAdjustment);
        const dataWeight = n / (n + priorAlpha + priorBeta);

        return { origRank, deck, wins, losses, ties, n, lowerBound, adjustedLowerBound, posteriorMean, dataWeight };
    });
};

// Convert win percentage to strength score
const calculateStrength = (winPct) => {
    return winPct * 1.8;
};

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
    id: 1,
    name: "Format Tyrant",
    requirements: { share: { min: 15.00 }, adjustedWinRate: { min: 53.00 }, strength: { min: 92.00 }, metaImpact: { min: 800.00 } },
    template: "{deck_name} is the format tyrant, commanding {share}% of the entire meta with {adjusted_win_rate}% adjusted win rate. At {strength} strength ({tier}) with {meta_impact} meta impact, it defines the competitive landscape."
  },
  {
    id: 2,
    name: "Format Dominator",
    requirements: { share: { min: 12.00 }, adjustedWinRate: { min: 52.00 }, strength: { min: 90.00 } },
    template: "{deck_name} dominates the format at {share}% of the meta with a reliable {adjusted_win_rate}% adjusted win rate. Strength: {strength} ({tier})."
  },
  {
    id: 3,
    name: "Apex Predator",
    requirements: { strength: { min: 91.00 }, adjustedWinRate: { min: 54.00 }, share: { min: 6.00 }, matchesPercent: { min: 3.00 } },
    template: "{deck_name} is the apex predator: {strength} strength ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches. At {share}% of the format, it's the complete package."
  },
  {
    id: 30,
    name: "Standard Report",
    requirements: {},
    template: "{deck_name} sits at {strength} strength ({tier}) representing {share}% of the format with {adjusted_win_rate}% adjusted win rate across {W}-{L}-{T} ({matches} matches)."
  }
];

const meetsRequirements = (deck, requirements, totalMatches, totalShare) => {
    for (const [key, constraint] of Object.entries(requirements)) {
        let value;
        if (key === 'matchesPercent') {
            value = (deck.n / totalMatches) * 100;
        } else if (key === 'avgMatchesPerEntry') {
            value = deck.n / Math.max(1, Math.ceil(deck.n / 7));
        } else if (key === 'share') {
            value = totalShare;
        } else if (key === 'adjustedWinRate') {
            value = deck.effectiveWinPct1;
        } else if (key === 'strength') {
            value = deck.strength1;
        } else if (key === 'metaImpact') {
            value = (totalShare / 100) * deck.effectiveWinPct1;
        } else {
            value = deck[key];
        }
        
        if (constraint.min !== undefined && value < constraint.min) return false;
        if (constraint.max !== undefined && value > constraint.max) return false;
    }
    return true;
};

const findBestTemplate = (deck, totalMatches, totalShare) => {
    for (const template of TEMPLATES) {
        if (meetsRequirements(deck, template.requirements, totalMatches, totalShare)) {
            return template;
        }
    }
    return TEMPLATES[TEMPLATES.length - 1];
};

const generateNarrative = (deck, template, totalShare) => {
    const metaImpact = (totalShare / 100) * deck.effectiveWinPct1;
    const avgMatchesPerEntry = deck.n / Math.max(1, Math.ceil(deck.n / 7));
    
    return template.template
        .replace(/{deck_name}/g, deck.deck)
        .replace(/{share}/g, totalShare.toFixed(2))
        .replace(/{adjusted_win_rate}/g, deck.effectiveWinPct1.toFixed(2))
        .replace(/{strength}/g, deck.strength1.toFixed(2))
        .replace(/{tier}/g, getTier(deck.strength1))
        .replace(/{matches}/g, deck.n)
        .replace(/{W}/g, deck.wins)
        .replace(/{L}/g, deck.losses)
        .replace(/{T}/g, deck.ties)
        .replace(/{meta_impact}/g, metaImpact.toFixed(2))
        .replace(/{avg_matches_per_entry}/g, avgMatchesPerEntry.toFixed(2));
};

// Process and rank all data
const processData = () => {
    const formula2Results = hierarchicalBayesian(data);
    const totalMatches = data.reduce((sum, [,,,losses, ties, wins]) => sum + wins + losses + ties, 0);

    STATE.processedData = data.map(([origRank, deck, wins, losses, ties], idx) => {
        const n = wins + losses + ties;
        const w = wins + 0.5 * ties;
        const observedP = w / n;
        const wilsonLb = wilsonLower(observedP, n);
        const f2 = formula2Results[idx];
        const share = (n / totalMatches) * 100;

        return {
            origRank, deck, wins, losses, ties, n, w, observedP, share,
            wilsonLb, effectiveWinPct1: wilsonLb * 100, strength1: calculateStrength(wilsonLb * 100),
            hierarchicalLower: f2.adjustedLowerBound, hierarchicalWinPct: f2.adjustedLowerBound * 100,
            strength2: calculateStrength(f2.adjustedLowerBound * 100), posteriorMean: f2.posteriorMean
        };
    });

    const sortByFormula = (formula) => {
        const key = formula === 1 ? 'strength1' : 'strength2';
        const ranked = [...STATE.processedData].sort((a, b) => 
            b[key] !== a[key] ? b[key] - a[key] : b.observedP - a.observedP
        );
        return ranked.map((item, idx) => ({ ...item, [`rank${formula}`]: idx + 1, [`delta${formula}`]: item.origRank - (idx + 1) }));
    };

    STATE.rankedByFormula1 = sortByFormula(1);
    STATE.rankedByFormula2 = sortByFormula(2);
};

// Create rank change indicator
const rankChangeHTML = (delta) => {
    const icons = {
        up: '<polyline points="12 19 12 5 5 12"></polyline>',
        down: '<polyline points="12 5 12 19 19 12"></polyline>',
        neutral: '<line x1="5" y1="12" x2="19" y2="12"></line>'
    };
    const [type, prefix] = delta > 0 ? ['positive', '+'] : delta < 0 ? ['negative', ''] : ['neutral', ''];
    const iconKey = delta > 0 ? 'up' : delta < 0 ? 'down' : 'neutral';
    return `<span class="rank-change ${type}"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">${icons[iconKey]}</svg> ${prefix}${delta}</span>`;
};

// Generate table rows
const generateTableRows = (ranked, formula) => {
    const cols = formula === 1 
        ? ['effectiveWinPct1', 'strength1', 'delta1']
        : ['posteriorMean', 'hierarchicalWinPct', 'strength2', 'delta2'];
    
    let html = '';
    
    for (const item of ranked) {
        html += `
            <tr>
                <td class="rank">${item[`rank${formula}`]}</td>
                <td>${item.deck}</td>
                <td class="center">${item.wins}</td>
                <td class="center">${item.losses}</td>
                <td class="center">${item.ties}</td>
                <td class="center">${item.n}</td>
                ${formula === 1 
                    ? `<td class="center">${(item.observedP * 100).toFixed(2)}%</td><td class="center">${item.effectiveWinPct1.toFixed(2)}%</td>`
                    : `<td class="center">${(item.posteriorMean * 100).toFixed(2)}%</td><td class="center">${item.hierarchicalWinPct.toFixed(2)}%</td>`
                }
                <td class="strength">${item[`strength${formula}`].toFixed(2)}</td>
                <td class="center">${rankChangeHTML(item[`delta${formula}`])}</td>
            </tr>
        `;
        
        if (STATE.templatesEnabled && formula === 1) {
            const template = findBestTemplate(item, data.reduce((sum, [,,,l,t,w]) => sum + w + l + t, 0), item.share);
            const narrative = generateNarrative(item, template, item.share);
            const tierClass = `tier-${getTier(item.strength1).replace(/\+/g, '-plus')}`;
            
            html += `
                <tr class="narrative-row">
                    <td colspan="10">
                        <div class="narrative-content">
                            <div class="narrative-header">
                                <svg class="template-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                                ${template.name}
                                <span class="template-badge ${tierClass}">${getTier(item.strength1)}</span>
                            </div>
                            <div class="narrative-text">${narrative}</div>
                        </div>
                    </td>
                </tr>
            `;
        }
    }
    
    return html;
};

// Generate table HTML
const generateTable = (formula) => {
    const ranked = formula === 1 ? STATE.rankedByFormula1 : STATE.rankedByFormula2;
    const headers = formula === 1
        ? ['Rank', 'Deck', 'W', 'L', 'T', 'Games', 'Win%', 'Eff Win%', 'Strength', 'Change']
        : ['Rank', 'Deck', 'W', 'L', 'T', 'Games', 'Post Mean%', 'Hier LB%', 'Strength', 'Change'];
    
    return `
        ${STATE.templatesEnabled ? `
            <div class="templates-toggle">
                <label class="toggle-label">Show Narratives</label>
                <label class="toggle-switch">
                    <input type="checkbox" ${STATE.templatesEnabled ? 'checked' : ''} onchange="window.toggleTemplates()">
                    <span class="toggle-slider"></span>
                </label>
            </div>
        ` : `
            <div class="templates-toggle">
                <label class="toggle-label">Show Narratives</label>
                <label class="toggle-switch">
                    <input type="checkbox" ${STATE.templatesEnabled ? 'checked' : ''} onchange="window.toggleTemplates()">
                    <span class="toggle-slider"></span>
                </label>
            </div>
        `}
        <table>
            <thead class="formula${formula}">
                <tr>${headers.map(h => `<th class="${h.includes('%') || h === 'Change' ? 'text-center' : ''}">${h}</th>`).join('')}</tr>
            </thead>
            <tbody>${generateTableRows(ranked, formula)}</tbody>
        </table>
        ${STATE.templatesEnabled && formula === 1 ? `
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
        ` : ''}
    `;
};

// Generate comparison table
const generateComparisonTable = () => {
    const rows = STATE.processedData.sort((a, b) => a.origRank - b.origRank).map(item => {
        const f1 = STATE.rankedByFormula1.find(d => d.deck === item.deck);
        const f2 = STATE.rankedByFormula2.find(d => d.deck === item.deck);
        return `
            <tr>
                <td class="rank">${item.origRank}</td>
                <td>${item.deck}</td>
                <td class="center">${f1.rank1}</td>
                <td class="center">${f1.strength1.toFixed(1)}</td>
                <td class="center">${f2.rank2}</td>
                <td class="center">${f2.strength2.toFixed(1)}</td>
            </tr>
        `;
    }).join('');

    return `
        <table>
            <thead class="comparison">
                <tr><th>Orig</th><th>Deck</th><th class="text-center">F1 Rank</th><th class="text-center">F1 Str</th><th class="text-center">F2 Rank</th><th class="text-center">F2 Str</th></tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    `;
};

// Update table display
const updateTable = () => {
    const html = STATE.activeTab === 'comparison' 
        ? generateComparisonTable()
        : generateTable(STATE.activeTab === 'formula1' ? 1 : 2);
    document.querySelector('.table-wrapper').innerHTML = html;
};

// Toggle templates
window.toggleTemplates = () => {
    STATE.templatesEnabled = !STATE.templatesEnabled;
    updateTable();
};

// Switch tabs
window.switchTab = (tab) => {
    STATE.activeTab = tab;
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab-button.${tab}`).classList.add('active');
    updateTable();
};

// Initialize app
const init = () => {
    processData();

    document.getElementById('root').innerHTML = `
        <div class="container">
            <h1>Tournament Deck Ranking Analysis</h1>

            <div class="card">
                <h2>Methodology Comparison</h2>
                <div class="methodology-grid">
                    <div class="methodology-box formula1">
                        <h3>Adaptive Wilson Score Interval</h3>
                        <p><strong>What it does:</strong> Imagine you're at a tournament and see a deck that won 5 games and lost 0. Looks unbeatable, right? But with only 5 games played, it might just be lucky. This method asks: "How confident are we really?" It calculates a conservative estimate of the deck's true strength by accounting for uncertainty. The key insight: decks with more tournament results get less penalty because we have stronger evidence of their actual power.</p>
                        <p><strong>How to think about it:</strong> Think of this like a confidence range. A 100% win rate from 5 games might really be anywhere from 60-100% true strength. A 60% win rate from hundreds of games is probably actually 58-62% true strength. This method uses the <em>lower bound</em> of that confidence range as the ranking—it's being pessimistic on purpose to fairly handle uncertainty. Note: ties are counted as 0.5 wins and 0.5 losses, so a 2-0-1 record is treated as 2.5 wins, 0.5 losses, and 3 total games.</p>
                    </div>
                    <div class="methodology-box formula2">
                        <h3>Hierarchical Bayesian Estimation with Meta Awareness</h3>
                        <p><strong>What it does:</strong> This method is intelligent about the entire tournament landscape. It first analyzes tens of thousands of results across all decks to understand: "What does typical performance look like in this meta?" Then it ranks each deck by intelligently blending two sources of information: what the broader meta tells us AND what this specific deck's individual results show. A deck with few results gets slightly pulled toward the meta average (since we have less certainty). A deck with extensive results gets ranked almost purely on its own merit (since we're very confident).</p>
                        <p><strong>How to think about it:</strong> Imagine reviewing tournament data from tens of thousands of matches. You notice overall patterns: "Most decks win between 45-55% of their games, but there's some variance in the meta." Now when you see a deck with very few games and a strange win rate, you're rightfully skeptical—update your estimate toward what you know from the broader data. But a deck that's been played extensively and consistently wins 65% of the time? That's real.</p>
                    </div>
                </div>
            </div>

            <div class="tabs-container">
                <div class="tabs-header">
                    <button class="tab-button formula1 active" onclick="switchTab('formula1')">Formula 1 Rankings</button>
                    <button class="tab-button formula2" onclick="switchTab('formula2')">Formula 2 Rankings</button>
                    <button class="tab-button comparison" onclick="switchTab('comparison')">Compare Both</button>
                </div>
                <div class="table-wrapper">${generateTable(1)}</div>
            </div>

            <div class="card insights">
                <h2>Key Improvements</h2>
                <div class="insights-list">
                    <p><strong>Dynamic z-scores:</strong> Formula 1 intelligently scales confidence based on sample size. Tiny samples (n&lt;30) use 99th percentile, medium samples use 98th, and large samples (n&gt;1000) use 95th percentile.</p>
                    <p><strong>Better strength scaling:</strong> Maps 30-60% win rates to 1-100 strength, where 50% = 50 points (average), creating meaningful rankings.</p>
                    <p><strong>Meta diversity adjustment:</strong> Formula 2 adapts confidence based on whether the meta is tightly grouped or widely spread.</p>
                    <p><strong>Small meta boost:</strong> Formula 2 now applies a progressive boost for metas with fewer than 100 unique decks, ensuring score differentiation remains meaningful.</p>
                    <p><strong>Template narratives:</strong> Toggle narrative descriptions for each deck that adapt based on performance metrics.</p>
                </div>
            </div>
        </div>
    `;

    updateTable();
};

document.addEventListener('DOMContentLoaded', init);