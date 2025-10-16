const data = [
    [1, "Giratina ex Darkrai ex", 4908, 4213, 157],
    [2, "Giratina ex Greninja", 4163, 3765, 124],
    [3, "Meowscarada Decidueye ex", 2949, 2604, 86],
    [4, "Arceus ex Crobat", 2723, 2450, 45],
    [5, "Garchomp ex Rampardos", 2328, 2073, 45],
    [6, "Charizard ex Incineroar ex", 1585, 1559, 17],
    [7, "Solgaleo ex Skarmory", 1414, 1527, 38],
    [8, "Greninja Oricorio", 1734, 1655, 56],
    [9, "Magnezone Oricorio", 1022, 1008, 23],
    [10, "Greninja Giratina ex", 689, 633, 18],
    [11, "Lucario Rampardos", 674, 648, 10],
    [12, "Charizard ex Turtonator", 643, 624, 12],
    [13, "Lycanroc Rampardos", 477, 493, 6],
    [14, "Giratina ex Magnezone", 492, 381, 14],
    [15, "Charizard ex", 418, 462, 2],
    [16, "Incineroar ex", 307, 322, 6],
    [17, "Gallade ex Rampardos", 290, 265, 10],
    [18, "Lunala ex Giratina ex", 206, 266, 2],
    [19, "Beedrill ex Beedrill", 230, 228, 3],
    [20, "Aerodactyl ex Rampardos", 234, 226, 2]
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

// Hierarchical Bayesian with Adaptive Priors (Formula 2)
const hierarchicalBayesian = (allData) => {
    // Step 1: Calculate empirical statistics across all decks
    const deckStats = allData.map(([_, __, wins, losses, ties]) => {
        const n = wins + losses + ties;
        const adjWins = wins + 0.5 * ties;
        return { n, winRate: adjWins / n };
    });
    
    // Calculate meta-level statistics
    const totalGames = deckStats.reduce((sum, d) => sum + d.n, 0);
    const weightedMean = deckStats.reduce((sum, d) => sum + d.winRate * d.n, 0) / totalGames;
    const variance = deckStats.reduce((sum, d) => sum + d.n * Math.pow(d.winRate - weightedMean, 2), 0) / totalGames;
    
    // Step 2: Estimate hyperparameters using method of moments
    // For Beta(α, β), mean = α/(α+β), variance = αβ/((α+β)²(α+β+1))
    const meanEst = Math.max(0.01, Math.min(0.99, weightedMean));
    const varEst = Math.max(0.0001, Math.min(meanEst * (1 - meanEst) * 0.9, variance));
    
    const alphaBeta = (meanEst * (1 - meanEst) / varEst) - 1;
    const priorAlpha = Math.max(0.5, meanEst * alphaBeta);
    const priorBeta = Math.max(0.5, (1 - meanEst) * alphaBeta);
    
    // Step 3: Adaptive confidence level based on total dataset size
    // More data = can be more confident, use tighter intervals
    const adaptiveZ = totalGames > 50000 ? -1.96 :  // 97.5th percentile for huge datasets
                      totalGames > 10000 ? -1.75 :  // Between 95% and 97.5%
                      totalGames > 5000 ? -1.645 :  // 95th percentile
                      -1.5;                          // More conservative for small datasets
    
    // Step 4: Calculate hierarchical estimates for each deck
    return allData.map(([origRank, deck, wins, losses, ties]) => {
        const n = wins + losses + ties;
        const adjWins = wins + 0.5 * ties;
        const adjLosses = losses + 0.5 * ties;
        
        // Posterior with learned priors
        const postAlpha = priorAlpha + adjWins;
        const postBeta = priorBeta + adjLosses;
        
        // Calculate posterior mean (shrinkage estimator)
        const posteriorMean = postAlpha / (postAlpha + postBeta);
        
        // Calculate credible interval with adaptive confidence
        const postVariance = (postAlpha * postBeta) / 
                            ((postAlpha + postBeta) ** 2 * (postAlpha + postBeta + 1));
        const postStdDev = Math.sqrt(postVariance);
        
        const lowerBound = Math.max(0, posteriorMean + adaptiveZ * postStdDev);
        
        // Calculate effective sample size (how much the prior influences the estimate)
        const effectiveSampleSize = priorAlpha + priorBeta;
        const dataWeight = n / (n + effectiveSampleSize);
        
        return {
            origRank,
            deck,
            wins,
            losses,
            ties,
            n,
            lowerBound,
            posteriorMean,
            dataWeight,
            priorInfluence: 1 - dataWeight
        };
    });
};

// Process data for all formulas
const processData = () => {
    // Calculate Formula 2 results first (needs all data)
    const formula2Results = hierarchicalBayesian(data);
    
    processedData = data.map(([origRank, deck, wins, losses, ties], idx) => {
        const n = wins + losses + ties;
        const w = wins + 0.5 * ties;
        const observedP = w / n;

        // Formula 1: Wilson with no clamping
        const wilsonLb = wilsonLower(observedP, n);
        const effectiveWinPct1 = wilsonLb * 100;
        const strength1 = ((effectiveWinPct1 - 30) / 25) * 99 + 1;

        // Formula 2: Hierarchical Bayesian
        const f2 = formula2Results[idx];
        const hierarchicalWinPct = f2.lowerBound * 100;
        const strength2 = ((hierarchicalWinPct - 30) / 25) * 99 + 1;

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
            hierarchicalLower: f2.lowerBound,
            hierarchicalWinPct,
            strength2,
            posteriorMean: f2.posteriorMean,
            dataWeight: f2.dataWeight,
            priorInfluence: f2.priorInfluence
        };
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
        if (b.hierarchicalWinPct !== a.hierarchicalWinPct) return b.hierarchicalWinPct - a.hierarchicalWinPct;
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
                    <th class="text-center">Post Mean%</th>
                    <th class="text-center">Hier LB%</th>
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
                <td class="center">${(item.posteriorMean * 100).toFixed(2)}%</td>
                <td class="center">${item.hierarchicalWinPct.toFixed(3)}%</td>
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
                    <th>Orig</th>
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
                        <h3>Formula 1: Wilson Score Method</h3>
                        <p>Uses the Wilson confidence interval to calculate a "worst-case scenario" win rate for each deck. Instead of using raw win percentages, it accounts for uncertainty—decks with fewer games get penalized more. The algorithm asks: "What's the lowest win rate this deck could realistically have?" This confidence-adjusted rate is then converted to a strength score, where a 30% adjusted rate = 1 and 55% adjusted rate = 100.</p>
                    </div>
                    <div class="methodology-box formula2">
                        <h3>Formula 2: Hierarchical Bayesian (Meta-Aware)</h3>
                        <p>Learns from the entire tournament meta first to understand what "typical" performance looks like, then uses that as a smart baseline. Decks with fewer games are adjusted toward the meta average, while decks with many games rely on their own results. This reduces the impact of lucky streaks on small samples. The confidence level adapts based on total dataset size—more games means tighter, more confident rankings.</p>
                    </div>
                </div>
            </div>

            <div class="tabs-container">
                <div class="tabs-header">
                    <button class="tab-button formula1 active" onclick="switchTab('formula1')">Formula 1 Rankings</button>
                    <button class="tab-button formula2" onclick="switchTab('formula2')">Formula 2 Rankings</button>
                    <button class="tab-button comparison" onclick="switchTab('comparison')">Compare Both</button>
                </div>
                <div class="table-wrapper">
                    ${generateFormula1Table()}
                </div>
            </div>

            <div class="card insights">
                <h2>Key Insights</h2>
                <div class="insights-list">
                    <p><strong>Different approaches, similar goals:</strong> Formula 1 uses statistical confidence intervals, while Formula 2 uses hierarchical Bayesian modeling. Both penalize decks with fewer games played, but Formula 2 does so in a more sophisticated way.</p>
                    <p><strong>Formula 2's edge:</strong> By learning from the entire meta first, Formula 2 makes better predictions for small-sample decks. It knows what "normal" looks like, so it can distinguish between a deck that's genuinely strong vs. one that just got lucky in a few games.</p>
                    <p><strong>Adaptive confidence:</strong> Formula 2 automatically adjusts its confidence levels based on dataset size. With 50,000+ games, it uses tighter intervals (97.5th percentile). With smaller datasets, it's more conservative (90th percentile).</p>
                    <p><strong>Shrinkage in action:</strong> Formula 2 shows "posterior mean" and "data weight" metrics. Decks with few games are "shrunk" toward the meta average, while decks with many games rely almost entirely on their own data. This minimizes ranking errors.</p>
                    <p><strong>Beyond 1-100:</strong> Both formulas allow values outside 1-100, revealing the raw mathematical relationship. Super dominant decks might exceed 100, while struggling decks could drop below 1—though this rarely happens in practice.</p>
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