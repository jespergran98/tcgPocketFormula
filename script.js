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
    [46, "Crobat ex Nihilego", 89, 98, 4],
    [47, "Arceus ex Oricorio", 65, 80, 4],
    [48, "Pikachu ex Oricorio", 100, 93, 3],
    [49, "Donphan ex Lucario", 64, 86, 1],
    [50, "Flareon ex Leafeon ex", 58, 83, 0],
    [51, "Suicune ex Milotic", 71, 86, 1],
    [52, "Snorlax ex Ho-Oh ex", 68, 72, 2],
    [53, "Sylveon ex Greninja", 59, 85, 2],
    [54, "Arceus ex Tapu Koko ex", 106, 69, 7],
    [55, "Suicune ex Greninja", 83, 72, 13],
    [56, "Charizard ex Moltres ex", 48, 63, 1],
    [57, "Charizard ex Entei ex", 71, 66, 3],
    [58, "Infernape ex Entei ex", 54, 65, 1],
    [59, "Lugia ex Ho-Oh ex", 53, 65, 2],
    [60, "Giratina ex Latias", 67, 72, 1],
    [61, "Slurpuff Alcremie", 62, 68, 0],
    [62, "Poliwrath ex Politoed", 38, 61, 2],
    [63, "Pikachu ex Oricorio", 79, 54, 7],
    [64, "Giratina ex Silvally", 53, 59, 3],
    [65, "Altaria Silvally", 33, 59, 0],
    [66, "Solgaleo ex Suicune ex", 36, 59, 2],
    [67, "Arceus ex Crobat", 45, 52, 1],
    [68, "Exeggutor ex Celebi ex", 43, 50, 2],
    [69, "Garchomp ex Garchomp", 35, 43, 1],
    [70, "Pikachu ex", 25, 45, 3],
    [71, "Tapu Koko ex Raikou ex", 43, 47, 0],
    [72, "Guzzlord ex Nihilego", 41, 44, 2],
    [73, "Garchomp ex Rampardos", 36, 50, 0],
    [74, "Suicune ex Magnezone", 32, 42, 3],
    [75, "Meowscarada Decidueye ex", 35, 51, 0],
    [76, "Solgaleo ex Raikou ex", 35, 52, 2],
    [77, "Magcargo", 28, 50, 1],
    [78, "Raikou ex Luxray", 31, 39, 1],
    [79, "Sylveon ex Solgaleo ex", 33, 46, 0],
    [80, "Poliwrath ex Lucario", 26, 42, 2],
    [81, "Darkrai ex Miltank", 27, 46, 0],
    [82, "Giratina ex Darkrai ex", 49, 35, 4],
    [83, "Arceus ex Darkrai ex", 32, 33, 2],
    [84, "Incineroar ex Entei ex", 32, 40, 0],
    [85, "Espeon ex Eevee ex", 30, 38, 1],
    [86, "Jumpluff ex Oricorio", 23, 37, 1],
    [87, "Greninja Suicune ex", 24, 42, 1],
    [88, "Gyarados ex Suicune ex", 25, 37, 0],
    [89, "Magcargo Magby", 39, 33, 1],
    [90, "Flareon ex Flareon", 32, 33, 0],
    [91, "Solgaleo ex Shiinotic", 32, 33, 3],
    [92, "Umbreon ex Umbreon", 31, 40, 1],
    [93, "Sylveon ex Eevee ex", 25, 34, 0],
    [94, "Wugtrio ex Suicune ex", 28, 31, 0],
    [95, "Silvally Arceus ex", 29, 33, 1],
    [96, "Tapu Koko ex", 18, 32, 1],
    [97, "Giratina ex Mewtwo ex", 26, 26, 0],
    [98, "Suicune ex Silvally", 27, 30, 0],
    [99, "Sylveon ex Stoutland", 25, 28, 1],
    [100, "Solgaleo ex Galarian Cursola", 25, 32, 5],
    [101, "Silvally Darkrai ex", 17, 29, 0],
    [102, "Pikachu ex Zapdos ex", 29, 28, 0],
    [103, "Giratina ex Greninja", 33, 32, 2],
    [104, "Naganadel Guzzlord ex", 29, 26, 4],
    [105, "Suicune ex Gyarados ex", 25, 26, 1],
    [106, "Dragonite ex Mantyke", 18, 20, 2],
    [107, "Suicune ex Sylveon ex", 21, 24, 3],
    [108, "Beedrill ex Beedrill", 21, 32, 0],
    [109, "Celebi ex Serperior", 13, 30, 0],
    [110, "Primarina ex Primarina", 10, 24, 0],
    [111, "Lucario Rampardos", 24, 20, 1],
    [112, "Raichu ex Alolan Raichu ex", 27, 24, 1],
    [113, "Tapu Koko ex Arceus ex", 17, 20, 0],
    [114, "Lugia ex Altaria", 16, 25, 0],
    [115, "Umbreon ex Darkrai ex", 14, 22, 0],
    [116, "Darkrai ex Silvally", 17, 29, 0],
    [117, "Gyarados ex Gyarados", 14, 22, 2],
    [118, "Moltres ex Entei ex", 12, 25, 0],
    [119, "Darkrai ex Magnezone", 19, 19, 0],
    [120, "Crobat ex Umbreon ex", 24, 24, 0],
    [121, "Porygon-Z", 21, 21, 1],
    [122, "Lunala ex Giratina ex", 17, 26, 0],
    [123, "Dugtrio Lucario", 15, 23, 0],
    [124, "Pikachu ex Arceus ex", 19, 30, 0],
    [125, "Suicune ex Primarina ex", 15, 23, 1],
    [126, "Sylveon ex Togekiss", 17, 27, 1],
    [127, "Giratina ex", 12, 23, 0],
    [128, "Ho-Oh ex Lugia ex", 11, 28, 0],
    [129, "Jumpluff ex Glaceon ex", 16, 20, 0],
    [130, "Jumpluff ex Sylveon ex", 15, 18, 1],
    [131, "Flareon ex Jolteon", 16, 19, 2],
    [132, "Skarmory ex Skarmory", 10, 16, 1],
    [133, "Entei ex Magby", 11, 21, 0],
    [134, "Paldean Clodsire ex Nihilego", 7, 18, 0],
    [135, "Ho-Oh ex Celebi ex", 9, 22, 2],
    [136, "Miltank", 7, 24, 0],
    [137, "Jumpluff ex Raikou ex", 16, 14, 0],
    [138, "Arceus ex Raikou ex", 18, 17, 0],
    [139, "Darkrai ex Guzzlord ex", 20, 19, 0],
    [140, "Tsareena", 20, 18, 3],
    [141, "Leafeon ex Sylveon ex", 15, 17, 0],
    [142, "Giratina ex Galarian Cursola", 18, 22, 0],
    [143, "Silvally Pikachu ex", 12, 16, 0],
    [144, "Solgaleo ex Skarmory", 14, 18, 1],
    [145, "Entei ex Typhlosion", 9, 15, 0],
    [146, "Dragonite ex Suicune ex", 11, 19, 0],
    [147, "Darkrai ex Tyranitar", 10, 18, 0],
    [148, "Leafeon ex Alolan Exeggutor", 11, 20, 0],
    [149, "Meowscarada Pheromosa", 8, 19, 0],
    [150, "Gyarados ex Mantyke", 5, 13, 1],
    [151, "Magnezone Raikou ex", 6, 19, 0],
    [152, "Raikou ex Alolan Raichu ex", 18, 15, 0],
    [153, "Jumpluff ex Darkrai ex", 18, 15, 0],
    [154, "Sylveon ex Magnezone", 15, 13, 0],
    [155, "Primarina ex", 20, 17, 3],
    [156, "Sylveon ex Leafeon ex", 11, 13, 0],
    [157, "Jumpluff ex Suicune ex", 11, 16, 0],
    [158, "Dragonite ex Pichu", 11, 16, 0],
    [159, "Sylveon ex Galarian Cursola", 10, 14, 1],
    [160, "Sylveon ex Suicune ex", 7, 11, 0],
    [161, "Poliwrath ex Sylveon ex", 7, 14, 0],
    [162, "Aerodactyl ex Rampardos", 6, 14, 0],
    [163, "Alolan Exeggutor Leafeon", 22, 11, 3],
    [164, "Dragonite ex", 18, 12, 0],
    [165, "Alolan Raichu ex Dialga ex", 19, 14, 0],
    [166, "Crabominable ex Palkia ex", 17, 13, 1],
    [167, "Garchomp ex Sylveon ex", 12, 11, 0],
    [168, "Ampharos Raikou ex", 16, 14, 1],
    [169, "Tsareena Celebi ex", 10, 11, 0],
    [170, "Entei ex Flareon ex", 12, 14, 0],
    [171, "Raikou ex Pikachu ex", 9, 11, 0],
    [172, "Gallade ex Lucario", 11, 14, 0],
    [173, "Jumpluff ex Zangoose", 11, 15, 0],
    [174, "Guzzlord ex", 13, 15, 3],
    [175, "Tsareena", 10, 15, 0],
    [176, "Darkrai ex Zoroark", 10, 16, 0],
    [177, "Pikachu ex Raikou ex", 8, 13, 0],
    [178, "Umbreon ex Sylveon ex", 8, 13, 0],
    [179, "Electivire Pichu", 6, 11, 0],
    [180, "Crobat ex Sylveon ex", 8, 15, 0],
    [181, "Alolan Exeggutor Tsareena", 8, 15, 0],
    [182, "Starmie ex Suicune ex", 6, 11, 1],
    [183, "Magnezone Galvantula", 8, 16, 0],
    [184, "Decidueye ex Pheromosa", 6, 12, 0],
    [185, "Primarina ex Suicune ex", 4, 10, 0],
    [186, "Alolan Raichu ex Tapu Koko ex", 6, 14, 1],
    [187, "Raikou ex Oricorio", 5, 13, 0],
    [188, "Mewtwo ex Giratina ex", 3, 8, 0],
    [189, "Silvally Raikou ex", 4, 11, 0],
    [190, "Poliwrath ex Suicune ex", 6, 17, 0],
    [191, "Gyarados ex Zangoose", 4, 14, 0],
    [192, "Zapdos ex Pikachu ex", 0, 15, 0],
    [193, "Gyarados ex Greninja", 18, 6, 0],
    [194, "Giratina ex Magnezone", 19, 8, 0],
    [195, "Yanmega ex Dialga ex", 14, 6, 0],
    [196, "Ampharos Zeraora", 17, 9, 0],
    [197, "Decidueye Meowscarada", 18, 10, 2],
    [198, "Suicune ex Primarina", 12, 9, 0],
    [199, "Lycanroc Rampardos", 9, 8, 0],
    [200, "Alolan Raichu ex Zeraora", 11, 11, 0],
    [201, "Tapu Koko ex Luxray", 8, 8, 0],
    [202, "Jumpluff ex Pikachu ex", 11, 11, 0],
    [203, "Alolan Muk ex Weezing", 7, 7, 0],
    [204, "Weezing Darkrai ex", 10, 10, 0],
    [205, "Incineroar ex Sylveon ex", 11, 13, 0],
    [206, "Paldean Clodsire ex Darkrai ex", 10, 11, 1],
    [207, "Togekiss Cleffa", 8, 10, 0],
    [208, "Darkrai ex Umbreon ex", 7, 9, 0],
    [209, "Garchomp ex", 10, 13, 0],
    [210, "Lanturn ex Pichu", 9, 12, 0],
    [211, "Infernape ex Flareon ex", 9, 12, 0],
    [212, "Skarmory ex Wigglytuff", 6, 8, 0],
    [213, "Suicune ex Araquanid", 7, 10, 0],
    [214, "Decidueye", 8, 11, 1],
    [215, "Suicune ex Alolan Raichu ex", 4, 6, 0],
    [216, "Arceus ex Lucario ex", 11, 16, 1],
    [217, "Leafeon ex Eevee ex", 5, 8, 0],
    [218, "Pikachu ex Pichu", 6, 10, 0],
    [219, "Umbreon ex Malamar", 5, 9, 0],
    [220, "Silvally", 5, 9, 0],
    [221, "Sylveon ex Gengar ex", 7, 12, 1],
    [222, "Tyranitar Naganadel", 4, 8, 0],
    [223, "Dialga ex Arceus ex", 4, 9, 0],
    [224, "Leafeon ex Meowscarada", 4, 9, 0],
    [225, "Alolan Raichu ex Pichu", 4, 9, 0],
    [226, "Boltund Tapu Koko ex", 3, 8, 0],
    [227, "Poliwrath ex Mantyke", 3, 8, 0],
    [228, "Gyarados ex Manaphy", 4, 11, 0],
    [229, "Venusaur ex Leafeon ex", 4, 12, 0],
    [230, "Alolan Raichu ex Raichu ex", 3, 11, 0],
    [231, "Gyarados Suicune ex", 3, 11, 0],
    [232, "Blastoise ex Blastoise", 2, 9, 0],
    [233, "Suicune ex Pidgeot ex", 2, 9, 0],
    [234, "Gengar ex Gengar", 2, 10, 0],
    [235, "Poliwrath ex Garchomp", 2, 11, 0],
    [236, "Weavile ex Zoroark", 1, 12, 0],
    [237, "Solgaleo ex Skarmory ex", 0, 11, 0],
    [238, "Suicune ex Wugtrio ex", 14, 5, 0],
    [239, "Lanturn ex Zeraora", 14, 6, 0],
    [240, "Arceus ex Altaria", 10, 5, 0],
    [241, "Charizard ex Magby", 12, 6, 0],
    [242, "Luxray Oricorio", 13, 8, 0],
    [243, "Jumpluff ex Zeraora", 9, 6, 0],
    [244, "Crobat Arceus", 12, 8, 0],
    [245, "Jumpluff ex Snorlax ex", 9, 7, 0],
    [246, "Alolan Raichu ex Entei ex", 10, 8, 0],
    [247, "Palkia ex Silvally", 11, 9, 0],
    [248, "Mismagius ex Giratina ex", 9, 8, 0],
    [249, "Electivire Raikou ex", 9, 8, 0],
    [250, "Gallade ex Hitmontop", 9, 7, 1],
    [251, "Altaria Ultra Necrozma ex", 5, 5, 0],
    [252, "Ninetales Rapidash", 7, 7, 0],
    [253, "Luxray Pichu", 8, 8, 0],
    [254, "Gyarados ex Palkia ex", 9, 9, 1],
    [255, "Entei ex Giratina ex", 8, 7, 2],
    [256, "Beedrill ex Exeggutor ex", 7, 8, 0],
    [257, "Pikachu ex Zebstrika", 6, 7, 0],
    [258, "Lucario Hitmontop", 6, 7, 0],
    [259, "Alolan Raichu ex Altaria", 10, 12, 0],
    [260, "Raichu ex Pikachu ex", 5, 6, 0],
    [261, "Jolteon Pikachu ex", 9, 10, 1],
    [262, "Luxray Raikou ex", 8, 9, 1],
    [263, "Kingdra ex Greninja", 7, 9, 0],
    [264, "Alolan Raichu ex Darkrai ex", 6, 8, 0],
    [265, "Ho-Oh ex Dragonite", 6, 8, 0],
    [266, "Giratina ex Arceus ex", 5, 7, 0],
    [267, "Dragonite Pichu", 5, 6, 1],
    [268, "Guzzlord ex Tyranitar", 5, 7, 0],
    [269, "Darkrai ex Giratina ex", 7, 10, 0],
    [270, "Donphan ex Donphan", 7, 10, 0],
    [271, "Solgaleo ex Silvally", 6, 9, 0],
    [272, "Darkrai ex Crobat ex", 6, 9, 0],
    [273, "Snorlax ex Lugia ex", 7, 11, 0],
    [274, "Ho-Oh ex Darkrai ex", 3, 5, 0],
    [275, "Raikou ex Electivire", 7, 11, 1],
    [276, "Donphan ex Tyrogue", 4, 7, 0],
    [277, "Guzzlord ex Darkrai ex", 4, 7, 0],
    [278, "Slowking Articuno ex", 4, 6, 1],
    [279, "Zapdos ex Arceus ex", 5, 9, 0],
    [280, "Beedrill ex Shuckle ex", 5, 8, 1],
    [281, "Scolipede Weezing", 3, 6, 0],
    [282, "Giratina ex Sylveon ex", 4, 8, 0],
    [283, "Decidueye ex Raikou ex", 2, 4, 0],
    [284, "Palkia ex Manaphy", 4, 9, 0],
    [285, "Raikou ex Greninja", 4, 7, 2],
    [286, "Meowscarada Shuckle ex", 4, 9, 0],
    [287, "Paldean Clodsire ex Grafaiai", 3, 7, 0],
    [288, "Meowscarada Celebi", 3, 7, 0],
    [289, "Alolan Dugtrio ex Skarmory ex", 3, 7, 0],
    [290, "Crobat ex Paldean Clodsire ex", 5, 12, 0],
    [291, "Incineroar ex Incineroar", 4, 9, 1],
    [292, "Exeggutor ex Alolan Exeggutor", 4, 10, 0],
    [293, "Palkia ex Mantyke", 3, 8, 0],
    [294, "Suicune ex Arceus ex", 3, 7, 1],
    [295, "Arceus ex Carnivine", 3, 9, 0],
    [296, "Paldean Clodsire ex Weezing", 3, 10, 0],
    [297, "Dragonite", 2, 7, 0],
    [298, "Moltres ex Charizard ex", 2, 8, 0],
    [299, "Pikachu ex Tapu Koko ex", 2, 9, 0],
    [300, "Blastoise ex Palkia ex", 2, 9, 0],
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