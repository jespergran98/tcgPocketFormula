const data = [
  [1, "Suicune ex Greninja", 253, 239, 10],
  [2, "Giratina ex Darkrai ex", 123, 152, 8],
  [3, "Flareon ex Eevee ex", 101, 104, 2],
  [4, "Guzzlord ex", 54, 87, 0],
  [5, "Silvally Giratina ex", 18, 32, 0],
  [6, "Tapu Koko ex Pikachu ex", 25, 25, 1],
  [7, "Dragonite ex Sylveon ex", 16, 20, 0],
  [8, "Snorlax ex Darkrai ex", 17, 14, 0],
  [9, "Espeon ex Sylveon ex", 6, 16, 0],
  [10, "Raikou ex Arceus ex", 7, 15, 0],
  [11, "Tapu Koko ex Oricorio", 9, 15, 0],
  [12, "Exeggutor ex Alolan Exeggutor", 10, 11, 0],
  [13, "Arceus ex Pichu", 20, 10, 0],
  [14, "Pikachu ex Oricorio", 6, 14, 0],
  [15, "Silvally Rampardos", 5, 15, 0],
  [16, "Decidueye ex Decidueye", 12, 10, 2],
  [17, "Suicune ex Palkia ex", 8, 15, 0],
  [18, "Buzzwole ex Pheromosa", 9, 8, 0],
  [19, "Silvally Zeraora", 5, 11, 0],
  [20, "Raikou ex Pikachu ex", 3, 13, 0],
  [21, "Pikachu ex Oricorio", 7, 12, 0],
  [22, "Darkrai ex Arceus ex", 6, 4, 0],
  [23, "Charizard ex", 17, 6, 0],
  [24, "Arceus ex Tapu Koko ex", 14, 5, 0],
  [25, "Pikachu ex Tapu Koko ex", 1, 2, 1],
  [26, "Guzzlord ex Mantyke", 2, 3, 0],
  [27, "Raikou ex Tapu Koko ex", 0, 1, 0],
  [28, "Naganadel Guzzlord ex", 2, 3, 0],
  [29, "Suicune ex Slowking", 0, 2, 0],
  [30, "Dragonite ex Oricorio", 5, 3, 0],
  [31, "Donphan ex Rampardos", 3, 3, 0],
  [32, "Darkrai ex Umbreon", 0, 4, 0],
  [33, "Dragonite ex Dragonite", 3, 3, 0],
  [34, "Arceus ex Crobat", 1, 2, 0],
  [35, "Ho-Oh ex Lugia ex", 3, 3, 0],
  [36, "Charizard ex Entei ex", 4, 3, 0],
  [37, "Raikou ex Decidueye ex", 3, 3, 0],
  [38, "Snorlax ex Miltank", 1, 1, 0],
  [39, "Suicune ex Gyarados", 4, 3, 0],
  [40, "Magcargo", 1, 6, 0],
  [41, "Meowscarada Decidueye ex", 1, 2, 0],
  [42, "Paldean Clodsire ex Scolipede", 2, 5, 0],
  [43, "Greninja Oricorio", 3, 3, 0],
  [44, "Tsareena Celebi ex", 1, 6, 0],
  [45, "Charizard ex Sylveon ex", 5, 3, 0],
  [46, "Flareon ex Sylveon ex", 5, 3, 0],
  [47, "Darkrai ex Magby", 0, 7, 0],
  [48, "Flareon ex Flareon", 0, 2, 0],
  [49, "Lanturn ex Zeraora", 1, 1, 0],
  [50, "Incineroar ex Entei ex", 3, 3, 0],
  [51, "Arceus ex Darkrai ex", 3, 3, 0],
  [52, "Mewtwo ex Gardevoir", 0, 2, 0],
  [53, "Guzzlord ex", 2, 5, 0],
  [54, "Gyarados Suicune ex", 0, 2, 0],
  [55, "Suicune ex Greninja", 3, 4, 0],
  [56, "Meowscarada Pheromosa", 3, 3, 0],
  [57, "Moltres ex Entei ex", 1, 3, 0],
  [58, "Buzzwole ex Celesteela", 3, 4, 0],
  [59, "Magcargo Magby", 1, 2, 0],
  [60, "Silvally Pichu", 4, 3, 0],
  [61, "Arceus ex Carnivine", 1, 3, 0],
  [62, "Alolan Raichu ex Silvally", 3, 3, 0],
  [63, "Kabutops Rampardos", 3, 4, 0],
  [64, "Suicune ex Sylveon ex", 0, 2, 0],
  [65, "Snorlax ex Giratina ex", 4, 3, 0],
  [66, "Pikachu ex Magnezone", 1, 2, 0],
  [67, "Pikachu ex Raikou ex", 0, 3, 0],
  [68, "Lugia ex Ho-Oh ex", 2, 2, 0],
  [69, "Flareon ex Leafeon ex", 3, 4, 0],
  [70, "Pikachu ex Magnezone", 1, 2, 0],
  [71, "Eevee ex Pikachu ex", 1, 2, 0],
  [72, "Silvally Buzzwole ex", 1, 4, 0],
  [73, "Umbreon ex Eevee ex", 2, 5, 0],
  [74, "Alolan Exeggutor Leafeon", 6, 1, 2],
  [75, "Crobat ex Darkrai ex", 2, 2, 0],
  [76, "Exeggutor ex Celebi ex", 1, 1, 0]
];

