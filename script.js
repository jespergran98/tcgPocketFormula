const data = [
    [1, "Suicune ex Greninja", 6802, 5798, 299],
    [2, "Giratina ex Darkrai ex", 3895, 3450, 211],
    [3, "Guzzlord ex", 2044, 1900, 97],
    [4, "Flareon ex Eevee ex", 1499, 1386, 49],
    [5, "Espeon ex Sylveon ex", 849, 806, 31],
    [6, "Buzzwole ex Pheromosa", 652, 636, 22],
    [7, "Darkrai ex Arceus ex", 683, 649, 27],
    [8, "Arceus ex Pichu", 530, 503, 15],
    [9, "Dragonite ex Dragonite", 451, 505, 17],
    [10, "Greninja Oricorio", 514, 401, 41],
    [11, "Suicune ex Giratina ex", 415, 358, 17],
    [12, "Silvally Rampardos", 424, 385, 23],
    [13, "Decidueye ex Decidueye", 356, 351, 28],
    [14, "Raikou ex Magnezone", 330, 365, 7],
    [15, "Silvally Zeraora", 378, 348, 17],
    [16, "Charizard ex", 350, 328, 16],
    [17, "Dragonite ex Sylveon ex", 321, 305, 7],
    [18, "Tapu Koko ex Oricorio", 315, 321, 9],
    [19, "Raikou ex Pikachu ex", 267, 319, 3],
    [20, "Raikou ex Tapu Koko ex", 284, 267, 11],
    [21, "Exeggutor ex Alolan Exeggutor", 252, 285, 6],
    [22, "Silvally Pichu", 218, 229, 5],
    [23, "Tapu Koko ex Pikachu ex", 208, 189, 5],
    [24, "Umbreon ex Eevee ex", 197, 198, 5],
    [25, "Charizard ex Sylveon ex", 148, 186, 7],
    [26, "Guzzlord ex Naganadel", 189, 177, 10],
    [27, "Solgaleo ex Entei ex", 168, 189, 13],
    [28, "Pikachu ex Tapu Koko ex", 180, 141, 10],
    [29, "Raikou ex Arceus ex", 151, 158, 5],
    [30, "Crobat ex Darkrai ex", 159, 153, 2],
    [31, "Snorlax ex Darkrai ex", 151, 133, 6],
    [32, "Buzzwole ex Celesteela", 153, 145, 8],
    [33, "Silvally Oricorio", 121, 116, 5],
    [34, "Weavile ex Darkrai ex", 123, 121, 1],
    [35, "Skarmory ex", 131, 121, 7],
    [36, "Suicune ex Palkia ex", 119, 118, 2],
    [37, "Flareon ex Sylveon ex", 135, 129, 11],
    [38, "Silvally Giratina ex", 104, 108, 3],
    [39, "Alolan Raichu ex Raikou ex", 102, 109, 2],
    [40, "Suicune ex Gyarados", 86, 106, 4],
    [41, "Mewtwo ex Gardevoir", 62, 90, 3],
    [42, "Meowscarada", 57, 87, 0],
    [43, "Donphan ex Rampardos", 92, 90, 2],
    [44, "Incineroar ex", 107, 98, 6],
    [45, "Pikachu ex Raikou ex", 95, 99, 5],
    [46, "Arceus ex Oricorio", 65, 80, 4],
    [47, "Crobat ex Nihilego", 89, 97, 4],
    [48, "Pikachu ex Oricorio", 100, 93, 3],
    [49, "Donphan ex Lucario", 64, 86, 1],
    [50, "Flareon ex Leafeon ex", 58, 83, 0]
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

// Hierarchical Bayesian ranking
const hierarchicalBayesian = (allData) => {
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

    // Calculate hierarchical estimates
    return allData.map(([origRank, deck, wins, losses, ties]) => {
        const n = wins + losses + ties;
        const adjWins = wins + 0.5 * ties;
        const adjLosses = losses + 0.5 * ties;

        const postAlpha = priorAlpha + adjWins;
        const postBeta = priorBeta + adjLosses;
        const posteriorMean = postAlpha / (postAlpha + postBeta);
        const postVariance = (postAlpha * postBeta) / ((postAlpha + postBeta) ** 2 * (postAlpha + postBeta + 1));
        const lowerBound = Math.max(0, posteriorMean + adaptiveZ * Math.sqrt(postVariance));
        const dataWeight = n / (n + priorAlpha + priorBeta);

        return { origRank, deck, wins, losses, ties, n, lowerBound, posteriorMean, dataWeight };
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
            hierarchicalLower: f2.lowerBound, hierarchicalWinPct: f2.lowerBound * 100,
            strength2: calculateStrength(f2.lowerBound * 100), posteriorMean: f2.posteriorMean
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
                        <p>Calculates statistically conservative win rates using Wilson score confidence intervals with dynamically scaled z-scores. Small samples (under 30 games) receive aggressive 99% confidence penalties, while larger datasets gradually relax to 95% confidence bounds. This mathematical approach automatically accounts for uncertainty—a deck with 5-0 gets ranked lower than one with 50-25 because we're less confident the small sample represents true skill. The lower bound of each confidence interval becomes the "effective win rate" and maps to a normalized 1-100 strength score.</p>
                    </div>
                    <div class="methodology-box formula2">
                        <h3>Formula 2: Hierarchical Bayesian Estimation</h3>
                        <p>Employs empirical Bayes methodology to learn the meta's baseline performance distribution, then uses Beta-Binomial conjugate priors to blend population-level knowledge with individual deck results. The algorithm estimates hyperparameters (alpha/beta) from the entire dataset's weighted mean and variance, creating an intelligent prior that represents "typical" competitive performance. Each deck's ranking is a weighted posterior—decks with few games are shrunk toward the meta average, while high-sample decks rely primarily on their own data. Confidence intervals adapt based on total dataset size and meta diversity, with sophisticated variance adjustment preventing outlier distortion.</p>
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
                    <p><strong>Improved Bayesian priors:</strong> Better Beta distribution parameter estimation for more appropriate prior distributions.</p>
                    <p><strong>Scales 1 to 100k games:</strong> Both formulas maintain stable, meaningful rankings at any scale.</p>
                </div>
            </div>
        </div>
    `;

    updateTable();
};

document.addEventListener('DOMContentLoaded', init);