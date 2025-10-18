const data = [
[1, "Suicune ex Greninja", 6802, 5798, 299],
[2, "Giratina ex Darkrai ex", 3895, 3451, 211],
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
[22, "Silvally Pichu", 218, 229, 5]
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
    description: "Dominates the meta with overwhelming presence and elite performance",
    requirements: {
      share: { min: 15.00 },
      adjustedWinRate: { min: 53.00 },
      strength: { min: 92.00 },
      metaImpact: { min: 800.00 }
    },
    template: "{deck_name} is the format tyrant, commanding {share}% of the entire meta with {adjusted_win_rate}% adjusted win rate. At {strength} strength ({tier}) with {meta_impact} meta impact, it defines the competitive landscape."
  },
  {
    id: 2,
    name: "Format Dominator",
    description: "Massive meta share with consistently strong performance",
    requirements: {
      share: { min: 12.00 },
      adjustedWinRate: { min: 52.00 },
      strength: { min: 90.00 }
    },
    template: "{deck_name} dominates the format at {share}% of the meta with a reliable {adjusted_win_rate}% adjusted win rate. Strength: {strength} ({tier})."
  },
  {
    id: 3,
    name: "Apex Predator",
    description: "Elite strength with significant presence and proven results",
    requirements: {
      strength: { min: 91.00 },
      adjustedWinRate: { min: 54.00 },
      share: { min: 6.00 },
      matchesPercent: { min: 3.00 }
    },
    template: "{deck_name} is the apex predator: {strength} strength ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches. At {share}% of the format, it's the complete package."
  },
  {
    id: 4,
    name: "Hidden Elite",
    description: "Minimal adoption but exceptional performance with sufficient data",
    requirements: {
      share: { max: 2.00 },
      strength: { min: 90.00 },
      matchesPercent: { min: 0.30 }
    },
    template: "Despite minimal adoption ({share}% of the meta), {deck_name} stands as hidden elite at {strength} strength ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches."
  },
  {
    id: 5,
    name: "Surgical Precision",
    description: "Exceptional win rate in moderate presence with strong results",
    requirements: {
      adjustedWinRate: { min: 57.00 },
      share: { min: 1.50, max: 5.00 },
      strength: { min: 87.00 },
      matchesPercent: { min: 0.80 }
    },
    template: "{deck_name} delivers surgical precision: {adjusted_win_rate}% adjusted win rate at {share}% of the format equals {strength} strength ({tier}). {matches} matches prove its lethal consistency."
  },
  {
    id: 6,
    name: "Meta Pillar",
    description: "Large meta share with solid, consistent performance",
    requirements: {
      share: { min: 8.00 },
      strength: { min: 84.00, max: 90.99 },
      matchesPercent: { min: 2.50 }
    },
    template: "{deck_name} is a meta pillar — representing {share}% of the format at {strength} strength ({tier}). Its {adjusted_win_rate}% adjusted win rate across {matches} matches proves why it's a format staple."
  },
  {
    id: 7,
    name: "Niche Specialist",
    description: "High win rate in small, dedicated player base",
    requirements: {
      adjustedWinRate: { min: 55.00 },
      share: { max: 1.50 },
      strength: { min: 83.00 },
      matchesPercent: { min: 0.25, max: 0.60 }
    },
    template: "{deck_name} is a true niche specialist with {adjusted_win_rate}% adjusted win rate across {matches} matches ({W}-{L}-{T}). At {strength} strength ({tier}) and {share}% of the meta — rare but potent."
  },
  {
    id: 8,
    name: "Elite Experimentalist",
    description: "Exceptional performance with limited but meaningful adoption",
    requirements: {
      strength: { min: 87.00 },
      adjustedWinRate: { min: 55.00 },
      matchesPercent: { min: 0.50, max: 1.50 },
      share: { max: 2.00 }
    },
    template: "{deck_name} is an elite experimentalist: {strength} strength ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches. Only {share}% of the format, yet it excels."
  },
  {
    id: 9,
    name: "High-Ceiling Mastery",
    description: "Rewards skilled piloting with strong tournament endurance",
    requirements: {
      strength: { min: 85.00 },
      adjustedWinRate: { min: 53.00 },
      share: { max: 3.00 },
      matchesPercent: { min: 0.60 },
      avgMatchesPerEntry: { min: 5.50 }
    },
    template: "{deck_name} rewards mastery: {strength} strength ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% of the meta. {avg_matches_per_entry} average matches per entry proves tournament endurance."
  },
  {
    id: 10,
    name: "Meta Shaper",
    description: "Significant influence on the format with solid performance",
    requirements: {
      metaImpact: { min: 350.00 },
      share: { min: 4.00, max: 11.99 },
      strength: { min: 82.00 },
      adjustedWinRate: { min: 50.00 }
    },
    template: "{deck_name} shapes the metagame — commanding {share}% of the format with {adjusted_win_rate}% adjusted win rate, producing {meta_impact} meta impact at {strength} strength ({tier})."
  },
  {
    id: 11,
    name: "Breakout Elite",
    description: "Emerging deck with elite performance demanding attention",
    requirements: {
      strength: { min: 90.00 },
      adjustedWinRate: { min: 54.00 },
      matchesPercent: { min: 1.50 },
      share: { min: 2.00, max: 7.99 }
    },
    template: "{deck_name} is breaking out: {strength} strength ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% of the format — elite performance demanding attention."
  },
  {
    id: 12,
    name: "Battle-Tested Champion",
    description: "Proven through extensive tournament play with strong results",
    requirements: {
      matchesPercent: { min: 3.50 },
      strength: { min: 84.00 },
      adjustedWinRate: { min: 50.00 }
    },
    template: "{deck_name} is battle-tested: {W}-{L}-{T} across {matches} matches with {adjusted_win_rate}% adjusted win rate and {strength} strength ({tier}). Proven across {share}% of the format."
  },
  {
    id: 13,
    name: "Format Cornerstone",
    description: "Foundational deck with strong presence and performance",
    requirements: {
      strength: { min: 88.00, max: 91.99 },
      share: { min: 5.00, max: 11.99 },
      matchesPercent: { min: 2.00 }
    },
    template: "{deck_name} is a format cornerstone at {strength} strength ({tier}) — commanding {share}% of the meta with {adjusted_win_rate}% adjusted win rate across {matches} matches."
  },
  {
    id: 14,
    name: "Sleeping Giant",
    description: "Underplayed deck with elite potential waiting to be unleashed",
    requirements: {
      strength: { min: 86.00 },
      share: { min: 1.50, max: 4.00 },
      adjustedWinRate: { min: 51.50 },
      matchesPercent: { min: 1.00 }
    },
    template: "{deck_name} is the sleeping giant — only {share}% of the meta, yet posting {strength} strength ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches."
  },
  {
    id: 15,
    name: "Master's Weapon",
    description: "High-skill deck with excellent results in dedicated hands",
    requirements: {
      adjustedWinRate: { min: 54.00 },
      share: { min: 0.80, max: 2.50 },
      matchesPercent: { min: 0.80, max: 2.00 },
      strength: { min: 82.00 }
    },
    template: "{deck_name} is the master's weapon: {adjusted_win_rate}% adjusted win rate across {matches} matches ({W}-{L}-{T}) at {share}% of the format. Results speak volumes at {strength} strength ({tier})."
  },
  {
    id: 16,
    name: "Meta Counter",
    description: "Positioned to exploit popular strategies in the format",
    requirements: {
      strength: { min: 83.00, max: 88.99 },
      adjustedWinRate: { min: 51.50 },
      share: { min: 1.00, max: 3.50 },
      metaImpact: { min: 150.00, max: 349.99 }
    },
    template: "{deck_name} counters the meta — {strength} strength ({tier}) with {adjusted_win_rate}% adjusted win rate at {share}% of the format. Built to exploit popular strategies."
  },
  {
    id: 17,
    name: "Tournament Grinder",
    description: "Consistent performer through extensive tournament play",
    requirements: {
      matchesPercent: { min: 3.50 },
      strength: { min: 81.00, max: 87.99 },
      adjustedWinRate: { min: 49.50 },
      share: { min: 3.00 }
    },
    template: "{deck_name} is the grinder's choice — {matches} matches across {share}% of the format with {adjusted_win_rate}% adjusted win rate at {strength} strength ({tier}). Built for consistency."
  },
  {
    id: 18,
    name: "Rising Force",
    description: "Building momentum with strong performance and growing adoption",
    requirements: {
      share: { min: 4.00, max: 8.99 },
      strength: { min: 84.00, max: 89.99 },
      adjustedWinRate: { min: 50.50 },
      matchesPercent: { min: 1.50 }
    },
    template: "{deck_name} is a rising force — {share}% of the format with {strength} strength ({tier}) and {adjusted_win_rate}% adjusted win rate across {matches} matches. Momentum building."
  },
  {
    id: 19,
    name: "Cult Favorite",
    description: "Dedicated player base achieving solid results with passion",
    requirements: {
      share: { min: 0.70, max: 2.00 },
      matchesPercent: { min: 1.00 },
      strength: { min: 80.00, max: 85.99 },
      avgMatchesPerEntry: { min: 5.50 }
    },
    template: "{deck_name} is a cult favorite — dedicated pilots keep it at {share}% of the format with {strength} strength ({tier}). {adjusted_win_rate}% adjusted win rate across {matches} matches rewards loyalty."
  },
  {
    id: 20,
    name: "Format Police",
    description: "Keeps dominant strategies in check with targeted performance",
    requirements: {
      strength: { min: 82.00, max: 87.99 },
      adjustedWinRate: { min: 50.00 },
      share: { min: 1.50, max: 4.00 },
      metaImpact: { min: 120.00 }
    },
    template: "{deck_name} polices the format — {strength} strength ({tier}) with {adjusted_win_rate}% adjusted win rate at {share}% of the meta. A check that keeps strategies honest."
  },
  {
    id: 21,
    name: "Dark Horse",
    description: "Quietly proving itself with solid results under the radar",
    requirements: {
      strength: { min: 84.00, max: 88.99 },
      share: { min: 2.00, max: 5.00 },
      adjustedWinRate: { min: 50.00 },
      matchesPercent: { min: 1.20 }
    },
    template: "{deck_name} is the dark horse — {share}% of the format with {strength} strength ({tier}) and {adjusted_win_rate}% adjusted win rate. Quietly proving itself across {matches} matches."
  },
  {
    id: 22,
    name: "Spoiler Pick",
    description: "Small presence but dangerous enough to upset expectations",
    requirements: {
      share: { min: 0.70, max: 3.00 },
      adjustedWinRate: { min: 51.00 },
      strength: { min: 80.00, max: 85.99 },
      matchesPercent: { min: 0.80 }
    },
    template: "{deck_name} is the spoiler pick — only {share}% of the format, but {adjusted_win_rate}% adjusted win rate makes it dangerous at {strength} strength ({tier}). Built to upset expectations."
  },
  {
    id: 23,
    name: "Solid Performer",
    description: "Reliable and consistent with proven tournament results",
    requirements: {
      strength: { min: 81.00, max: 84.99 },
      adjustedWinRate: { min: 49.50, max: 51.99 },
      matchesPercent: { min: 1.80, max: 4.00 },
      share: { min: 1.50 }
    },
    template: "{deck_name} is a solid performer: {strength} strength ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% of the format. Reliable and consistent."
  },
  {
    id: 24,
    name: "Overplayed Underperformer",
    description: "High popularity but results don't match the hype",
    requirements: {
      share: { min: 6.00 },
      strength: { max: 83.99 },
      adjustedWinRate: { max: 50.00 }
    },
    template: "{deck_name} represents {share}% of the format but underdelivers at {strength} strength ({tier}) with {adjusted_win_rate}% adjusted win rate. Popularity exceeds performance."
  },
  {
    id: 25,
    name: "Polarized Specialist",
    description: "Matchup-dependent deck with feast-or-famine results",
    requirements: {
      adjustedWinRate: { min: 50.00, max: 53.00 },
      strength: { min: 79.00, max: 84.99 },
      matchesPercent: { min: 1.00, max: 3.00 },
      share: { min: 1.00, max: 3.50 }
    },
    template: "{deck_name} is highly polarized — {adjusted_win_rate}% adjusted win rate at {strength} strength ({tier}) suggests feast-or-famine matchups. {share}% of the format across {matches} matches."
  },
  {
    id: 26,
    name: "Promising Upstart",
    description: "Early results suggest potential but needs more data",
    requirements: {
      strength: { min: 82.00, max: 87.99 },
      matchesPercent: { min: 0.35, max: 1.00 },
      adjustedWinRate: { min: 51.00 }
    },
    template: "{deck_name} shows promise at {strength} strength ({tier}) with {adjusted_win_rate}% adjusted win rate, but sample is limited ({matches} matches at {share}% of the meta). Potential evident."
  },
  {
    id: 27,
    name: "Fringe Contender",
    description: "Viable option sitting just outside elite tier",
    requirements: {
      strength: { min: 77.00, max: 81.99 },
      matchesPercent: { min: 1.00, max: 3.00 },
      adjustedWinRate: { min: 48.00 },
      share: { min: 0.80 }
    },
    template: "{deck_name} sits on the fringe at {strength} strength ({tier}) — {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% of the format. Viable but not elite."
  },
  {
    id: 28,
    name: "High-Volume Inconsistent",
    description: "Popular but struggles to deliver consistent results",
    requirements: {
      strength: { min: 76.00, max: 82.99 },
      matchesPercent: { min: 2.50 },
      adjustedWinRate: { max: 50.49 },
      share: { min: 2.00 }
    },
    template: "{deck_name} sees heavy play but lacks consistency: {W}-{L}-{T} ({matches} matches) with {adjusted_win_rate}% adjusted win rate at {strength} strength ({tier}). {share}% of the format with mixed results."
  },
  {
    id: 29,
    name: "Needs More Data",
    description: "Insufficient results to draw strong conclusions",
    requirements: {
      matchesPercent: { max: 0.70 },
      strength: { min: 75.00, max: 83.99 }
    },
    template: "{deck_name} has limited data ({matches} matches, {share}% of meta). Currently rated {strength} strength ({tier}), but more tournament results needed to confirm strength."
  },
  {
    id: 30,
    name: "Standard Report",
    description: "Default statistical summary",
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

const findBestTemplate = (deck, totalDecks, totalShare) => {
    for (const template of TEMPLATES) {
        if (meetsRequirements(deck, template.requirements, totalDecks, totalShare)) {
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
    const totalDecks = data.reduce((sum, [,, wins, losses, ties]) => sum + wins + losses + ties, 0);

    STATE.processedData = data.map(([origRank, deck, wins, losses, ties], idx) => {
        const n = wins + losses + ties;
        const w = wins + 0.5 * ties;
        const observedP = w / n;
        const wilsonLb = wilsonLower(observedP, n);
        const f2 = formula2Results[idx];
        const share = (n / totalDecks) * 100;

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
            const totalDecks = data.reduce((sum, [,, wins, losses, ties]) => sum + wins + losses + ties, 0);
            const template = findBestTemplate(item, totalDecks, item.share);
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