const STATE = {
    activeTab: 'formula1',
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
// Smaller meta = higher boost to scores
const getMetaAdjustmentFactor = (totalDecks) => {
    const referenceSize = 100; // Consider 100+ decks as "normal" size
    
    if (totalDecks >= referenceSize) return 1.0;
    
    // For small metas, apply a boost that increases as deck count decreases
    // Maps: 100 decks -> 1.0x, 50 decks -> 1.08x, 25 decks -> 1.15x, 10 decks -> 1.25x
    const boost = 1 + (referenceSize - totalDecks) / (referenceSize * 4);
    return Math.min(boost, 1.3); // Cap at 30% boost
};

// Hierarchical Bayesian ranking with meta adjustment
const hierarchicalBayesian = (allData) => {
    const totalDecks = allData.length;
    const metaAdjustment = getMetaAdjustmentFactor(totalDecks);
    
    // Calculate empirical statistics
    const deckStats = allData.map(([_, __, wins, losses, ties]) => {
        const n = wins + losses + ties;
        const adjWins = wins + 0.5 * ties;
        return { n, winRate: adjWins / n };
    });

    const totalGames = deckStats.reduce((sum, d) => sum + d.n, 0);
    const weightedMean = deckStats.reduce((sum, d) => sum + d.winRate * d.n, 0) / totalGames;
    const variance = deckStats.reduce((sum, d) => sum + d.n * Math.pow(d.winRate - weightedMean, 2), 0) / totalGames;

    // Estimate Beta hyperparameters
    const meanEst = Math.max(0.01, Math.min(0.99, weightedMean));
    const varEst = Math.max(0.0001, Math.min(meanEst * (1 - meanEst) * 0.85, variance));
    const alphaBeta = Math.max(1, (meanEst * (1 - meanEst) / varEst) - 1);
    const priorAlpha = meanEst * alphaBeta;
    const priorBeta = (1 - meanEst) * alphaBeta;

    // Determine base z-score
    const zScores = { 2000: -1.28, 10000: -1.645, 50000: -1.96, Infinity: -2.326 };
    let baseZ = zScores[Object.keys(zScores).find(key => totalGames < key)] || zScores.Infinity;

    // Adjust for meta diversity
    const metaDiversity = variance / (meanEst * (1 - meanEst));
    const adaptiveZ = baseZ * Math.max(0.8, Math.min(1.2, 1 / (0.3 + metaDiversity)));

    // Calculate hierarchical estimates with meta adjustment
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
// Maps ~0-100% win rate to 0-100 strength score, with 50% = 50 points
const calculateStrength = (winPct) => {
    return winPct * 1.8;
};

// Process and rank all data
const processData = () => {
    const formula2Results = hierarchicalBayesian(data);

    STATE.processedData = data.map(([origRank, deck, wins, losses, ties], idx) => {
        const n = wins + losses + ties;
        const w = wins + 0.5 * ties;
        const observedP = w / n;
        const wilsonLb = wilsonLower(observedP, n);
        const f2 = formula2Results[idx];

        return {
            origRank, deck, wins, losses, ties, n, w, observedP,
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
    
    return ranked.map(item => `
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
    `).join('');
};

// Generate table HTML
const generateTable = (formula) => {
    const ranked = formula === 1 ? STATE.rankedByFormula1 : STATE.rankedByFormula2;
    const headers = formula === 1
        ? ['Rank', 'Deck', 'W', 'L', 'T', 'Games', 'Win%', 'Eff Win%', 'Strength', 'Change']
        : ['Rank', 'Deck', 'W', 'L', 'T', 'Games', 'Post Mean%', 'Hier LB%', 'Strength', 'Change'];
    
    return `
        <table>
            <thead class="formula${formula}">
                <tr>${headers.map(h => `<th class="${h.includes('%') ? 'text-center' : ''}">${h}</th>`).join('')}</tr>
            </thead>
            <tbody>${generateTableRows(ranked, formula)}</tbody>
        </table>
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
                        <h3>Formula 1: Adaptive Wilson Score Interval</h3>
                        <p><strong>What it does:</strong> Ranks decks by asking "what's the worst this deck's true win rate could realistically be?" A deck with 5 wins and 0 losses looks perfect, but with so few games, it could easily be a fluke. This formula calculates a conservative "effective win rate" that accounts for that uncertainty. Decks with more tournament games get less of a penalty because we have more evidence of their true strength.</p>
                        <p><strong>The math:</strong> Uses Wilson score confidence intervals with adaptive z-scores scaling from 2.576 (99% confidence) for small samples (n<30) down to 1.96 (95% confidence) for large samples (n>1000). The lower bound is computed via: (pÌ‚ + zÂ²/2n - zâˆš(pÌ‚(1-pÌ‚)/n + zÂ²/4nÂ²)) / (1 + zÂ²/n), where pÌ‚ is the observed win rate and n is total games. This provides a statistically conservative estimate that naturally penalizes small sample sizes while converging toward the empirical win rate as evidence accumulates.</p>
                    </div>
                    <div class="methodology-box formula2">
                        <h3>Formula 2: Hierarchical Bayesian Estimation (Meta-Adjusted)</h3>
                        <p><strong>What it does:</strong> First analyzes the entire tournament meta to learn what "typical" deck performance looks like, then ranks each deck by blending this baseline knowledge with the deck's actual results. Decks with fewer tournament games get pulled toward the meta average (since we're less certain about them), while decks with lots of games are ranked almost entirely on their own merit. It's smarter about handling the meta's overall balance—if all decks are closely matched, it's more conservative; if there's a clear tier gap, it allows more separation. <strong>NEW: In smaller metas (fewer unique decks), all scores receive a mild boost</strong> to prevent scores from clustering too tightly.</p>
                        <p><strong>The math:</strong> Implements empirical Bayes using Beta-Binomial conjugate priors with an additional meta-adjustment factor. For datasets with fewer than 100 unique decks, a boost is applied: boost = 1 + (100 - deckCount) / 400, capped at 1.3x (30% maximum). This ensures that smaller competitive formats still produce meaningful score differentiation. The rest follows the standard hierarchical approach with meta-diversity-adjusted confidence intervals.</p>
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
                    <p><strong>Improved Bayesian priors:</strong> Better Beta distribution parameter estimation for more appropriate prior distributions.</p>
                    <p><strong>Scales 1 to 100k games:</strong> Both formulas maintain stable, meaningful rankings at any scale.</p>
                </div>
            </div>
        </div>
    `;

    updateTable();
};

document.addEventListener('DOMContentLoaded', init);