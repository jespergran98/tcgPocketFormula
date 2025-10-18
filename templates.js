// Template definitions with priority order (higher priority templates are checked first)
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

// Check if a deck meets template requirements
const meetsRequirements = (deck, requirements, totalMatches) => {
  for (const [key, constraint] of Object.entries(requirements)) {
    const value = key === 'matchesPercent' 
      ? (deck.n / totalMatches) * 100
      : key === 'avgMatchesPerEntry'
      ? deck.n / Math.max(1, Math.ceil(deck.n / 7))
      : deck[key];
    
    if (constraint.min !== undefined && value < constraint.min) return false;
    if (constraint.max !== undefined && value > constraint.max) return false;
  }
  return true;
};

// Find the best matching template for a deck
const findBestTemplate = (deck, totalMatches) => {
  // Try templates in order (higher priority first)
  for (const template of TEMPLATES) {
    if (meetsRequirements(deck, template.requirements, totalMatches)) {
      return template;
    }
  }
  return TEMPLATES[TEMPLATES.length - 1]; // Default to last template
};

// Generate narrative for a deck
const generateNarrative = (deck, template, totalMatches) => {
  const tier = deck.strength >= 100 ? 'X' :
               deck.strength >= 97 ? 'S++' :
               deck.strength >= 94 ? 'S+' :
               deck.strength >= 91 ? 'S' :
               deck.strength >= 88 ? 'A' :
               deck.strength >= 84 ? 'B' :
               deck.strength >= 80 ? 'C' :
               deck.strength >= 75 ? 'D' :
               deck.strength >= 70 ? 'E' : 'Unranked';
  
  const metaImpact = (deck.share / 100) * deck.adjustedWinRate;
  const avgMatchesPerEntry = deck.n / Math.max(1, Math.ceil(deck.n / 7)); // Estimate
  
  return template.template
    .replace(/{deck_name}/g, deck.deck)
    .replace(/{share}/g, deck.share.toFixed(2))
    .replace(/{adjusted_win_rate}/g, deck.adjustedWinRate.toFixed(2))
    .replace(/{strength}/g, deck.strength.toFixed(2))
    .replace(/{tier}/g, tier)
    .replace(/{matches}/g, deck.n)
    .replace(/{W}/g, deck.wins)
    .replace(/{L}/g, deck.losses)
    .replace(/{T}/g, deck.ties)
    .replace(/{meta_impact}/g, metaImpact.toFixed(2))
    .replace(/{avg_matches_per_entry}/g, avgMatchesPerEntry.toFixed(2));
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TEMPLATES, findBestTemplate, generateNarrative };
}