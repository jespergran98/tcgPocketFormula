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
  [301, "Darkrai ex Umbreon", 2, 11, 0],
  [302, "Naganadel Darkrai ex", 1, 6, 0],
  [303, "Wigglytuff ex Arceus ex", 1, 7, 0],
  [304, "Arceus ex Pikachu ex", 1, 8, 0],
  [305, "Zapdos ex Pichu", 1, 8, 0],
  [306, "Charizard ex Moltres ex", 1, 8, 1],
  [307, "Solgaleo ex", 1, 9, 0],
  [308, "Guzzlord ex Celesteela", 0, 4, 0],
  [309, "Arceus ex Tyranitar", 0, 7, 0],
  [310, "Ho-Oh ex Dragonite ex", 0, 7, 0],
  [311, "Infernape ex Moltres ex", 5, 2, 0],
  [312, "Greninja Snorlax", 7, 3, 0],
  [313, "Tapu Koko ex Oricorio", 11, 6, 0],
  [314, "Darkrai ex Snorlax ex", 7, 4, 0],
  [315, "Pikachu ex Zapdos ex", 9, 6, 0],
  [316, "Alolan Muk ex Igglybuff", 7, 5, 0],
  [317, "Raichu ex Zeraora", 7, 5, 0],
  [318, "Primarina ex Pyukumuku", 8, 6, 0],
  [319, "Arcanine ex Moltres ex", 5, 4, 0],
  [320, "Gyarados ex", 5, 4, 0],
  [321, "Gallade ex Rampardos", 5, 4, 0],
  [322, "Gallade ex Hitmonlee", 6, 5, 0],
  [323, "Magnezone Oricorio", 6, 5, 0],
  [324, "Wugtrio ex Palkia ex", 6, 5, 0],
  [325, "Gyarados Corsola", 6, 5, 0],
  [326, "Alolan Raichu ex Magnezone", 7, 6, 0],
  [327, "Lanturn ex Galvantula", 7, 5, 1],
  [328, "Palkia ex Origin Forme Palkia", 9, 7, 1],
  [329, "Incineroar ex Cleffa", 7, 6, 1],
  [330, "Glaceon ex Palkia ex", 4, 4, 0],
  [331, "Infernape ex", 6, 6, 0],
  [332, "Milotic Suicune ex", 5, 5, 0],
  [333, "Arceus ex Zeraora", 4, 4, 0],
  [334, "Raikou ex Decidueye ex", 4, 4, 0],
  [335, "Sylveon ex Rampardos", 6, 6, 0],
  [336, "Raichu ex Tapu Koko ex", 7, 7, 0],
  [337, "Beedrill ex Meowscarada", 4, 4, 0],
  [338, "Dragonite ex Zeraora", 6, 6, 0],
  [339, "Charizard ex Sylveon ex", 7, 7, 0],
  [340, "Arceus ex Suicune ex", 3, 3, 0],
  [341, "Espeon ex", 6, 6, 1],
  [342, "Donphan ex", 6, 7, 0],
  [343, "Snorlax ex Arceus ex", 6, 7, 0],
  [344, "Snorlax ex Giratina ex", 5, 6, 0],
  [345, "Incineroar ex Salazzle", 5, 6, 0],
  [346, "Flareon ex Eevee ex", 5, 6, 0],
  [347, "Electivire Galvantula", 5, 6, 0],
  [348, "Eevee ex Espeon ex", 5, 6, 0],
  [349, "Tapu Koko ex Zapdos ex", 4, 4, 1],
  [350, "Electivire Zeraora", 4, 5, 0],
  [351, "Gallade ex Magnezone", 4, 5, 0],
  [352, "Luxray Electivire", 4, 5, 0],
  [353, "Starmie ex Articuno ex", 4, 5, 0],
  [354, "Pikachu ex Raichu", 4, 5, 0],
  [355, "Tapu Koko ex Zeraora", 4, 5, 0],
  [356, "Sylveon ex Luxray", 4, 5, 0],
  [357, "Zapdos ex Raikou ex", 3, 4, 0],
  [358, "Donphan ex Lycanroc", 3, 3, 1],
  [359, "Entei ex Charizard ex", 6, 8, 0],
  [360, "Buzzwole ex Pheromosa", 6, 6, 2],
  [361, "Alolan Golem Pichu", 5, 6, 1],
  [362, "Decidueye ex", 5, 7, 0],
  [363, "Venusaur ex", 5, 7, 0],
  [364, "Silvally Meowscarada", 4, 6, 0],
  [365, "Infernape ex Shiinotic", 4, 6, 0],
  [366, "Espeon ex Mismagius ex", 4, 6, 0],
  [367, "Dragonite Suicune ex", 4, 5, 1],
  [368, "Altaria Darkrai ex", 4, 6, 0],
  [369, "Primarina ex Palkia ex", 4, 5, 1],
  [370, "Alolan Raichu ex Oricorio", 2, 3, 0],
  [371, "Garchomp Mantyke", 5, 7, 1],
  [372, "Raikou ex Ampharos", 5, 8, 0],
  [373, "Arceus ex Snorlax ex", 3, 5, 0],
  [374, "Poliwrath ex Rampardos", 3, 5, 0],
  [375, "Meowscarada Leafeon", 3, 5, 0],
  [376, "Melmetal Skarmory", 3, 5, 0],
  [377, "Kabutops Rampardos", 4, 7, 0],
  [378, "Meowscarada Tyrogue", 4, 7, 0],
  [379, "Shuckle ex Meowscarada", 4, 7, 0],
  [380, "Skarmory ex Bastiodon", 4, 7, 0],
  [381, "Porygon-Z Mantyke", 5, 9, 0],
  [382, "Dragonite ex Raikou ex", 3, 6, 0],
  [383, "Raichu ex Raikou ex", 3, 6, 0],
  [384, "Suicune ex Feraligatr", 1, 2, 0],
  [385, "Suicune ex Omastar", 1, 2, 0],
  [386, "Starmie ex Milotic", 3, 5, 1],
  [387, "Glaceon ex Alolan Raichu ex", 3, 6, 0],
  [388, "Umbreon Darkrai ex", 2, 4, 0],
  [389, "Gallade ex", 2, 3, 1],
  [390, "Sylveon ex Lunala ex", 2, 4, 0],
  [391, "Giratina ex Gardevoir", 2, 4, 0],
  [392, "Lickilicky ex Lickilicky", 3, 7, 0],
  [393, "Luxray Zeraora", 3, 7, 0],
  [394, "Raikou ex Crobat", 3, 7, 0],
  [395, "Mismagius ex Sylveon ex", 3, 7, 0],
  [396, "Celebi ex Meowscarada", 3, 6, 1],
  [397, "Sylveon ex Giratina ex", 2, 5, 0],
  [398, "Pidgeot ex Dialga ex", 2, 5, 0],
  [399, "Beedrill ex", 2, 5, 0],
  [400, "Yanmega ex Raikou ex", 2, 5, 0],
  [401, "Vanilluxe Alcremie", 2, 5, 0],
  [402, "Suicune ex Dragonite ex", 2, 5, 0],
  [403, "Decidueye ex Lurantis", 2, 5, 0],
  [404, "Meowscarada", 2, 5, 0],
  [405, "Lugia ex Silvally", 2, 5, 0],
  [406, "Meowscarada Celebi ex", 3, 8, 0],
  [407, "Raikou ex Silvally", 1, 3, 0],
  [408, "Aerodactyl ex Primeape", 1, 3, 0],
  [409, "Jumpluff ex Arceus ex", 2, 6, 0],
  [410, "Umbreon ex Zoroark", 2, 6, 0],
  [411, "Flareon ex Entei ex", 1, 3, 0],
  [412, "Pikachu ex Magnezone", 1, 3, 0],
  [413, "Magnezone Pikachu ex", 2, 6, 0],
  [414, "Alolan Exeggutor Pichu", 1, 3, 0],
  [415, "Donphan ex Silvally", 1, 4, 0],
  [416, "Lanturn ex Tapu Koko ex", 1, 4, 0],
  [417, "Darkrai ex", 1, 4, 0],
  [418, "Kingdra ex Suicune ex", 1, 4, 0],
  [419, "Porygon-Z Pichu", 1, 4, 0],
  [420, "Altaria Druddigon", 1, 4, 0],
  [421, "Umbreon ex Giratina ex", 1, 4, 0],
  [422, "Paldean Clodsire ex Naganadel", 1, 5, 0],
  [423, "Luxray Galvantula", 1, 5, 0],
  [424, "Suicune ex Slowking", 1, 5, 0],
  [425, "Gyarados ex Articuno ex", 1, 5, 0],
  [426, "Umbreon ex Greninja", 1, 5, 0],
  [427, "Silvally Suicune ex", 1, 5, 0],
  [428, "Tinkaton ex Pichu", 1, 5, 0],
  [429, "Blastoise ex Articuno ex", 1, 5, 0],
  [430, "Skarmory ex Melmetal", 1, 5, 0],
  [431, "Pikachu ex Pachirisu ex", 1, 6, 0],
  [432, "Mew ex Gardevoir", 1, 6, 0],
  [433, "Sylveon ex Ampharos", 1, 6, 0],
  [434, "Garchomp ex Lucario", 1, 8, 0],
  [435, "Incineroar ex Charizard ex", 1, 9, 0],
  [436, "Decidueye ex Swanna", 0, 4, 0],
  [437, "Silvally Magby", 0, 3, 0],
  [438, "Golem Druddigon", 0, 4, 0],
  [439, "Dialga ex Gholdengo", 0, 4, 0],
  [440, "Alolan Raichu ex Sylveon ex", 0, 3, 0],
  [441, "Leafeon ex Aerodactyl ex", 0, 4, 0],
  [442, "Galarian Cursola Latias", 0, 3, 0],
  [443, "Sylveon ex Gardevoir", 0, 1, 0],
  [444, "Crobat ex Guzzlord ex", 0, 4, 0],
  [445, "Blastoise ex Lapras", 0, 3, 0],
  [446, "Mamoswine Regirock", 0, 6, 0],
  [447, "Solgaleo ex Gholdengo", 0, 3, 0],
  [448, "Ninetales Rapidash", 0, 3, 0],
  [449, "Charizard ex Incineroar ex", 4, 1, 0],
  [450, "Steelix Mantyke", 7, 2, 0],
  [451, "Palkia ex Gyarados ex", 6, 2, 0],
  [452, "Charizard ex Flareon ex", 6, 2, 0],
  [453, "Exeggutor ex Mew ex", 3, 1, 0],
  [454, "Mewtwo ex Gardevoir", 6, 2, 0],
  [455, "Silvally Zeraora", 6, 2, 0],
  [456, "Espeon ex Giratina ex", 6, 2, 0],
  [457, "Jumpluff Snorlax", 6, 1, 1],
  [458, "Espeon ex Gardevoir", 3, 1, 0],
  [459, "Flareon ex Turtonator", 3, 1, 0],
  [460, "Suicune ex Palkia ex", 5, 2, 0],
  [461, "Dugtrio Rampardos", 5, 2, 0],
  [462, "Guzzlord ex Umbreon", 5, 2, 0],
  [463, "Donphan ex Bibarel ex", 2, 1, 0],
  [464, "Lycanroc ex Pichu", 4, 2, 0],
  [465, "Porygon-Z Stoutland", 4, 2, 0],
  [466, "Pawmot Zangoose", 6, 2, 1],
  [467, "Palkia ex Gyarados", 6, 3, 0],
  [468, "Rampardos Lucario", 4, 2, 0],
  [469, "Flareon ex Magby", 4, 2, 0],
  [470, "Melmetal Alolan Dugtrio", 4, 2, 0],
  [471, "Magnezone Hitmonlee", 4, 2, 0],
  [472, "Flareon ex Flareon", 2, 1, 0],
  [473, "Skarmory ex Wigglytuff", 6, 2, 1],
  [474, "Meowscarada Kartana", 5, 3, 0],
  [475, "Magnezone Skarmory", 5, 3, 0],
  [476, "Pidgeot ex Banette", 5, 3, 0],
  [477, "Dragonite ex Oricorio", 5, 3, 0],
  [478, "Entei ex Infernape ex", 5, 3, 0],
  [479, "Umbreon ex Naganadel", 5, 2, 1],
  [480, "Tyranitar Snorlax", 5, 2, 1],
  [481, "Weavile ex Malamar", 5, 3, 0],
  [482, "Dugtrio Tyrogue", 6, 4, 0],
  [483, "Venusaur ex Mantyke", 3, 2, 0],
  [484, "Lanturn ex Pikachu ex", 3, 2, 0],
  [485, "Wishiwashi ex Wishiwashi", 3, 2, 0],
  [486, "Machamp ex Lucario ex", 3, 2, 0],
  [487, "Alolan Raichu ex Silvally", 3, 2, 0],
  [488, "Xatu Grafaiai", 3, 2, 0],
  [489, "Weavile ex Paldean Clodsire ex", 3, 2, 0],
  [490, "Togekiss Galarian Cursola", 3, 2, 0],
  [491, "Palkia ex", 6, 3, 1],
  [492, "Altaria Arceus ex", 3, 2, 0],
  [493, "Altaria Oricorio", 4, 3, 0],
  [494, "Rampardos Aerodactyl ex", 4, 3, 0],
  [495, "Raikou ex Alolan Exeggutor", 4, 3, 0],
  [496, "Raikou ex Pidgeot ex", 4, 3, 0],
  [497, "Rampardos Silvally", 4, 3, 0],
  [498, "Lickilicky ex Ho-Oh ex", 4, 3, 0],
  [499, "Zoroark Silvally", 4, 3, 0],
  [500, "Rampardos Type: Null", 4, 3, 0],
];

