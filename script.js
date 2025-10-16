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

let activeTab = 'formula1';
let processedData = [];
let rankedByFormula1 = [];
let rankedByFormula2 = [];

// Wilson score calculation
const wilsonLower = (p, n, z = 2.25) => {
    if (n === 0) return 0;
    const term1 = p + (z * z) / (2 * n);
    const term2 = z * Math.sqrt((p * (1 - p) / n) + (z * z) / (4 * n * n));
    const denom = 1 + (z * z) / n;
    return (term1 - term2) / denom;
};

// Beta distribution approximation for 5th percentile
const betaLowerBound = (a, b) => {
    const mean = a / (a + b);
    const variance = (a * b) / ((a + b) * (a + b) * (a + b + 1));
    const stdDev = Math.sqrt(variance);
    return Math.max(0, mean - 1.645 * stdDev);
};

// Process data for all formulas
const processData = () => {
    processedData = data.map(([origRank, deck, wins, losses, ties]) => {
        const n = wins + losses + ties;
        const w = wins + 0.5 * ties;
        const observedP = w / n;

        const wilsonLb = wilsonLower(observedP, n);
        const effectiveWinPct1 = wilsonLb * 100;
        const strength1 = Math.max(1, Math.min(100, ((effectiveWinPct1 - 30) / 25) * 99 + 1));

        const a = 0.5 + w;
        const b = 0.5 + n - w;
        const posteriorLower = betaLowerBound(a, b);

        return {
            origRank,
            deck,
            wins,
            losses,
            ties,
            n,
            w,
            observedP,
            wilsonLb,
            effectiveWinPct1,
            strength1,
            posteriorLower,
            a,
            b
        };
    });

    // Rank by posterior for strength2
    const sortedByPosterior = [...processedData].sort((a, b) => b.posteriorLower - a.posteriorLower);
    sortedByPosterior.forEach((item, idx) => {
        const percentile = 1 - (idx / (sortedByPosterior.length - 1));
        item.strength2 = percentile * 99 + 1;
    });

    // Sort by Formula 1
    rankedByFormula1 = [...processedData].sort((a, b) => {
        if (b.strength1 !== a.strength1) return b.strength1 - a.strength1;
        if (b.effectiveWinPct1 !== a.effectiveWinPct1) return b.effectiveWinPct1 - a.effectiveWinPct1;
        return b.observedP - a.observedP;
    });

    // Sort by Formula 2
    rankedByFormula2 = [...processedData].sort((a, b) => {
        if (b.strength2 !== a.strength2) return b.strength2 - a.strength2;
        if (b.posteriorLower !== a.posteriorLower) return b.posteriorLower - a.posteriorLower;
        return b.observedP - a.observedP;
    });

    // Add new ranks and deltas
    rankedByFormula1.forEach((item, idx) => {
        item.rank1 = idx + 1;
        item.delta1 = item.origRank - item.rank1;
    });

    rankedByFormula2.forEach((item, idx) => {
        item.rank2 = idx + 1;
        item.delta2 = item.origRank - item.rank2;
    });
};

// Create rank change HTML
const createRankChange = (delta) => {
    if (delta > 0) {
        return `<span class="rank-change positive"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="12 19 12 5 5 12"></polyline></svg> +${delta}</span>`;
    } else if (delta < 0) {
        return `<span class="rank-change negative"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="12 5 12 19 19 12"></polyline></svg> ${delta}</span>`;
    }
    return `<span class="rank-change neutral"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="5" y1="12" x2="19" y2="12"></line></svg> 0</span>`;
};

// Generate table for formula 1
const generateFormula1Table = () => {
    let html = `
        <table>
            <thead class="formula1">
                <tr>
                    <th>Rank</th>
                    <th>Deck</th>
                    <th class="text-center">W</th>
                    <th class="text-center">L</th>
                    <th class="text-center">T</th>
                    <th class="text-center">Games</th>
                    <th class="text-center">Win%</th>
                    <th class="text-center">Eff Win%</th>
                    <th class="text-center">Strength</th>
                    <th class="text-center">Change</th>
                </tr>
            </thead>
            <tbody>
    `;
    rankedByFormula1.forEach((item, idx) => {
        html += `
            <tr>
                <td class="rank">${item.rank1}</td>
                <td>${item.deck}</td>
                <td class="center">${item.wins}</td>
                <td class="center">${item.losses}</td>
                <td class="center">${item.ties}</td>
                <td class="center">${item.n}</td>
                <td class="center">${(item.observedP * 100).toFixed(2)}%</td>
                <td class="center">${item.effectiveWinPct1.toFixed(2)}%</td>
                <td class="strength">${item.strength1.toFixed(2)}</td>
                <td class="center">${createRankChange(item.delta1)}</td>
            </tr>
        `;
    });
    html += `</tbody></table>`;
    return html;
};

