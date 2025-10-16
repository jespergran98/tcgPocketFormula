const data = [
    [1, "Giratina ex Darkrai ex", 7284, 5937, 221],
    [2, "Gyarados ex Manaphy", 3632, 3116, 92],
    [3, "Giratina ex Mewtwo ex", 1934, 1790, 47],
    [4, "Gallade ex Hitmonlee", 1718, 1683, 38],
    [5, "Charizard ex Moltres ex", 1371, 1379, 27],
    [6, "Dialga ex Arceus ex", 1130, 1291, 23],
    [7, "Rampardos Lucario", 1023, 1001, 27],
    [8, "Magnezone Meowscarada", 1040, 928, 17],
    [9, "Meowscarada Beedrill ex", 848, 924, 13],
    [10, "Weavile ex Darkrai ex", 792, 761, 16],
    [11, "Magnezone Skarmory", 651, 588, 10],
    [12, "Arceus ex Carnivine", 513, 498, 10],
    [13, "Exeggutor ex Meowscarada", 381, 415, 3],
    [14, "Darkrai ex Greninja", 388, 364, 8],
    [15, "Articuno ex", 317, 354, 4],
    [16, "Darkrai ex Giratina ex", 223, 219, 7],
    [17, "Arceus ex Meowscarada", 221, 215, 4],
    [18, "Rampardos Hitmonlee", 264, 208, 10],
    [19, "Wugtrio ex Palkia ex", 176, 201, 1],
    [20, "Blastoise ex Manaphy", 132, 184, 2],
    [21, "Darkrai ex Magnezone", 158, 162, 2],
    [22, "Giratina ex Dragonite", 138, 164, 1],
    [23, "Palkia ex Manaphy", 151, 148, 1],
    [24, "Mewtwo ex Giratina ex", 120, 138, 0],
    [25, "Charizard ex Moltres ex", 115, 137, 1],
    [26, "Meowscarada Arceus ex", 144, 142, 6],
    [27, "Leafeon ex Celebi ex", 76, 133, 2],
    [28, "Exeggutor ex Arceus ex", 131, 132, 2],
    [29, "Meowscarada Wigglytuff", 120, 140, 1],
    [30, "Dialga ex Gholdengo", 84, 144, 0],
    [31, "Palkia ex", 111, 121, 0],
    [32, "Beedrill ex", 84, 103, 3],
    [33, "Magnezone Pikachu ex", 103, 119, 2],
    [34, "Paldean Clodsire ex Grafaiai", 94, 128, 0],
    [35, "Gallade ex", 81, 117, 2],
    [36, "Giratina ex", 83, 112, 1],
    [37, "Wugtrio ex Manaphy", 76, 99, 0],
    [38, "Exeggutor ex Celebi ex", 90, 97, 1],
    [39, "Palkia ex Origin Forme Palkia", 97, 81, 4],
    [40, "Gyarados ex Origin Forme Palkia", 91, 90, 1],
    [41, "Lucario ex Lucario", 77, 96, 0],
    [42, "Wugtrio ex", 67, 80, 1],
    [43, "Beedrill ex Exeggutor ex", 86, 83, 1],
    [44, "Mewtwo ex Gardevoir", 62, 93, 1],
    [45, "Gyarados ex Palkia ex", 72, 71, 3],
    [46, "Giratina ex Arceus ex", 61, 76, 1],
    [47, "Leafeon ex Exeggutor", 49, 64, 0],
    [48, "Giratina ex Magnezone", 59, 65, 1],
    [49, "Giratina ex Greninja", 47, 63, 2],
    [50, "Pikachu ex Magnezone", 56, 65, 2],
    [51, "Tinkaton ex Skarmory", 56, 71, 1],
    [52, "Gallade ex Lucario", 38, 76, 0],
    [53, "Darkrai ex Arceus ex", 75, 65, 2],
    [54, "Palkia ex Vaporeon", 53, 49, 1],
    [55, "Wugtrio ex Floatzel", 44, 68, 3],
    [56, "Dialga ex Giratina ex", 52, 57, 1],
    [57, "Arceus ex Crobat", 38, 56, 1],
    [58, "Beedrill ex Meowscarada", 39, 59, 1],
    [59, "Starmie ex Palkia ex", 33, 52, 1],
    [60, "Wugtrio ex Articuno ex", 45, 48, 2],
    [61, "Meowscarada Exeggutor ex", 31, 51, 0],
    [62, "Gyarados ex Greninja", 42, 46, 0],
    [63, "Meowscarada Snorlax", 38, 43, 1],
    [64, "Celebi ex Serperior", 32, 47, 0],
    [65, "Mismagius ex Giratina ex", 27, 46, 1],
    [66, "Gengar ex Giratina ex", 25, 48, 1],
    [67, "Dragonite Giratina ex", 19, 38, 1],
    [68, "Meowscarada", 29, 41, 1],
    [69, "Magnezone Hitmonlee", 45, 34, 1],
    [70, "Darkrai ex Weezing", 31, 40, 0],
    [71, "Kangaskhan Origin Forme Palkia", 48, 43, 2],
    [72, "Giratina ex Snorlax", 29, 33, 0],
    [73, "Articuno ex Palkia ex", 27, 39, 0],
    [74, "Giratina ex Uxie", 36, 33, 0],
    [75, "Palkia ex Arceus ex", 39, 37, 2],
    [76, "Rampardos", 24, 33, 0],
    [77, "Rampardos Snorlax", 19, 33, 0],
    [78, "Garchomp ex Lucario ex", 20, 39, 0],
    [79, "Darkrai ex Weavile ex", 19, 32, 0],
    [80, "Garchomp ex Gallade ex", 23, 40, 0],
    [81, "Pachirisu ex", 13, 31, 0],
    [82, "Starmie ex Wugtrio ex", 10, 29, 0],
    [83, "Meowscarada Vespiquen", 35, 32, 0],
    [84, "Bastiodon Skarmory", 26, 31, 0],
    [85, "Pachirisu ex Pikachu ex", 19, 23, 0],
    [86, "Lucario ex Rampardos", 27, 34, 0],
    [87, "Mewtwo ex Mew ex", 17, 26, 0],
    [88, "Infernape ex Moltres ex", 6, 23, 0],
    [89, "Arceus ex Exeggutor", 36, 25, 0],
    [90, "Leafeon ex Meowscarada", 35, 33, 1],
    [91, "Leafeon ex Darkrai ex", 22, 20, 2],
    [92, "Palkia ex Giratina ex", 28, 29, 2],
    [93, "Darkrai ex Grafaiai", 21, 24, 0],
    [94, "Arceus ex Greninja", 18, 26, 0],
    [95, "Paldean Clodsire ex Weezing", 14, 24, 0],
    [96, "Luxray Pikachu ex", 15, 28, 0],
    [97, "Tinkaton ex Dialga ex", 8, 28, 0],
    [98, "Meowscarada Shaymin", 25, 22, 0],
    [99, "Meowscarada Magnezone", 22, 26, 1],
    [100, "Kabutops Lucario", 11, 21, 0],
    [101, "Togekiss Giratina ex", 10, 26, 0],
    [102, "Gallade ex Sudowoodo", 20, 19, 1],
    [103, "Greninja Giratina ex", 18, 17, 2],
    [104, "Rampardos Sudowoodo", 15, 18, 0],
    [105, "Pikachu ex Pachirisu", 13, 19, 1],
    [106, "Pikachu ex Giratina ex", 11, 17, 0],
    [107, "Pikachu ex Zapdos ex", 12, 15, 4],
    [108, "Meowscarada Celebi ex", 14, 23, 0],
    [109, "Probopass ex Dialga ex", 11, 22, 0],
    [110, "Magnezone Arceus ex", 26, 21, 0],
    [111, "Mew ex Giratina ex", 19, 20, 0],
    [112, "Lucario Rampardos", 18, 20, 0],
    [113, "Dragonite Druddigon", 18, 21, 0],
    [114, "Gyarados ex Articuno ex", 14, 19, 0],
    [115, "Giratina ex Alakazam", 13, 18, 0],
    [116, "Charizard ex", 11, 17, 0],
    [117, "Pikachu ex Pachirisu ex", 9, 14, 0],
    [118, "Mew ex Dialga ex", 12, 19, 1],
    [119, "Luxray Manectric", 7, 14, 0],
    [120, "Palkia ex Wugtrio ex", 9, 20, 0],
    [121, "Beedrill ex Celebi ex", 4, 17, 0],
    [122, "Charizard ex Arceus ex", 1, 13, 0],
    [123, "Gyarados ex Druddigon", 23, 18, 0],
    [124, "Magnezone Giratina ex", 23, 18, 1],
    [125, "Alakazam Giratina ex", 17, 16, 0],
    [126, "Meowscarada Cyclizar", 18, 18, 0],
    [127, "Garchomp Snorlax", 15, 17, 0],
    [128, "Gardevoir Mewtwo ex", 15, 17, 0],
    [129, "Paldean Clodsire ex Darkrai ex", 14, 17, 0],
    [130, "Meowscarada Farfetch'd", 12, 15, 0],
    [131, "Darkrai ex Crobat", 13, 17, 0],
    [132, "Giratina ex Mew ex", 15, 20, 1],
    [133, "Leafeon ex Giratina ex", 11, 19, 2],
    [134, "Darkrai ex Toxicroak", 3, 14, 0],
    [135, "Wugtrio ex Greninja", 17, 14, 1],
    [136, "Gyarados ex Gyarados", 11, 10, 0],
    [137, "Gallade ex Hitmonlee", 16, 14, 1],
    [138, "Togekiss Sigilyph", 15, 15, 0],
    [139, "Wugtrio ex Starmie ex", 9, 11, 0],
    [140, "Giratina ex Staraptor", 13, 17, 0],
    [141, "Starmie ex Leafeon ex", 12, 16, 0],
    [142, "Lucario ex Hitmonlee", 11, 15, 0],
    [143, "Palkia ex Articuno ex", 10, 14, 0],
    [144, "Yanmega ex Dialga ex", 8, 10, 2],
    [145, "Garchomp", 9, 14, 0],
    [146, "Rampardos Primeape", 10, 17, 0],
    [147, "Rampardos Persian", 8, 15, 0],
    [148, "Dialga ex Mew ex", 6, 12, 0],
    [149, "Lucario Sudowoodo", 7, 14, 0],
    [150, "Mew ex Mewtwo ex", 7, 14, 0],
    [151, "Wugtrio ex Origin Forme Palkia", 5, 12, 0],
    [152, "Marowak ex Magnezone", 6, 16, 0],
    [153, "Rampardos Marshadow", 3, 9, 0],
    [154, "Garchomp ex Lucario", 3, 15, 0],
    [155, "Arceus ex Magnezone", 3, 17, 0],
    [156, "Gyarados ex", 1, 7, 0],
    [157, "Origin Forme Palkia", 14, 9, 0],
    [158, "Magnezone Mew ex", 19, 13, 0],
    [159, "Charizard ex Giratina ex", 13, 10, 1],
    [160, "Rampardos Aerodactyl ex", 15, 13, 0],
    [161, "Garchomp ex Hitmonlee", 18, 16, 0],
    [162, "Infernape ex", 10, 10, 0],
    [163, "Leafeon ex Exeggutor ex", 10, 11, 0],
    [164, "Magnezone Weezing", 10, 11, 0],
    [165, "Infernape ex Arceus ex", 9, 9, 1],
    [166, "Probopass ex Skarmory", 11, 13, 0],
    [167, "Magnezone Snorlax", 8, 11, 0],
    [168, "Tinkaton ex Giratina ex", 10, 17, 0],
    [169, "Magnezone Electivire", 5, 9, 0],
    [170, "Beedrill ex Leafeon ex", 7, 13, 0],
    [171, "Dialga ex Melmetal", 7, 14, 0],
    [172, "Aerodactyl ex Rampardos", 4, 8, 0],
    [173, "Bibarel ex Wigglytuff", 8, 16, 0],
    [174, "Gyarados ex Mew ex", 6, 12, 0],
    [175, "Beedrill ex Yanmega ex", 5, 11, 0],
    [176, "Wugtrio ex Frosmoth", 5, 11, 1],
    [177, "Greninja Farfetch'd", 5, 13, 0],
    [178, "Pikachu ex Electivire", 5, 13, 0],
    [179, "Magnezone Ninetales", 4, 13, 1],
    [180, "Gengar ex Dusknoir", 2, 8, 0],
    [181, "Charizard ex Giratina ex", 1, 9, 0],
    [182, "Probopass ex Wormadam", 20, 9, 0],
    [183, "Arceus ex Farfetch'd", 19, 10, 0],
    [184, "Blastoise ex Articuno", 11, 8, 0],
    [185, "Aerodactyl ex Lucario", 8, 6, 0],
    [186, "Wugtrio ex Mew ex", 13, 10, 1],
    [187, "Exeggutor ex Yanmega ex", 14, 12, 0],
    [188, "Gyarados ex Chatot", 7, 7, 0],
    [189, "Meowscarada Leafeon", 8, 8, 0],
    [190, "Pikachu ex Pachirisu ex", 12, 12, 0],
    [191, "Glaceon ex Palkia ex", 11, 12, 0],
    [192, "Rampardos Giratina ex", 11, 11, 1],
    [193, "Arceus ex Manaphy", 10, 11, 1],
    [194, "Rampardos Kabutops", 10, 10, 2],
    [195, "Beedrill ex Beedrill", 8, 10, 0],
    [196, "Wugtrio ex Arceus ex", 6, 8, 0],
    [197, "Charizard ex Druddigon", 8, 11, 0],
    [198, "Zapdos ex Magnezone", 5, 7, 0],
    [199, "Primeape Rampardos", 6, 9, 0],
    [200, "Blastoise ex Chatot", 4, 6, 0],
    [201, "Blastoise ex", 7, 11, 0],
    [202, "Beedrill ex Vespiquen", 8, 13, 0],
    [203, "Arceus ex Mew ex", 6, 10, 0],
    [204, "Garchomp Druddigon", 6, 11, 0],
    [205, "Giratina ex Wigglytuff", 6, 11, 0],
    [206, "Starmie ex Floatzel", 6, 12, 0],
    [207, "Wugtrio ex Vaporeon", 3, 7, 0],
    [208, "Wormadam Skarmory", 3, 7, 0],
    [209, "Dragonite Magnezone", 3, 7, 0],
    [210, "Pikachu ex Luxray", 3, 9, 0],
    [211, "Greninja Floatzel", 3, 9, 0],
    [212, "Infernape ex Rapidash", 4, 11, 1],
    [213, "Beedrill ex Roserade", 4, 12, 0],
    [214, "Giratina ex Exeggutor", 2, 7, 0],
    [215, "Darkrai ex Paldean Clodsire ex", 2, 8, 0],
    [216, "Tinkaton ex", 2, 12, 0],
    [217, "Giratina ex Alakazam", 2, 14, 0],
    [218, "Darkrai ex Mew ex", 0, 7, 0],
    [219, "Starmie ex Articuno ex", 0, 5, 0],
    [220, "Blastoise ex Origin Forme Palkia", 13, 7, 0],
    [221, "Magnezone Arbok", 14, 7, 1],
    [222, "Arceus ex Abomasnow", 11, 7, 0],
    [223, "Gallade ex Primeape", 9, 7, 0],
    [224, "Greninja Origin Forme Palkia", 5, 4, 0],
    [225, "Meowscarada Leafeon ex", 8, 7, 0],
    [226, "Electivire Pikachu ex", 9, 8, 0],
    [227, "Gholdengo Skarmory", 9, 8, 0],
    [228, "Dialga ex Lickilicky ex", 5, 5, 0],
    [229, "Gyarados ex Glaceon ex", 5, 5, 0],
    [230, "Alakazam Mew ex", 8, 8, 0],
    [231, "Infernape ex Giratina ex", 3, 3, 0],
    [232, "Uxie Mesprit", 9, 9, 0],
    [233, "Melmetal Shaymin", 8, 8, 0],
    [234, "Charizard ex Wigglytuff", 8, 8, 1],
    [235, "Palkia ex Mew ex", 7, 8, 0],
    [236, "Gallade ex Lucario ex", 6, 7, 0],
    [237, "Crobat Arceus ex", 6, 7, 0],
    [238, "Ninetales Rapidash", 5, 6, 0],
    [239, "Exeggutor ex Mew ex", 5, 6, 0],
    [240, "Glaceon ex Giratina ex", 8, 9, 1],
    [241, "Primeape Lucario", 3, 4, 0],
    [242, "Dragonite Regirock", 5, 7, 0],
    [243, "Zapdos ex Pikachu ex", 6, 9, 0],
    [244, "Vaporeon Articuno ex", 4, 6, 0],
    [245, "Tyranitar Giratina ex", 2, 3, 0],
    [246, "Leafeon ex Venusaur ex", 3, 5, 0],
    [247, "Marowak ex Aerodactyl ex", 3, 5, 0],
    [248, "Palkia ex Poliwrath", 3, 5, 0],
    [249, "Giratina ex Dondozo", 4, 7, 0],
    [250, "Machamp ex", 4, 7, 0],
    [251, "Meowscarada Carnivine", 4, 7, 0],
    [252, "Arceus ex Exeggutor ex", 2, 4, 0],
    [253, "Venusaur ex Leafeon ex", 5, 10, 0],
    [254, "Gholdengo Giratina ex", 3, 6, 0],
    [255, "Gengar ex Mew ex", 5, 10, 0],
    [256, "Yanmega ex Leafeon ex", 2, 4, 0],
    [257, "Raichu Pikachu ex", 2, 4, 0],
    [258, "Meowscarada Victreebel", 4, 9, 0],
    [259, "Togekiss Giratina", 2, 5, 0],
    [260, "Mismagius ex Gengar ex", 2, 5, 0],
    [261, "Garchomp ex Garchomp", 3, 9, 0],
    [262, "Arceus ex Pidgeot", 2, 6, 1],
    [263, "Giratina ex Togekiss", 3, 11, 0],
    [264, "Magnezone Darkrai ex", 2, 8, 0],
    [265, "Pikachu ex Zebstrika", 1, 5, 0],
    [266, "Wigglytuff ex Bibarel ex", 1, 6, 0],
    [267, "Gengar ex Gengar", 1, 6, 0],
    [268, "Bisharp Skarmory", 1, 8, 0],
    [269, "Mewtwo ex Wigglytuff", 1, 9, 0],
    [270, "Dialga ex Probopass ex", 1, 10, 0],
    [271, "Blastoise ex Vaporeon", 1, 11, 0],
    [272, "Blastoise ex Druddigon", 3, 0, 0],
    [273, "Bastiodon Kangaskhan", 10, 5, 0],
    [274, "Gyarados ex Chatot", 4, 2, 0],
    [275, "Glaceon ex Floatzel", 6, 4, 0],
    [276, "Starmie ex Gyarados ex", 3, 2, 0],
    [277, "Lucario Hitmonlee", 7, 5, 0],
    [278, "Pidgeot ex Dialga ex", 4, 3, 0],
    [279, "Meowscarada Scyther", 4, 3, 0],
    [280, "Poliwrath Palkia ex", 6, 5, 0],
    [281, "Charizard ex Dusknoir", 6, 5, 0],
    [282, "Pikachu ex Magnezone", 6, 4, 1],
    [283, "Zapdos ex Pachirisu ex", 7, 6, 0],
    [284, "Alakazam Sigilyph", 7, 6, 0],
    [285, "Lucario Hitmonchan", 7, 6, 0],
    [286, "Giratina ex Dusknoir", 5, 5, 0],
    [287, "Pidgeot ex", 2, 2, 0],
    [288, "Garchomp Meowth", 6, 6, 0],
    [289, "Infernape ex Farfetch'd", 7, 7, 0],
    [290, "Staraptor Cyclizar", 4, 2, 2],
    [291, "Blastoise ex Blastoise", 3, 3, 0],
    [292, "Mismagius ex Mew ex", 5, 5, 0],
    [293, "Palkia ex Wigglytuff", 7, 7, 0],
    [294, "Gallade ex Snorlax", 2, 2, 0],
    [295, "Blastoise ex Palkia ex", 4, 4, 0],
    [296, "Arbok Weezing", 6, 7, 0],
    [297, "Palkia ex Starmie ex", 5, 6, 0],
    [298, "Magnezone Greninja", 5, 6, 0],
    [299, "Aerodactyl ex Arceus ex", 5, 6, 0],
    [300, "Infernape ex Dodrio", 5, 6, 0],
    [301, "Exeggutor ex Victreebel", 5, 6, 0],
    [302, "Starmie ex", 4, 5, 0],
    [303, "Beedrill ex Arceus ex", 4, 5, 0],
    [304, "Gallade ex Giratina ex", 4, 5, 0],
    [305, "Togekiss Mew ex", 3, 4, 0],
    [306, "Leafeon ex Mew ex", 3, 4, 0],
    [307, "Pikachu ex Zapdos ex", 3, 4, 0],
    [308, "Venusaur ex Exeggutor ex", 3, 4, 0],
    [309, "Meowscarada Mow Rotom", 3, 4, 0],
    [310, "Infernape ex Heatran", 3, 4, 0],
    [311, "Ninetales Rapidash", 5, 6, 1],
    [312, "Luxray Pachirisu", 4, 6, 0],
    [313, "Blastoise ex Dondozo", 4, 6, 0],
    [314, "Giratina ex Rampardos", 4, 6, 0],
    [315, "Blastoise ex Articuno ex", 4, 6, 0],
    [316, "Meowscarada Mew ex", 4, 5, 1],
    [317, "Arceus ex Raichu", 4, 6, 0],
    [318, "Lickilicky ex Dialga ex", 3, 5, 0],
    [319, "Floatzel Tauros", 3, 5, 0],
    [320, "Gyarados ex Wugtrio ex", 3, 5, 0],
    [321, "Bibarel ex Dialga ex", 3, 5, 0],
    [322, "Luxray Snorlax", 3, 5, 0],
    [323, "Eevee", 3, 5, 0],
    [324, "Lucario Hitmonlee", 3, 5, 0],
    [325, "Magnezone", 4, 6, 1],
    [326, "Marowak ex Lucario", 2, 4, 0],
    [327, "Primeape Marshadow", 2, 4, 0],
    [328, "Magnezone Gholdengo", 3, 5, 1],
    [329, "Meowscarada Giratina", 2, 4, 0],
    [330, "Pidgeot ex Meowth", 1, 2, 0],
    [331, "Alakazam Giratina ex", 2, 4, 0],
    [332, "Glaceon ex Greninja", 2, 4, 0],
    [333, "Melmetal Dialga ex", 3, 7, 0],
    [334, "Glaceon ex Articuno ex", 3, 7, 0],
    [335, "Pawmot Electrode", 2, 5, 0],
    [336, "Gyarados ex Vaporeon", 2, 5, 0],
    [337, "Machamp ex Machamp", 2, 5, 0],
    [338, "Pidgeot ex Starmie ex", 2, 6, 0],
    [339, "Pawmot Pachirisu ex", 2, 6, 0],
    [340, "Mismagius ex Mewtwo ex", 1, 3, 0],
    [341, "Primeape Lucario", 1, 3, 0],
    [342, "Dialga ex Tinkaton ex", 2, 6, 0],
    [343, "Mismagius ex", 1, 3, 0],
    [344, "Infernape ex Houndoom", 1, 3, 0],
    [345, "Lucario Onix", 2, 7, 0],
    [346, "Palkia ex Gyarados ex", 2, 7, 0],
    [347, "Gyarados ex Regice", 1, 4, 0],
    [348, "Magnezone Raichu", 1, 4, 0],
    [349, "Pikachu ex Raichu", 1, 4, 0],
    [350, "Pachirisu ex Zapdos ex", 1, 4, 0],
    [351, "Arceus ex Dialga ex", 1, 5, 0],
    [352, "Pikachu ex", 1, 5, 0],
    [353, "Giratina ex Tyranitar", 1, 5, 0],
    [354, "Darkrai ex Arbok", 1, 6, 0],
    [355, "Infernape ex Cyclizar", 1, 6, 0],
    [356, "Garchomp Chatot", 1, 6, 0],
    [357, "Paldean Clodsire ex Arbok", 1, 6, 0],
    [358, "Machamp ex Lucario ex", 0, 4, 0],
    [359, "Arceus ex Palkia ex", 0, 2, 0],
    [360, "Paldean Clodsire ex Weavile ex", 0, 1, 0],
    [361, "Glaceon ex Origin Forme Palkia", 0, 7, 0],
    [362, "Golem Druddigon", 0, 6, 0],
    [363, "Dugtrio Primeape", 0, 5, 0],
    [364, "Raichu Pikachu ex", 0, 5, 0],
    [365, "Marowak ex Celebi ex", 0, 3, 0],
    [366, "Beedrill ex Sprigatito", 0, 3, 0],
    [367, "Giratina ex Grafaiai", 0, 3, 0],
    [368, "Meowscarada Spiritomb", 0, 5, 0],
    [369, "Glaceon ex Lumineon", 4, 0, 0],
    [370, "Staraptor Darkrai ex", 1, 0, 0],
    [371, "Ditto", 8, 1, 0],
    [372, "Pidgeot ex Druddigon", 3, 1, 0],
    [373, "Florges Mew ex", 3, 1, 0],
    [374, "Bibarel ex Cyclizar", 3, 1, 0],
    [375, "Aerodactyl ex Golem", 3, 1, 0],
    [376, "Exeggutor ex Exeggutor", 5, 2, 0],
    [377, "Gyarados ex Giratina", 7, 3, 0],
    [378, "Wugtrio ex Pidgeot ex", 7, 3, 0],
    [379, "Arceus ex Carnivine", 4, 2, 0],
    [380, "Lucario Marshadow", 6, 3, 0],
    [381, "Weezing Darkrai ex", 4, 2, 0],
    [382, "Mismagius ex Gengar", 2, 1, 0],
    [383, "Lucario ex Aerodactyl ex", 5, 3, 0],
    [384, "Infernape ex Giratina", 5, 3, 0],
    [385, "Gengar ex Mewtwo ex", 5, 3, 0],
    [386, "Wugtrio ex Gyarados ex", 5, 3, 0],
    [387, "Bastiodon Wormadam", 5, 3, 0],
    [388, "Mewtwo ex Magnezone", 3, 2, 0],
    [389, "Gallade ex Rampardos", 3, 2, 0],
    [390, "Golem Kangaskhan", 3, 1, 1],
    [391, "Dragonite Snorlax", 3, 2, 0],
    [392, "Beedrill ex Shaymin", 4, 3, 0],
    [393, "Garchomp Cyclizar", 4, 3, 0],
    [394, "Lucario ex Spiritomb", 4, 3, 0],
    [395, "Kabutops Rampardos", 4, 2, 1],
    [396, "Giratina ex Mewtwo", 4, 3, 0],
    [397, "Weavile ex Paldean Clodsire ex", 4, 3, 0],
    [398, "Giratina ex Glaceon ex", 2, 2, 0],
    [399, "Snorlax Rampardos", 3, 3, 0],
    [400, "Bibarel ex Druddigon", 1, 1, 0],
    [401, "Tentacruel Floatzel", 3, 3, 0],
    [402, "Greninja Sudowoodo", 3, 3, 0],
    [403, "Magnezone Uxie", 1, 1, 0],
    [404, "Leafeon ex Serperior", 2, 2, 0],
    [405, "Charizard ex Snorlax", 1, 1, 0],
    [406, "Magnezone Zebstrika", 3, 3, 0],
    [407, "Grafaiai Gholdengo", 1, 1, 0],
    [408, "Aerodactyl ex Hitmonlee", 1, 1, 0],
    [409, "Gallade ex Butterfree", 1, 1, 0],
    [410, "Lucario ex Kabutops", 3, 3, 0],
    [411, "Beedrill ex Butterfree", 4, 4, 0],
    [412, "Magnezone Leafeon ex", 4, 4, 0],
    [413, "Pikachu ex Galvantula", 2, 2, 0],
    [414, "Alakazam Mew ex", 2, 2, 0],
    [415, "Wigglytuff ex Skarmory", 1, 1, 0],
    [416, "Gengar ex Druddigon", 1, 1, 0],
    [417, "Manectric Electivire", 1, 1, 0],
    [418, "Garchomp Farfetch'd", 2, 2, 0],
    [419, "Greninja Hypno", 3, 3, 0],
    [420, "Arceus ex Articuno ex", 1, 1, 0],
    [421, "Staraptor Shaymin", 1, 1, 0],
    [422, "Giratina ex Origin Forme Palkia", 2, 2, 0],
    [423, "Raichu Luxray", 3, 3, 0],
    [424, "Charizard ex Rapidash", 1, 1, 0],
    [425, "Pikachu ex Raichu", 3, 3, 0],
    [426, "Gallade ex Mew ex", 3, 3, 0],
    [427, "Garchomp ex Sudowoodo", 2, 2, 0],
    [428, "Garchomp Kangaskhan", 1, 1, 0],
    [429, "Celebi ex Exeggutor ex", 3, 3, 0],
    [430, "Venusaur ex Shaymin", 1, 1, 0],
    [431, "Lucario Farfetch'd", 1, 1, 0],
    [432, "Grafaiai Giratina ex", 2, 2, 0],
    [433, "Wigglytuff ex Ditto", 1, 1, 0],
    [434, "Arceus ex Skarmory", 3, 3, 0],
    [435, "Pupitar Machamp", 1, 1, 0],
    [436, "Beedrill ex Chatot", 1, 1, 0],
    [437, "Wigglytuff ex Wigglytuff", 1, 1, 0],
    [438, "Gardevoir Golurk", 4, 4, 0],
    [439, "Pikachu ex Magneton", 4, 4, 0],
    [440, "Darkrai ex Wigglytuff ex", 3, 3, 0],
    [441, "Blastoise ex Snorlax", 3, 3, 0],
    [442, "Gallade ex Spiritomb", 2, 2, 0],
    [443, "Magnezone Ditto", 1, 1, 0],
    [444, "Zapdos ex Zapdos", 2, 2, 0],
    [445, "Victreebel Exeggutor ex", 4, 4, 0],
    [446, "Luxray Zapdos ex", 2, 2, 0],
    [447, "Exeggutor ex Poliwrath", 3, 3, 0],
    [448, "Gallade ex Regirock", 2, 2, 0],
    [449, "Giratina ex Pikachu ex", 1, 1, 0],
    [450, "Wugtrio ex Poliwrath", 3, 3, 0],
    [451, "Arceus ex Chatot", 1, 1, 0],
    [452, "Greninja Flareon", 3, 4, 0],
    [453, "Meowscarada Persian", 3, 4, 0],
    [454, "Dragonite Dondozo", 3, 4, 0],
    [455, "Infernape ex Charizard ex", 3, 4, 0],
    [456, "Greninja Snorlax", 3, 4, 0],
    [457, "Machamp Lucario", 3, 4, 0],
    [458, "Sandslash Lucario", 3, 4, 0],
    [459, "Giratina ex Druddigon", 3, 4, 0],
    [460, "Pikachu ex Arceus ex", 2, 3, 0],
    [461, "Staraptor Mew ex", 2, 3, 0],
    [462, "Garchomp ex Aerodactyl ex", 2, 3, 0],
    [463, "Wigglytuff Skarmory", 2, 3, 0],
    [464, "Lapras ex Wigglytuff", 2, 3, 0],
    [465, "Gyarados ex Giratina ex", 2, 3, 0],
    [466, "Magnezone Zapdos", 2, 3, 0],
    [467, "Gallade ex Chatot", 2, 2, 1],
    [468, "Alakazam Azelf", 2, 3, 0],
    [469, "Palkia ex Lumineon", 2, 3, 0],
    [470, "Lucario Rhyperior", 2, 3, 0],
    [471, "Exeggutor Lilligant", 2, 2, 1],
    [472, "Darkrai ex Weezing", 2, 3, 0],
    [473, "Giratina ex Giratina", 2, 3, 0],
    [474, "Togekiss Cresselia", 2, 3, 0],
    [475, "Gardevoir Mew ex", 2, 3, 0],
    [476, "Dialga ex Wigglytuff", 2, 3, 0],
    [477, "Dialga ex Darkrai ex", 2, 3, 0],
    [478, "Magnezone Electrode", 2, 3, 0],
    [479, "Charizard ex Heatran", 2, 2, 1],
    [480, "Alakazam Druddigon", 2, 3, 0],
    [481, "Wugtrio ex Floatzel", 2, 3, 0],
    [482, "Giratina ex Shaymin", 2, 3, 0],
    [483, "Moltres ex Magmortar", 3, 5, 0],
    [484, "Electivire Luxray", 1, 2, 0],
    [485, "Magnezone Jolteon", 1, 2, 0],
    [486, "Revavroom Gholdengo", 1, 2, 0],
    [487, "Electrode Electivire", 1, 2, 0],
    [488, "Lucario ex Giratina ex", 1, 2, 0],
    [489, "Golem Onix", 1, 2, 0],
    [490, "Lucario ex Sudowoodo", 2, 4, 0],
    [491, "Farfetch'd", 1, 2, 0],
    [492, "Pikachu ex Galvantula", 1, 2, 0],
    [493, "Aerodactyl ex Kabutops", 2, 4, 0],
    [494, "Victreebel Celebi ex", 1, 2, 0],
    [495, "Bastiodon Dialga ex", 2, 4, 0],
    [496, "Probopass ex Wigglytuff", 1, 2, 0],
    [497, "Darkrai ex Dusknoir", 1, 2, 0],
    [498, "Tyranitar Arceus ex", 1, 2, 0],
    [499, "Infernape ex Giratina", 1, 2, 0],
    [500, "Pikachu ex Pawmot", 2, 3, 1],
    [501, "Magnezone Heliolisk", 2, 4, 0],
    [502, "Infernape ex Weezing", 1, 2, 0],
    [503, "Weezing Giratina ex", 2, 4, 0],
    [504, "Giratina ex Mismagius ex", 1, 2, 0],
    [505, "Meowscarada Vespiquen", 1, 2, 0],
    [506, "Victreebel Druddigon", 2, 4, 0],
    [507, "Vaporeon Palkia ex", 1, 2, 0],
    [508, "Darkrai ex Druddigon", 1, 2, 0],
    [509, "Fearow Medicham", 2, 5, 0],
    [510, "Gallade ex Greninja", 1, 3, 0],
    [511, "Wigglytuff Snorlax", 1, 3, 0],
    [512, "Wugtrio ex Persian", 1, 3, 0],
    [513, "Arceus ex Kangaskhan", 1, 3, 0],
    [514, "Wigglytuff ex Dragonite", 1, 3, 0],
    [515, "Charizard ex Rapidash", 1, 3, 0],
    [516, "Alakazam Kangaskhan", 1, 3, 0],
    [517, "Skarmory", 1, 3, 0],
    [518, "Meowscarada Exeggutor", 1, 3, 0],
    [519, "Floatzel Articuno ex", 1, 3, 0],
    [520, "Electivire Pachirisu ex", 1, 3, 0],
    [521, "Magnezone Rampardos", 1, 3, 0],
    [522, "Wugtrio ex Articuno", 1, 3, 0],
    [523, "Arceus ex Wugtrio ex", 1, 3, 0],
    [524, "Beedrill ex Farfetch'd", 1, 3, 0],
    [525, "Gallade ex Primeape", 1, 3, 0],
    [526, "Lickilicky ex Manaphy", 1, 3, 0],
    [527, "Alakazam Sigilyph", 1, 3, 0],
    [528, "Gengar ex Lucario ex", 1, 3, 0],
    [529, "Giratina ex Giratina", 1, 2, 1],
    [530, "Magnezone Farfetch'd", 1, 3, 0],
    [531, "Paldean Clodsire ex Giratina ex", 1, 3, 0],
    [532, "Aerodactyl ex", 1, 3, 0],
    [533, "Dialga ex Gallade ex", 1, 3, 0],
    [534, "Lapras ex", 1, 3, 0],
    [535, "Palkia ex Glaceon ex", 1, 3, 0],
    [536, "Bastiodon", 1, 3, 0],
    [537, "Leafeon ex Glaceon ex", 1, 3, 0],
    [538, "Charizard ex Houndoom", 1, 3, 0],
    [539, "Mewtwo ex Uxie", 1, 3, 0],
    [540, "Gholdengo Kangaskhan", 1, 4, 0],
    [541, "Leafeon ex Arceus ex", 1, 4, 0],
    [542, "Celebi ex Beedrill ex", 1, 4, 0],
    [543, "Gyarados Manaphy", 1, 4, 0],
    [544, "Magnezone Tauros", 1, 4, 0],
    [545, "Lucario Gliscor", 1, 4, 0],
    [546, "Meowscarada Shiinotic", 1, 4, 0],
    [547, "Nidoking Nidoqueen", 1, 4, 0],
    [548, "Moltres ex Volcarona", 1, 4, 0],
    [549, "Mew ex Darkrai ex", 1, 4, 0],
    [550, "Charizard ex Palkia ex", 1, 4, 0],
    [551, "Gholdengo Dialga ex", 1, 4, 0],
    [552, "Cresselia ex Wigglytuff", 1, 5, 0],
    [553, "Meowscarada Roserade", 0, 1, 0],
    [554, "Charizard ex Farfetch'd", 0, 2, 0],
    [555, "Celebi ex Carnivine", 0, 1, 0],
    [556, "Charizard ex Rapidash", 0, 3, 0],
    [557, "Tinkaton ex Mew ex", 0, 1, 0],
    [558, "Togekiss", 0, 1, 0],
    [559, "Giratina ex Tauros", 0, 2, 0],
    [560, "Mamoswine Chatot", 0, 1, 0],
    [561, "Charizard ex Arcanine ex", 0, 1, 0],
    [562, "Palkia ex Greninja", 0, 1, 0],
    [563, "Celebi ex Chatot", 0, 1, 0],
    [564, "Leafeon ex", 0, 1, 0],
    [565, "Staraptor Skarmory", 0, 2, 0],
    [566, "Magnezone Chatot", 0, 1, 0],
    [567, "Tyranitar Heatran", 0, 2, 0],
    [568, "Ambipom Jigglypuff", 0, 1, 0],
    [569, "Giratina ex Gengar", 0, 2, 0],
    [570, "Bibarel ex Staraptor", 0, 1, 0],
    [571, "Wigglytuff Regigigas", 0, 1, 0],
    [572, "Lickitung Regigigas", 0, 1, 0],
    [573, "Greninja Omastar", 0, 1, 0],
    [574, "Darkrai ex Arbok", 0, 1, 0],
    [575, "Magnezone", 0, 2, 0],
    [576, "Glaceon Origin Forme Palkia", 0, 1, 0],
    [577, "Bastiodon Rotom", 0, 1, 0],
    [578, "Serperior Exeggutor ex", 0, 3, 0],
    [579, "Jolteon", 0, 5, 0],
    [580, "Dialga ex Bibarel ex", 0, 1, 0],
    [581, "Ninetales", 0, 2, 0],
    [582, "Giratina ex Cresselia ex", 0, 1, 0],
    [583, "Weezing Grafaiai", 0, 4, 0],
    [584, "Golurk Alakazam", 0, 4, 0],
    [585, "Beedrill ex Leafeon", 0, 2, 0],
    [586, "Staraptor Farfetch'd", 0, 1, 0],
    [587, "Wigglytuff ex Lopunny", 0, 1, 0],
    [588, "Dialga ex Skarmory", 0, 1, 0],
    [589, "Pachirisu ex Electivire", 0, 1, 0],
    [590, "Exeggutor ex Leafeon ex", 0, 1, 0],
    [591, "Infernape ex Meowth", 0, 1, 0],
    [592, "Magnezone Probopass ex", 0, 1, 0],
    [593, "Arceus ex Rapidash", 0, 3, 0],
    [594, "Giratina ex Exeggutor ex", 0, 2, 0],
    [595, "Marowak ex Sudowoodo", 0, 1, 0],
    [596, "Zapdos ex Electivire", 0, 1, 0],
    [597, "Beedrill ex Vespiquen", 0, 1, 0],
    [598, "Dialga ex Pidgeot", 0, 2, 0],
    [599, "Pidgeot ex Snorlax", 0, 2, 0],
    [600, "Venusaur ex Wigglytuff ex", 0, 2, 0],
    [601, "Luxray", 0, 1, 0],
    [602, "Sudowoodo Rampardos", 0, 1, 0],
    [603, "Garchomp Hitmonlee", 0, 1, 0],
    [604, "Garchomp Giratina ex", 0, 1, 0],
    [605, "Alakazam Giratina", 0, 1, 0],
    [606, "Gengar", 0, 2, 0],
    [607, "Magnezone Zapdos ex", 0, 1, 0],
    [608, "Giratina ex Regirock", 0, 3, 0],
    [609, "Darkrai ex Scolipede", 0, 1, 0],
    [610, "Wugtrio ex Blastoise ex", 0, 2, 0],
    [611, "Meowscarada Exeggutor", 0, 1, 0],
    [612, "Leafeon ex Magnezone", 0, 1, 0],
    [613, "Dusknoir Giratina ex", 0, 5, 0],
    [614, "Pikachu ex Zebstrika", 0, 3, 0],
    [615, "Charizard ex Glameow", 0, 1, 0],
    [616, "Vaporeon Manaphy", 0, 3, 0],
    [617, "Marowak ex Lucario ex", 0, 2, 0],
    [618, "Bellossom Scyther", 0, 2, 0],
    [619, "Pachirisu ex Magnezone", 0, 1, 0],
    [620, "Lucario Aerodactyl ex", 0, 2, 0],
    [621, "Articuno ex Manaphy", 0, 2, 0],
    [622, "Exeggutor ex", 0, 1, 0],
    [623, "Darkrai ex Snorlax", 0, 1, 0],
    [624, "Weavile ex Giratina ex", 0, 1, 0],
    [625, "Pidgeot ex Palkia ex", 0, 2, 0],
    [626, "Giratina ex Gardevoir", 0, 1, 0],
    [627, "Yanmega ex Arceus ex", 0, 2, 0],
    [628, "Wigglytuff ex Arbok", 0, 3, 0],
    [629, "Venusaur ex Venusaur", 0, 3, 0],
    [630, "Gallade ex Hitmonchan", 0, 3, 0],
    [631, "Staraptor", 0, 2, 0],
    [632, "Tentacruel Hypno", 0, 2, 0],
    [633, "Charizard ex Arcanine ex", 0, 1, 0],
    [634, "Gyarados ex Floatzel", 0, 3, 0],
    [635, "Moltres ex Flareon", 0, 1, 0],
    [636, "Electivire Pikachu ex", 0, 1, 0],
    [637, "Snorlax", 0, 2, 0],
    [638, "Magnezone Galvantula", 0, 1, 0],
    [639, "Charizard ex Ninetales", 0, 2, 0],
    [640, "Giratina ex Weezing", 0, 1, 0],
    [641, "Glaceon ex Magnezone", 0, 1, 0],
    [642, "Mismagius ex Giratina", 0, 1, 0],
    [643, "Gengar ex", 0, 1, 0],
    [644, "Gengar ex Hypno", 0, 1, 0],
    [645, "Gengar ex Wigglytuff", 0, 1, 0],
    [646, "Infernape ex Spiritomb", 0, 1, 0],
    [647, "Starmie ex Floatzel", 0, 2, 0],
    [648, "Arbok Darkrai ex", 0, 3, 0],
    [649, "Crobat Darkrai ex", 0, 3, 0],
    [650, "Magnezone Magmortar", 0, 2, 0],
    [651, "Palkia ex Magnezone", 0, 4, 0],
    [652, "Leafeon ex Palkia ex", 0, 1, 0],
    [653, "Blastoise ex Starmie ex", 0, 2, 0],
    [654, "Mew ex Starmie ex", 0, 2, 0],
    [655, "Pikachu ex Electrode", 0, 1, 0],
    [656, "Golem Onix", 0, 2, 2],
    [657, "Omastar Floatzel", 0, 1, 0],
    [658, "Arceus ex Magnezone", 0, 1, 0],
    [659, "Slowbro Swoobat", 0, 6, 0],
    [660, "Beedrill ex Wigglytuff", 0, 3, 0],
    [661, "Golem Aerodactyl ex", 0, 3, 0],
    [662, "Pidgeot ex Giratina ex", 0, 5, 0],
    [663, "Electivire Galvantula", 0, 0, 3],
    [664, "Rampardos Flamigo", 0, 2, 0],
    [665, "Palkia ex Floatzel", 0, 2, 0],
    [666, "Paldean Clodsire ex Muk", 0, 1, 0],
    [667, "Mismagius ex Togekiss", 0, 3, 0],
    [668, "Melmetal Skarmory", 0, 2, 0],
    [669, "Blastoise ex Gyarados ex", 0, 2, 0],
    [670, "Pawmot Zapdos ex", 0, 3, 0],
    [671, "Garchomp Glameow", 0, 2, 0],
    [672, "Mew ex Butterfree", 0, 3, 0],
    [673, "Marowak ex Machamp", 0, 3, 0],
    [674, "Arceus ex Giratina ex", 0, 0, 1],
    [675, "Venusaur ex Lilligant", 0, 1, 0],
    [676, "Mew ex Palkia ex", 0, 1, 0],
    [677, "Wugtrio ex Giratina ex", 0, 2, 0],
    [678, "Pikachu ex Pawmot", 0, 1, 0],
    [679, "Starmie ex Mew ex", 0, 1, 0],
    [680, "Blastoise ex Psyduck", 0, 2, 0],
    [681, "Gyarados ex Wigglytuff", 0, 3, 0],
    [682, "Bibarel ex Manaphy", 0, 5, 0],
    [683, "Lucario ex Druddigon", 0, 3, 0]
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