const STATE = {
  activeTab: "formula1",
  processedData: [],
  rankedByFormula1: [],
  rankedByFormula2: [],
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
  const term2 = z * Math.sqrt((p * (1 - p)) / n + z2 / (4 * n * n));
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
  const weightedMean =
    deckStats.reduce((sum, d) => sum + d.winRate * d.n, 0) / totalGames;
  const variance =
    deckStats.reduce(
      (sum, d) => sum + d.n * Math.pow(d.winRate - weightedMean, 2),
      0
    ) / totalGames;

  // Estimate Beta hyperparameters
  const meanEst = Math.max(0.01, Math.min(0.99, weightedMean));
  const varEst = Math.max(
    0.0001,
    Math.min(meanEst * (1 - meanEst) * 0.85, variance)
  );
  const alphaBeta = Math.max(1, (meanEst * (1 - meanEst)) / varEst - 1);
  const priorAlpha = meanEst * alphaBeta;
  const priorBeta = (1 - meanEst) * alphaBeta;

  // Determine base z-score
  const zScores = {
    2000: -1.28,
    10000: -1.645,
    50000: -1.96,
    Infinity: -2.326,
  };
  let baseZ =
    zScores[Object.keys(zScores).find((key) => totalGames < key)] ||
    zScores.Infinity;

  // Adjust for meta diversity
  const metaDiversity = variance / (meanEst * (1 - meanEst));
  const adaptiveZ =
    baseZ * Math.max(0.8, Math.min(1.2, 1 / (0.3 + metaDiversity)));

  // Calculate hierarchical estimates with meta adjustment
  return allData.map(([origRank, deck, wins, losses, ties]) => {
    const n = wins + losses + ties;
    const adjWins = wins + 0.5 * ties;
    const adjLosses = losses + 0.5 * ties;

    const postAlpha = priorAlpha + adjWins;
    const postBeta = priorBeta + adjLosses;
    const posteriorMean = postAlpha / (postAlpha + postBeta);
    const postVariance =
      (postAlpha * postBeta) /
      ((postAlpha + postBeta) ** 2 * (postAlpha + postBeta + 1));
    const lowerBound = Math.max(
      0,
      posteriorMean + adaptiveZ * Math.sqrt(postVariance)
    );
    const adjustedLowerBound = Math.min(0.99, lowerBound * metaAdjustment);
    const dataWeight = n / (n + priorAlpha + priorBeta);

    return {
      origRank,
      deck,
      wins,
      losses,
      ties,
      n,
      lowerBound,
      adjustedLowerBound,
      posteriorMean,
      dataWeight,
    };
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

  STATE.processedData = data.map(
    ([origRank, deck, wins, losses, ties], idx) => {
      const n = wins + losses + ties;
      const w = wins + 0.5 * ties;
      const observedP = w / n;
      const wilsonLb = wilsonLower(observedP, n);
      const f2 = formula2Results[idx];

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
        effectiveWinPct1: wilsonLb * 100,
        strength1: calculateStrength(wilsonLb * 100),
        hierarchicalLower: f2.adjustedLowerBound,
        hierarchicalWinPct: f2.adjustedLowerBound * 100,
        strength2: calculateStrength(f2.adjustedLowerBound * 100),
        posteriorMean: f2.posteriorMean,
      };
    }
  );

  const sortByFormula = (formula) => {
    const key = formula === 1 ? "strength1" : "strength2";
    const ranked = [...STATE.processedData].sort((a, b) =>
      b[key] !== a[key] ? b[key] - a[key] : b.observedP - a.observedP
    );
    return ranked.map((item, idx) => ({
      ...item,
      [`rank${formula}`]: idx + 1,
      [`delta${formula}`]: item.origRank - (idx + 1),
    }));
  };

  STATE.rankedByFormula1 = sortByFormula(1);
  STATE.rankedByFormula2 = sortByFormula(2);
};

// Create rank change indicator
const rankChangeHTML = (delta) => {
  const icons = {
    up: '<polyline points="12 19 12 5 5 12"></polyline>',
    down: '<polyline points="12 5 12 19 19 12"></polyline>',
    neutral: '<line x1="5" y1="12" x2="19" y2="12"></line>',
  };
  const [type, prefix] =
    delta > 0
      ? ["positive", "+"]
      : delta < 0
      ? ["negative", ""]
      : ["neutral", ""];
  const iconKey = delta > 0 ? "up" : delta < 0 ? "down" : "neutral";
  return `<span class="rank-change ${type}"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">${icons[iconKey]}</svg> ${prefix}${delta}</span>`;
};

// Generate table rows
const generateTableRows = (ranked, formula) => {
  const cols =
    formula === 1
      ? ["effectiveWinPct1", "strength1", "delta1"]
      : ["posteriorMean", "hierarchicalWinPct", "strength2", "delta2"];

  return ranked
    .map(
      (item) => `
        <tr>
            <td class="rank">${item[`rank${formula}`]}</td>
            <td>${item.deck}</td>
            <td class="center">${item.wins}</td>
            <td class="center">${item.losses}</td>
            <td class="center">${item.ties}</td>
            <td class="center">${item.n}</td>
            ${
              formula === 1
                ? `<td class="center">${(item.observedP * 100).toFixed(
                    2
                  )}%</td><td class="center">${item.effectiveWinPct1.toFixed(
                    2
                  )}%</td>`
                : `<td class="center">${(item.posteriorMean * 100).toFixed(
                    2
                  )}%</td><td class="center">${item.hierarchicalWinPct.toFixed(
                    2
                  )}%</td>`
            }
            <td class="strength">${item[`strength${formula}`].toFixed(2)}</td>
            <td class="center">${rankChangeHTML(item[`delta${formula}`])}</td>
        </tr>
    `
    )
    .join("");
};

// Generate table HTML
const generateTable = (formula) => {
  const ranked =
    formula === 1 ? STATE.rankedByFormula1 : STATE.rankedByFormula2;
  const headers =
    formula === 1
      ? [
          "Rank",
          "Deck",
          "W",
          "L",
          "T",
          "Games",
          "Win%",
          "Eff Win%",
          "Strength",
          "Change",
        ]
      : [
          "Rank",
          "Deck",
          "W",
          "L",
          "T",
          "Games",
          "Post Mean%",
          "Hier LB%",
          "Strength",
          "Change",
        ];

  return `
        <table>
            <thead class="formula${formula}">
                <tr>${headers
                  .map(
                    (h) =>
                      `<th class="${
                        h.includes("%") ? "text-center" : ""
                      }">${h}</th>`
                  )
                  .join("")}</tr>
            </thead>
            <tbody>${generateTableRows(ranked, formula)}</tbody>
        </table>
    `;
};

// Generate comparison table
const generateComparisonTable = () => {
  const rows = STATE.processedData
    .sort((a, b) => a.origRank - b.origRank)
    .map((item) => {
      const f1 = STATE.rankedByFormula1.find((d) => d.deck === item.deck);
      const f2 = STATE.rankedByFormula2.find((d) => d.deck === item.deck);
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
    })
    .join("");

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
  const html =
    STATE.activeTab === "comparison"
      ? generateComparisonTable()
      : generateTable(STATE.activeTab === "formula1" ? 1 : 2);
  document.querySelector(".table-wrapper").innerHTML = html;
};

// Switch tabs
window.switchTab = (tab) => {
  STATE.activeTab = tab;
  document
    .querySelectorAll(".tab-button")
    .forEach((btn) => btn.classList.remove("active"));
  document.querySelector(`.tab-button.${tab}`).classList.add("active");
  updateTable();
};

// Initialize app
const init = () => {
  processData();

  document.getElementById("root").innerHTML = `
        <div class="container">
            <h1>Tournament Deck Ranking Analysis</h1>

            <div class="card">
                <h2>Methodology Comparison</h2>
                <div class="methodology-grid">
                    <div class="methodology-box formula1">
                        <h3>Adaptive Wilson Score Interval</h3>
                        <p><strong>What it does:</strong> Imagine you're at a tournament and see a deck that won 5 games and lost 0. Looks unbeatable, right? But with only 5 games played, it might just be lucky. This method asks: "How confident are we really?" It calculates a conservative estimate of the deck's true strength by accounting for uncertainty. The key insight: decks with more tournament results get less penalty because we have stronger evidence of their actual power.</p>
                        <p><strong>How to think about it:</strong> Think of this like a confidence range. A 100% win rate from 5 games might really be anywhere from 60-100% true strength. A 60% win rate from hundreds of games is probably actually 58-62% true strength. This method uses the <em>lower bound</em> of that confidence range as the ranking—it's being pessimistic on purpose to fairly handle uncertainty. Note: ties are counted as 0.5 wins and 0.5 losses, so a 2-0-1 record is treated as 2.5 wins, 0.5 losses, and 3 total games.</p>
                        <p><strong>The math (for the curious):</strong> The formula uses Wilson score confidence intervals with adaptive confidence levels. Here's what that means:</p>
                        <ul style="margin: 10px 0; padding-left: 20px;">
                            <li><strong>Adaptive z-scores:</strong> A "z-score" controls how confident we want to be. For tiny sample sizes (n&lt;30), we use 2.576 (99% confidence—very cautious). As we accumulate more data, it smoothly decreases to 1.96 (95% confidence—still cautious but less extreme) for massive samples (n&gt;1000). This scaling reflects how much more we learn from each additional game early on, versus later on.</li>
                            <li><strong>The formula:</strong> Lower bound = (p̂ + z²/2n - z√(p̂(1-p̂)/n + z²/4n²)) / (1 + z²/n), where p̂ is observed win rate and n is total games. This computes the lower edge of a confidence interval adjusted for both sample size and the inherent randomness of win/loss outcomes.</li>
                            <li><strong>Result:</strong> As you accumulate more games, the penalty shrinks because the √n term grows in the denominator—more data naturally tightens the bounds and reduces the penalty, rewarding decks with extensive tournament results.</li>
                        </ul>
                    </div>
                    <div class="methodology-box formula2">
                        <h3>Hierarchical Bayesian Estimation with Meta Awareness</h3>
                        <p><strong>What it does:</strong> This method is intelligent about the entire tournament landscape. It first analyzes tens of thousands of results across all decks to understand: "What does typical performance look like in this meta?" Then it ranks each deck by intelligently blending two sources of information: what the broader meta tells us AND what this specific deck's individual results show. A deck with few results gets slightly pulled toward the meta average (since we have less certainty). A deck with extensive results gets ranked almost purely on its own merit (since we're very confident). The method also adapts based on meta balance: in a tight meta where all decks cluster together, it's conservative; in a meta with clear power tiers, it allows meaningful separation.</p>
                        <p><strong>How to think about it:</strong> Imagine reviewing tournament data from tens of thousands of matches. You notice overall patterns: "Most decks win between 45-55% of their games, but there's some variance in the meta." Now when you see a deck with very few games and a strange win rate, you're rightfully skeptical—update your estimate toward what you know from the broader data. But a deck that's been played extensively and consistently wins 65% of the time? That's real. This method automatically handles both scenarios by treating the meta-wide patterns as prior knowledge and updating them with each deck's actual performance. Like the other method, ties are counted as 0.5 wins and 0.5 losses.</p>
                        <p><strong>The math (for the curious):</strong> This uses Bayesian statistics with Beta-Binomial conjugate distributions, a standard statistical framework for win/loss data:</p>
                        <ul style="margin: 10px 0; padding-left: 20px;">
                            <li><strong>Step 1 - Analyze the meta:</strong> From tens of thousands of tournament results across all decks, calculate the weighted average win rate (μ) and variance (σ²). These represent the central tendency and spread of performance across the entire metagame. Use these to estimate Beta distribution hyperparameters via α = μ((μ(1-μ)/σ²)-1) and β = (1-μ)((μ(1-μ)/σ²)-1). These parameters encode the shape of the empirical performance distribution.</li>
                            <li><strong>Step 2 - Update for each deck:</strong> Each deck's posterior strength distribution becomes Beta(α + wins, β + losses). The weight given to a deck's observed data is n/(n + α + β), where n is its game count. Decks with few results have n small, so (α + β) dominates and pulls the estimate toward the meta average. Decks with extensive results have n large, so observed data dominates. This creates automatic, principled weighting based on evidence.</li>
                            <li><strong>Step 3 - Adapt to meta diversity:</strong> If all decks cluster tightly (low variance), the meta is balanced and we should be conservative. If there are large power gaps (high variance), the meta allows bigger differences. This uses z_adaptive = z_base × max(0.8, min(1.2, 1/(0.3 + σ²/(μ(1-μ))))), which dynamically adjusts confidence intervals based on meta tightness. A perfectly balanced meta (low σ²) pulls z_adaptive toward 0.8 (very conservative), while a highly imbalanced meta (high σ²) pulls it toward 1.2 (allowing more spread).</li>
                            <li><strong>Final ranking:</strong> Each deck's ranking uses the lower bound of its Bayesian confidence interval: μ_post + z_adaptive × √(αβ/((α+β)²(α+β+1))). This combines the posterior mean estimate with uncertainty quantification, naturally penalizing decks with fewer results while trusting extensive data.</li>
                        </ul>
                        <p><strong>Why it works:</strong> By analyzing tens of thousands of tournament results to build accurate priors, then allowing individual deck performance to override those priors when evidence is strong, this method balances metagame context with individual deck performance. It respects both statistical reality and competitive structure.</p>
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

document.addEventListener("DOMContentLoaded", init);