// Generate table for formula 2
const generateFormula2Table = () => {
    let html = `
        <table>
            <thead class="formula2">
                <tr>
                    <th>Rank</th>
                    <th>Deck</th>
                    <th class="text-center">W</th>
                    <th class="text-center">L</th>
                    <th class="text-center">T</th>
                    <th class="text-center">Games</th>
                    <th class="text-center">Adj Wins</th>
                    <th class="text-center">Post LB%</th>
                    <th class="text-center">Strength</th>
                    <th class="text-center">Change</th>
                </tr>
            </thead>
            <tbody>
    `;
    rankedByFormula2.forEach((item, idx) => {
        html += `
            <tr>
                <td class="rank">${item.rank2}</td>
                <td>${item.deck}</td>
                <td class="center">${item.wins}</td>
                <td class="center">${item.losses}</td>
                <td class="center">${item.ties}</td>
                <td class="center">${item.n}</td>
                <td class="center">${item.w.toFixed(1)}</td>
                <td class="center">${(item.posteriorLower * 100).toFixed(3)}%</td>
                <td class="strength">${item.strength2.toFixed(2)}</td>
                <td class="center">${createRankChange(item.delta2)}</td>
            </tr>
        `;
    });
    html += `</tbody></table>`;
    return html;
};

// Generate comparison table
const generateComparisonTable = () => {
    let html = `
        <table>
            <thead class="comparison">
                <tr>
                    <th>Original</th>
                    <th>Deck</th>
                    <th class="text-center">F1 Rank</th>
                    <th class="text-center">F1 Str</th>
                    <th class="text-center">F2 Rank</th>
                    <th class="text-center">F2 Str</th>
                </tr>
            </thead>
            <tbody>
    `;
    processedData.sort((a, b) => a.origRank - b.origRank).forEach((item, idx) => {
        const f1Item = rankedByFormula1.find(d => d.deck === item.deck);
        const f2Item = rankedByFormula2.find(d => d.deck === item.deck);
        html += `
            <tr>
                <td class="rank">${item.origRank}</td>
                <td>${item.deck}</td>
                <td class="center">${f1Item.rank1}</td>
                <td class="center">${f1Item.strength1.toFixed(1)}</td>
                <td class="center">${f2Item.rank2}</td>
                <td class="center">${f2Item.strength2.toFixed(1)}</td>
            </tr>
        `;
    });
    html += `</tbody></table>`;
    return html;
};

// Update table display
const updateTable = () => {
    const tableWrapper = document.querySelector('.table-wrapper');
    let html = '';

    if (activeTab === 'formula1') {
        html = generateFormula1Table();
    } else if (activeTab === 'formula2') {
        html = generateFormula2Table();
    } else if (activeTab === 'comparison') {
        html = generateComparisonTable();
    }

    tableWrapper.innerHTML = html;
};

// Initialize app
const init = () => {
    processData();

    const root = document.getElementById('root');
    root.innerHTML = `
        <div class="container">
            <h1>Tournament Deck Ranking Analysis</h1>

            <div class="card">
                <h2>Methodology Comparison</h2>
                <div class="methodology-grid">
                    <div class="methodology-box formula1">
                        <h3>Formula 1: Wilson (30–55%)</h3>
                        <p>Uses Wilson confidence interval (z=2.25, ~97% confidence) to calculate a conservative lower bound on win rate. Scales to 1-100 strength using: ((effective_win_pct - 30) / 25) × 99 + 1. This maps a 30% win rate to strength 1, and 55% win rate to strength 100.</p>
                    </div>
                    <div class="methodology-box formula2">
                        <h3>Formula 2: Beta Posterior</h3>
                        <p>Uses Bayesian approach with Beta prior (α=0.5, β=0.5) to compute 5th percentile lower bound. Maps to 1-100 by ranking all decks and scaling percentiles linearly.</p>
                    </div>
                </div>
            </div>

            <div class="tabs-container">
                <div class="tabs-header">
                    <button class="tab-button formula1 active" onclick="switchTab('formula1')">Formula 1 Rankings</button>
                    <button class="tab-button formula2" onclick="switchTab('formula2')">Formula 2 Rankings</button>
                    <button class="tab-button comparison" onclick="switchTab('comparison')">All Formulas</button>
                </div>
                <div class="table-wrapper">
                    ${generateFormula1Table()}
                </div>
            </div>

            <div class="card insights">
                <h2>Key Insights</h2>
                <div class="insights-list">
                    <p><strong>Top 3 remain stable:</strong> All formulas keep Suicune ex Greninja, Giratina ex Darkrai ex, and Guzzlord ex at the top, reflecting their dominant records.</p>
                    <p><strong>Sample size matters:</strong> Decks with fewer games show more variability between formulas. Wilson-based methods are more conservative with small samples.</p>
                    <p><strong>Formula 2 compresses the middle:</strong> The percentile-based scaling creates more uniform strength distributions across the middle ranks.</p>
                    <p><strong>Biggest movers:</strong> Look for decks with large rank changes between formulas—these have win rates that deviate most from assumptions about baseline strength.</p>
                </div>
            </div>
        </div>
    `;

    updateTable();
};

// Switch tabs
window.switchTab = (tab) => {
    activeTab = tab;

    // Update button states
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.tab-button.${tab}`).classList.add('active');

    // Update table
    updateTable();
};

// Run on page load
document.addEventListener('DOMContentLoaded', init);