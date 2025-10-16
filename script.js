const data = [
  [1, "Suicune ex Greninja", 266, 272, 6],
  [2, "Charizard ex", 86, 115, 0],
  [3, "Flareon ex Eevee ex", 104, 123, 3],
  [4, "Giratina ex Darkrai ex", 84, 92, 2],
  [5, "Greninja Oricorio", 83, 50, 6],
  [6, "Guzzlord ex", 40, 41, 2],
  [7, "Tapu Koko ex Pikachu ex", 28, 24, 0],
  [8, "Pikachu ex Tapu Koko ex", 26, 19, 0],
  [9, "Suicune ex Palkia ex", 21, 18, 0],
  [10, "Snorlax ex Darkrai ex", 16, 14, 0],
  [11, "Dragonite ex Dragonite", 15, 18, 0],
  [12, "Crobat ex Darkrai ex", 11, 18, 0],
  [13, "Silvally Zeraora", 22, 12, 1],
  [14, "Darkrai ex Arceus ex", 20, 12, 0],
  [15, "Decidueye ex Decidueye", 8, 11, 0],
  [16, "Flareon ex Flareon", 12, 9, 0],
  [17, "Dragonite ex Sylveon ex", 9, 7, 0],
  [18, "Espeon ex Sylveon ex", 14, 11, 0],
  [19, "Raichu ex Alolan Raichu ex", 10, 8, 0],
  [20, "Tapu Koko ex Oricorio", 5, 6, 0],
  [21, "Buzzwole ex Pheromosa", 5, 8, 0],
  [22, "Charizard ex Entei ex", 5, 10, 0],
  [23, "Incineroar ex", 4, 8, 0],
  [24, "Arceus ex Tapu Koko ex", 6, 6, 0],
  [25, "Flareon ex Sylveon ex", 7, 7, 0],
  [26, "Sylveon ex Solgaleo ex", 3, 4, 0],
  [27, "Meowscarada Decidueye ex", 4, 6, 0],
  [28, "Silvally Giratina ex", 6, 10, 0],
  [29, "Guzzlord ex Naganadel", 3, 9, 0],
  [30, "Silvally Rampardos", 1, 7, 0],
  [31, "Alolan Raichu ex Raichu ex", 1, 9, 0],
  [32, "Umbreon ex Eevee ex", 0, 8, 0],
  [33, "Suicune ex Alolan Raichu ex", 0, 2, 0],
  [34, "Gyarados ex Mantyke", 0, 10, 0],
  [35, "Pikachu ex", 0, 10, 0],
  [36, "Porygon-Z", 7, 2, 0],
  [37, "Pikachu ex Raikou ex", 6, 3, 0],
  [38, "Pikachu ex Oricorio", 6, 2, 1],
  [39, "Suicune ex Giratina ex", 5, 3, 0],
  [40, "Silvally Oricorio", 4, 3, 0],
  [41, "Raikou ex Arceus ex", 4, 3, 0],
  [42, "Silvally Pichu", 4, 3, 0],
  [43, "Pikachu ex Oricorio", 4, 3, 0],
  [44, "Raikou ex Pikachu ex", 4, 3, 0],
  [45, "Meowscarada Sylveon ex", 4, 3, 0],
  [46, "Tapu Koko ex Zapdos ex", 4, 2, 1],
  [47, "Gallade ex Lucario", 4, 3, 0],
  [48, "Sylveon ex Eevee ex", 4, 3, 0],
  [49, "Luxray Oricorio", 4, 3, 0],
  [50, "Raikou ex Tapu Koko ex", 4, 3, 0],
  [51, "Lycanroc ex Pichu", 4, 3, 0],
  [52, "Giratina ex Silvally", 4, 3, 0],
  [53, "Flareon ex Jolteon", 3, 3, 0],
  [54, "Ho-Oh ex Darkrai ex", 2, 2, 0],
  [55, "Tapu Koko ex", 3, 3, 0],
  [56, "Charizard ex", 3, 3, 0],
  [57, "Staraptor Rampardos", 3, 4, 0],
  [58, "Raikou ex Magnezone", 3, 4, 0],
  [59, "Garchomp ex Rampardos", 3, 4, 0],
  [60, "Lugia ex Ho-Oh ex", 2, 3, 0],
  [61, "Sylveon ex Jolteon", 2, 3, 0],
  [62, "Raikou ex Alolan Raichu ex", 2, 3, 0],
  [63, "Skarmory ex", 2, 3, 0],
  [64, "Charizard ex Sylveon ex", 1, 2, 0],
  [65, "Lanturn ex Pichu", 1, 2, 0],
  [66, "Umbreon ex Sylveon ex", 1, 2, 0],
  [67, "Flareon ex Leafeon ex", 2, 4, 0],
  [68, "Tapu Koko ex Giratina ex", 1, 2, 0],
  [69, "Solgaleo ex Suicune ex", 1, 3, 0],
  [70, "Raichu ex Raikou ex", 1, 3, 0],
  [71, "Alolan Dugtrio ex Skarmory ex", 1, 3, 0],
  [72, "Arceus ex Pichu", 1, 3, 0],
  [73, "Crobat ex", 1, 4, 0],
  [74, "Alolan Exeggutor Rampardos", 1, 4, 0],
  [75, "Solgaleo ex", 1, 4, 0],
  [76, "Silvally Espeon", 1, 6, 0],
  [77, "Jolteon Pikachu ex", 1, 6, 0],
  [78, "Starmie ex Suicune ex", 0, 1, 0],
  [79, "Incineroar ex Entei ex", 0, 1, 0],
  [80, "Pikachu ex Zapdos ex", 0, 3, 0],
  [81, "Umbreon ex Darkrai ex", 0, 2, 0],
  [82, "Tsareena Celebi ex", 0, 7, 0],
  [83, "Suicune ex Gyarados", 0, 2, 0],
  [84, "Entei ex Magby", 0, 7, 0],
  [85, "Altaria Guzzlord ex", 0, 2, 0],
  [86, "Kingdra ex Suicune ex", 0, 2, 0],
  [87, "Zapdos ex Pichu", 0, 7, 0],
  [88, "Dragonite Pichu", 0, 7, 0],
  [89, "Alolan Raichu ex Oricorio", 0, 2, 0],
  [90, "Aerodactyl ex Rampardos", 0, 3, 0],
  [91, "Buzzwole ex Celesteela", 0, 7, 0],
  [92, "Charizard ex Moltres ex", 0, 2, 0],
  [93, "Gyarados ex Gyarados", 0, 1, 0],
  [94, "Slurpuff Alcremie", 0, 2, 0]
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
                        <p><strong>What it does:</strong> Ranks decks by asking "what's the worst this deck's true win rate could realistically be?" A deck with 5 wins and 0 losses looks perfect, but with so few games, it could easily be a fluke. This formula calculates a conservative "effective win rate" that accounts for that uncertainty. Decks with more tournament games get less of a penalty because we have more evidence of their true strength.</p>
                        <p><strong>The math:</strong> Uses Wilson score confidence intervals with adaptive z-scores scaling from 2.576 (99% confidence) for small samples (n<30) down to 1.96 (95% confidence) for large samples (n>1000). The lower bound is computed via: (p̂ + z²/2n - z√(p̂(1-p̂)/n + z²/4n²)) / (1 + z²/n), where p̂ is the observed win rate and n is total games. This provides a statistically conservative estimate that naturally penalizes small sample sizes while converging toward the empirical win rate as evidence accumulates.</p>
                    </div>
                    <div class="methodology-box formula2">
                        <h3>Formula 2: Hierarchical Bayesian Estimation</h3>
                        <p><strong>What it does:</strong> First analyzes the entire tournament meta to learn what "typical" deck performance looks like, then ranks each deck by blending this baseline knowledge with the deck's actual results. Decks with fewer tournament games get pulled toward the meta average (since we're less certain about them), while decks with lots of games are ranked almost entirely on their own merit. It's smarter about handling the meta's overall balance—if all decks are closely matched, it's more conservative; if there's a clear tier gap, it allows more separation.</p>
                        <p><strong>The math:</strong> Implements empirical Bayes using Beta-Binomial conjugate priors. Step 1: Estimate population hyperparameters from the dataset's weighted mean μ and variance σ², where α = μ((μ(1-μ)/σ²)-1) and β = (1-μ)((μ(1-μ)/σ²)-1). Step 2: Each deck's posterior becomes Beta(α + wins, β + losses), creating a shrinkage estimator with weight n/(n + α + β) on observed data. Step 3: Compute meta-diversity-adjusted confidence intervals using z_adaptive = z_base × max(0.8, min(1.2, 1/(0.3 + σ²/(μ(1-μ))))). The ranking uses μ_post + z × √(αβ/((α+β)²(α+β+1))) as the lower bound.</p>
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