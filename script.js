const data = [
  [1, "Exeggutor ex Celebi ex", 15010, 12323, 300],
  [2, "Darkrai ex Magnezone", 11603, 9397, 215],
  [3, "Charizard ex Moltres ex", 7530, 7881, 134],
  [4, "Darkrai ex Greninja", 5399, 4538, 104],
  [5, "Gyarados ex Greninja", 4161, 4291, 67],
  [6, "Palkia ex Vaporeon", 4241, 4059, 67],
  [7, "Magnezone Skarmory", 4602, 3972, 62],
  [8, "Weavile ex Darkrai ex", 3138, 2989, 45],
  [9, "Magnezone Hitmonlee", 2499, 2224, 35],
  [10, "Exeggutor ex Mew ex", 2356, 2011, 52],
  [11, "Pachirisu ex", 2094, 1900, 28],
  [12, "Yanmega ex Dialga ex", 1764, 1618, 25],
  [13, "Exeggutor ex Yanmega ex", 1728, 1654, 32],
  [14, "Mewtwo ex Gardevoir", 1051, 1520, 31],
  [15, "Rampardos Lucario", 1308, 1180, 20],
  [16, "Infernape ex Moltres ex", 969, 1131, 9],
  [17, "Dialga ex Melmetal", 937, 1098, 20],
  [18, "Celebi ex Serperior", 830, 1090, 12],
  [19, "Darkrai ex Weezing", 874, 915, 16],
  [20, "Gallade ex Lucario", 650, 792, 4],
  [21, "Bastiodon Skarmory", 679, 646, 5],
  [22, "Pikachu ex Zebstrika", 508, 633, 10],
  [23, "Pikachu ex Pachirisu ex", 633, 652, 14],
  [24, "Starmie ex Palkia ex", 624, 684, 5],
  [25, "Articuno ex Palkia ex", 623, 607, 11],
  [26, "Gallade ex Hitmonlee", 508, 567, 16],
  [27, "Magnezone Mew ex", 525, 527, 7],
  [28, "Articuno ex", 567, 505, 4],
  [29, "Aerodactyl ex Lucario", 499, 503, 6],
  [30, "Lickilicky ex Dialga ex", 388, 470, 2],
  [31, "Magnezone Darkrai ex", 488, 465, 9],
  [32, "Palkia ex Greninja", 453, 426, 4],
  [33, "Wormadam Skarmory", 389, 410, 7],
  [34, "Pikachu ex Zapdos ex", 325, 385, 16],
  [35, "Palkia ex Articuno ex", 402, 345, 7],
  [36, "Magnezone Electivire", 298, 334, 3],
  [37, "Gyarados ex Vaporeon", 258, 319, 3],
  [38, "Primeape Lucario", 311, 310, 2],
  [39, "Mew ex Dialga ex", 232, 305, 1],
  [40, "Starmie ex Articuno ex", 278, 306, 1],
  [41, "Magnezone Greninja", 296, 248, 3],
  [42, "Garchomp Druddigon", 182, 273, 3],
  [43, "Luxray Electivire", 226, 265, 5],
  [44, "Rampardos Hitmonlee", 337, 281, 8],
  [45, "Pidgeot ex Dialga ex", 181, 264, 3],
  [46, "Gyarados ex Palkia ex", 236, 253, 1],
  [47, "Aerodactyl ex Rampardos", 229, 253, 4],
  [48, "Arcanine ex Moltres ex", 140, 208, 4],
  [49, "Palkia ex Magnezone", 238, 222, 1],
  [50, "Darkrai ex Weavile ex", 177, 220, 0],
  [51, "Garchomp", 199, 259, 1],
  [52, "Marowak ex Lucario", 182, 233, 4],
  [53, "Charizard ex Arcanine ex", 151, 214, 4],
  [54, "Dragonite Druddigon", 125, 188, 2],
  [55, "Exeggutor ex Magnezone", 162, 222, 4],
  [56, "Mismagius ex Mew ex", 166, 206, 0],
  [57, "Wigglytuff ex Dialga ex", 135, 196, 2],
  [58, "Togekiss Mew ex", 129, 191, 0],
  [59, "Kabutops Lucario", 136, 189, 5],
  [60, "Machamp ex Lucario", 136, 199, 0],
  [61, "Mismagius ex Togekiss", 115, 184, 0],
  [62, "Infernape ex", 135, 180, 2],
  [63, "Pachirisu ex Magnezone", 154, 166, 2],
  [64, "Magnezone Zapdos ex", 145, 169, 0],
  [65, "Infernape ex Giratina", 116, 153, 0],
  [66, "Yanmega ex Mew ex", 131, 159, 1],
  [67, "Ninetales Rapidash", 126, 164, 3],
  [68, "Scolipede Weezing", 99, 157, 3],
  [69, "Dialga ex Bastiodon", 115, 145, 3],
  [70, "Togekiss Sigilyph", 96, 153, 1],
  [71, "Magnezone Mewtwo ex", 154, 134, 2],
  [72, "Dialga ex Mew ex", 121, 161, 0],
  [73, "Dialga ex Yanmega ex", 127, 147, 1],
  [74, "Venusaur ex Exeggutor ex", 112, 142, 1],
  [75, "Blastoise ex Palkia ex", 96, 134, 3],
  [76, "Weavile ex Weezing", 91, 135, 3],
  [77, "Articuno ex Vaporeon", 128, 140, 0],
  [78, "Venusaur ex Shaymin", 85, 130, 4],
  [79, "Ninetales Rapidash", 93, 119, 1],
  [80, "Dragonite Magnezone", 102, 112, 0],
  [81, "Aerodactyl ex Farfetch'd", 118, 120, 0],
  [82, "Weezing Darkrai ex", 90, 123, 8],
  [83, "Starmie ex Lumineon", 79, 121, 0],
  [84, "Gyarados ex Articuno ex", 67, 99, 4],
  [85, "Golem Druddigon", 74, 121, 1],
  [86, "Greninja Gyarados ex", 89, 106, 1],
  [87, "Infernape ex Spiritomb", 87, 109, 2],
  [88, "Pachirisu ex Zapdos ex", 124, 95, 3],
  [89, "Magnezone Druddigon", 103, 100, 1],
  [90, "Greninja Darkrai ex", 100, 113, 2],
  [91, "Dialga ex Lickilicky ex", 50, 106, 1],
  [92, "Mismagius ex Magnezone", 115, 98, 2],
  [93, "Primeape Lucario", 91, 109, 2],
  [94, "Yanmega ex Skarmory", 112, 102, 5],
  [95, "Greninja Mew ex", 72, 87, 4],
  [96, "Starmie ex Gyarados ex", 81, 111, 2],
  [97, "Pikachu ex Raichu", 52, 96, 0],
  [98, "Zapdos ex Magnezone", 98, 96, 2],
  [99, "Magnezone Marshadow", 75, 91, 0],
  [100, "Yanmega ex Magnezone", 62, 80, 0],
  [101, "Gallade ex", 92, 93, 0],
  [102, "Darkrai ex Arbok", 92, 96, 2],
  [103, "Dialga ex Skarmory", 96, 106, 0],
  [104, "Garchomp Kangaskhan", 65, 78, 0],
  [105, "Vaporeon Articuno ex", 81, 96, 3],
  [106, "Palkia ex", 105, 89, 0],
  [107, "Greninja Druddigon", 79, 93, 0],
  [108, "Garchomp Aerodactyl ex", 67, 79, 0],
  [109, "Garchomp Greninja", 56, 82, 2],
  [110, "Garchomp Glameow", 50, 78, 0],
  [111, "Infernape ex Heatmor", 68, 75, 0],
  [112, "Pachirisu ex Luxray", 73, 78, 3],
  [113, "Dialga ex Magnezone", 78, 95, 3],
  [114, "Celebi ex Exeggutor ex", 38, 80, 0],
  [115, "Palkia ex Gyarados ex", 93, 90, 3],
  [116, "Magnezone Ninetales", 79, 82, 1],
  [117, "Togekiss", 42, 69, 0],
  [118, "Pikachu ex", 27, 62, 0],
  [119, "Magnezone Farfetch'd", 81, 70, 3],
  [120, "Darkrai ex Farfetch'd", 64, 70, 1],
  [121, "Venusaur ex Butterfree", 38, 76, 1],
  [122, "Palkia ex Empoleon", 57, 76, 1],
  [123, "Zapdos ex Pachirisu ex", 57, 83, 1],
  [124, "Pidgeot ex Pidgeot", 47, 76, 0],
  [125, "Darkrai ex Scolipede", 47, 79, 0],
  [126, "Greninja Tauros", 60, 58, 1],
  [127, "Machamp ex", 66, 71, 3],
  [128, "Garchomp Farfetch'd", 64, 75, 0],
  [129, "Lucario Hitmonlee", 68, 65, 0],
  [130, "Aerodactyl ex Primeape", 48, 63, 0],
  [131, "Lucario Hitmonchan", 47, 66, 0],
  [132, "Victreebel Vespiquen", 41, 59, 1],
  [133, "Uxie Mesprit", 24, 50, 0],
  [134, "Exeggutor ex Serperior", 64, 63, 0],
  [135, "Exeggutor ex Venusaur ex", 58, 58, 0],
  [136, "Pachirisu ex Zebstrika", 61, 69, 0],
  [137, "Greninja Farfetch'd", 51, 58, 1],
  [138, "Lucario Rampardos", 67, 58, 0],
  [139, "Arbok Weezing", 53, 60, 2],
  [140, "Gallade ex Mew ex", 40, 54, 0],
  [141, "Articuno ex Greninja", 42, 64, 1],
  [142, "Lickilicky ex Greninja", 59, 64, 1],
  [143, "Golem Lucario", 28, 63, 2],
  [144, "Infernape ex Farfetch'd", 50, 58, 0],
  [145, "Garchomp Mew ex", 38, 59, 0],
  [146, "Exeggutor ex Victreebel", 40, 69, 1],
  [147, "Rampardos Farfetch'd", 43, 48, 0],
  [148, "Yanmega ex Greninja", 45, 56, 1],
  [149, "Starmie ex Greninja", 21, 41, 3],
  [150, "Magnezone Jolteon", 47, 49, 0],
  [151, "Magnezone Kangaskhan", 37, 43, 0],
  [152, "Pidgeot ex Mew ex", 38, 51, 1],
  [153, "Moltres ex Centiskorch", 37, 51, 1],
  [154, "Mewtwo ex Magnezone", 34, 50, 1],
  [155, "Gyarados ex Manaphy", 33, 53, 0],
  [156, "Gardevoir Mewtwo ex", 39, 64, 0],
  [157, "Darkrai ex Kangaskhan", 61, 40, 2],
  [158, "Articuno ex Magnezone", 40, 40, 1],
  [159, "Luxray Zebstrika", 45, 48, 0],
  [160, "Exeggutor ex Greninja", 36, 44, 0],
  [161, "Infernape ex Rapidash", 37, 49, 2],
  [162, "Togekiss Giratina", 32, 54, 0],
  [163, "Gyarados ex Mew ex", 23, 45, 0],
  [164, "Gengar ex Dusknoir", 19, 45, 1],
  [165, "Palkia ex Starmie ex", 44, 44, 1],
  [166, "Infernape ex Magnezone", 40, 49, 0],
  [167, "Yanmega ex Lumineon", 29, 50, 0],
  [168, "Blastoise ex Manaphy", 24, 42, 0],
  [169, "Gengar ex Mew ex", 24, 49, 1],
  [170, "Cresselia ex Gardevoir", 16, 46, 3],
  [171, "Magnezone", 50, 36, 4],
  [172, "Gyarados ex Druddigon", 50, 40, 1],
  [173, "Darkrai ex Lopunny", 55, 45, 1],
  [174, "Kabutops Rampardos", 49, 50, 0],
  [175, "Infernape ex Rapidash", 29, 37, 0],
  [176, "Mewtwo ex Mew ex", 20, 41, 1],
  [177, "Garchomp Spiritomb", 41, 42, 1],
  [178, "Gengar ex Mismagius ex", 31, 43, 0],
  [179, "Wigglytuff ex Yanmega ex", 32, 46, 0],
  [180, "Greninja Palkia ex", 29, 42, 0],
  [181, "Mew ex Darkrai ex", 21, 36, 0],
  [182, "Mismagius ex Florges", 29, 50, 0],
  [183, "Mew ex Togekiss", 16, 38, 1],
  [184, "Zapdos ex Luxray", 40, 45, 2],
  [185, "Marowak ex Aerodactyl ex", 32, 41, 0],
  [186, "Exeggutor ex Exeggutor", 33, 45, 1],
  [187, "Mew ex Garchomp", 33, 46, 0],
  [188, "Infernape ex Chatot", 27, 42, 0],
  [189, "Melmetal Dialga ex", 27, 46, 2],
  [190, "Darkrai ex Spiritomb", 45, 34, 2],
  [191, "Magnezone Exeggutor", 42, 42, 1],
  [192, "Infernape ex Magcargo", 36, 38, 0],
  [193, "Gyarados ex Frost Rotom", 33, 35, 0],
  [194, "Darkrai ex Druddigon", 32, 44, 0],
  [195, "Dialga ex Wigglytuff ex", 29, 38, 2],
  [196, "Magnezone Dialga ex", 16, 27, 3],
  [197, "Magnezone Rampardos", 60, 36, 1],
  [198, "Starmie ex Magnezone", 32, 27, 0],
  [199, "Exeggutor ex Leafeon", 34, 33, 1],
  [200, "Garchomp Giratina", 33, 34, 0],
  [201, "Darkrai ex Honchkrow", 29, 34, 0],
  [202, "Marowak ex Rampardos", 29, 37, 1],
  [203, "Rampardos Aerodactyl ex", 32, 44, 0],
  [204, "Serperior Exeggutor ex", 29, 41, 0],
  [205, "Dialga ex Porygon-Z", 30, 42, 1],
  [206, "Celebi ex", 20, 35, 0],
  [207, "Gallade ex Aerodactyl ex", 19, 35, 0],
  [208, "Pikachu ex Electrode", 20, 38, 1],
  [209, "Venusaur ex", 20, 39, 0],
  [210, "Exeggutor ex Butterfree", 12, 26, 0],
  [211, "Golem", 16, 37, 0],
  [212, "Dragonite Magneton", 14, 39, 0],
  [213, "Mew ex Hypno", 4, 30, 1],
  [214, "Yanmega ex Exeggutor ex", 38, 39, 0],
  [215, "Blastoise ex Druddigon", 36, 37, 1],
  [216, "Aerodactyl ex Pidgeot", 22, 27, 1],
  [217, "Blastoise ex Blastoise", 24, 38, 0],
  [218, "Exeggutor ex Darkrai ex", 17, 29, 0],
  [219, "Gallade ex Farfetch'd", 17, 28, 1],
  [220, "Aerodactyl ex Hitmonlee", 19, 36, 0],
  [221, "Pidgeot ex Druddigon", 14, 32, 0],
  [222, "Infernape ex Dodrio", 13, 30, 1],
  [223, "Melmetal Mew ex", 14, 34, 1],
  [224, "Lucario Aerodactyl ex", 34, 29, 0],
  [225, "Gyarados ex Gyarados", 32, 29, 0],
  [226, "Wormadam Mew ex", 26, 31, 0],
  [227, "Starmie ex Lumineon", 20, 30, 0],
  [228, "Togekiss Mismagius ex", 16, 29, 0],
  [229, "Mew ex Uxie", 11, 30, 0],
  [230, "Venusaur ex Celebi ex", 13, 36, 1],
  [231, "Gyarados ex Starmie ex", 7, 28, 0],
  [232, "Aerodactyl ex Magnezone", 26, 22, 1],
  [233, "Farfetch'd Hitmonlee", 21, 25, 0],
  [234, "Infernape ex Mew ex", 17, 24, 0],
  [235, "Dialga ex Golem", 14, 21, 0],
  [236, "Golem Regirock", 16, 27, 0],
  [237, "Dragonite Manaphy", 15, 27, 0],
  [238, "Pachirisu ex Electivire", 16, 30, 0],
  [239, "Exeggutor ex Exeggutor", 10, 20, 0],
  [240, "Gallade ex Hitmonchan", 37, 25, 0],
  [241, "Gallade ex Primeape", 22, 22, 0],
  [242, "Togekiss Azelf", 27, 26, 1],
  [243, "Machamp ex Hitmonlee", 22, 22, 0],
  [244, "Weavile ex Mew ex", 20, 21, 0],
  [245, "Wigglytuff ex Mew ex", 16, 15, 2],
  [246, "Luxray Magnezone", 22, 24, 0],
  [247, "Gyarados ex Magnezone", 18, 23, 0],
  [248, "Magnezone Raichu", 15, 20, 0],
  [249, "Rampardos", 18, 29, 0],
  [250, "Blastoise ex Articuno ex", 14, 22, 1],
  [251, "Lickilicky ex Mew ex", 18, 29, 1],
  [252, "Zebstrika Pikachu ex", 10, 17, 0],
  [253, "Weezing Mew ex", 13, 23, 0],
  [254, "Exeggutor ex", 11, 20, 0],
  [255, "Mew ex Gardevoir", 15, 30, 1],
  [256, "Togekiss Florges", 10, 21, 0],
  [257, "Dragonite Mew ex", 15, 33, 0],
  [258, "Mew ex Weezing", 8, 19, 0],
  [259, "Articuno ex Starmie ex", 8, 21, 1],
  [260, "Golem Hitmonlee", 8, 22, 0],
  [261, "Mew ex Greninja", 7, 21, 0],
  [262, "Gallade ex Marowak ex", 7, 24, 0],
  [263, "Mew ex Magnezone", 6, 22, 0],
  [264, "Magnezone Heatmor", 25, 21, 1],
  [265, "Dragonite", 28, 25, 0],
  [266, "Infernape ex Arcanine ex", 24, 24, 0],
  [267, "Dialga ex Wormadam", 18, 20, 0],
  [268, "Mew ex Dragonite", 15, 19, 0],
  [269, "Dialga ex Probopass", 15, 21, 0],
  [270, "Mismagius ex Mewtwo ex", 15, 21, 0],
  [271, "Dialga ex", 16, 26, 0],
  [272, "Aerodactyl ex Primeape", 12, 24, 0],
  [273, "Starmie ex Vaporeon", 10, 20, 0],
  [274, "Starmie ex Mew ex", 11, 24, 0],
  [275, "Blastoise ex Vaporeon", 9, 22, 0],
  [276, "Melmetal Skarmory", 7, 21, 0],
  [277, "Greninja Articuno ex", 4, 20, 0],
  [278, "Bisharp Skarmory", 3, 21, 1],
  [279, "Rampardos Marshadow", 23, 19, 0],
  [280, "Articuno ex Mew ex", 21, 18, 0],
  [281, "Dugtrio Lucario", 16, 18, 0],
  [282, "Luxray Druddigon", 19, 22, 0],
  [283, "Palkia ex Mew ex", 18, 21, 0],
  [284, "Darkrai ex Mew ex", 18, 22, 0],
  [285, "Yanmega ex Palkia ex", 16, 20, 0],
  [286, "Mismagius ex", 14, 18, 0],
  [287, "Garchomp Chatot", 17, 22, 0],
  [288, "Magnezone Palkia ex", 16, 21, 0],
  [289, "Celebi ex Magnezone", 19, 24, 1],
  [290, "Rampardos Regirock", 14, 18, 1],
  [291, "Greninja Weavile ex", 15, 22, 0],
  [292, "Magnezone Weezing", 13, 20, 1],
  [293, "Dragonite Regirock", 12, 21, 0],
  [294, "Magnezone Pikachu ex", 9, 16, 0],
  [295, "Moltres ex Ninetales", 8, 16, 0],
  [296, "Exeggutor ex Shaymin", 9, 22, 0],
  [297, "Luxray Pachirisu ex", 8, 21, 0],
  [298, "Moltres ex Charizard ex", 7, 22, 0],
  [299, "Mew ex Farfetch'd", 5, 19, 0],
  [300, "Articuno ex Aerodactyl ex", 21, 18, 0],
  [301, "Rhyperior Regirock", 19, 17, 0],
  [302, "Luxray Electrode", 15, 15, 0],
  [303, "Luxray Zapdos ex", 15, 15, 0],
  [304, "Infernape ex Rotom", 13, 14, 0],
  [305, "Electrode Electivire", 15, 17, 0],
  [306, "Scolipede Darkrai ex", 17, 20, 1],
  [307, "Cresselia ex Dusknoir", 11, 13, 1],
  [308, "Pidgeot Skarmory", 14, 20, 0],
  [309, "Sandslash Lucario", 12, 18, 0],
  [310, "Primeape Rampardos", 13, 20, 0],
  [311, "Marowak ex Primeape", 9, 15, 0],
  [312, "Venusaur ex Exeggutor", 7, 13, 0],
  [313, "Serperior Celebi ex", 7, 13, 0],
  [314, "Garchomp Yanmega ex", 9, 17, 0],
  [315, "Starmie ex Yanmega ex", 10, 19, 0],
  [316, "Garchomp Combee", 8, 16, 0],
  [317, "Vaporeon Palkia ex", 9, 19, 0],
  [318, "Lickilicky ex Yanmega ex", 5, 11, 0],
  [319, "Darkrai ex Skuntank", 10, 24, 0],
  [320, "Blastoise ex Mew ex", 6, 15, 0],
  [321, "Infernape ex Druddigon", 8, 20, 1],
  [322, "Golem Marshadow", 6, 15, 1],
  [323, "Venusaur ex Druddigon", 6, 18, 1],
  [324, "Bastiodon Dialga ex", 4, 17, 0],
  [325, "Magnezone Tauros", 24, 17, 0],
  [326, "Magnezone Vespiquen", 17, 15, 0],
  [327, "Lucario", 16, 17, 0],
  [328, "Rhyperior Druddigon", 14, 14, 1],
  [329, "Gyarados ex Lumineon", 10, 11, 0],
  [330, "Weezing Honchkrow", 8, 9, 0],
  [331, "Mew ex Florges", 13, 15, 0],
  [332, "Blastoise ex", 11, 13, 0],
  [333, "Exeggutor ex Venomoth", 11, 13, 0],
  [334, "Wigglytuff ex Exeggutor ex", 10, 12, 0],
  [335, "Darkrai ex", 14, 17, 0],
  [336, "Marowak ex Sandslash", 10, 13, 0],
  [337, "Darkrai ex Muk", 13, 17, 0],
  [338, "Weavile ex Honchkrow", 12, 16, 0],
  [339, "Probopass Dialga ex", 11, 14, 1],
  [340, "Mismagius ex Yanmega ex", 10, 14, 0],
  [341, "Victreebel", 10, 14, 0],
  [342, "Yanmega ex Hitmonlee", 14, 20, 0],
  [343, "Greninja Weezing", 10, 15, 0],
  [344, "Rampardos Onix", 10, 15, 0],
  [345, "Greninja Flareon", 9, 14, 0],
  [346, "Rhyperior", 10, 18, 0],
  [347, "Marowak ex Kabutops", 11, 19, 1],
  [348, "Weavile ex Arbok", 9, 17, 0],
  [349, "Mew ex Alakazam", 10, 19, 0],
  [350, "Magnezone Weavile ex", 10, 18, 1],
  [351, "Wigglytuff ex Greninja", 7, 14, 1],
  [352, "Gallade ex Rampardos", 6, 13, 0],
  [353, "Garchomp Rampardos", 8, 18, 0],
  [354, "Gallade ex Druddigon", 6, 15, 0],
  [355, "Palkia ex Manaphy", 5, 13, 0],
  [356, "Yanmega ex Farfetch'd", 4, 15, 0],
  [357, "Muk Darkrai ex", 3, 14, 0],
  [358, "Pidgeot ex Wigglytuff ex", 20, 13, 0],
  [359, "Greninja Lapras ex", 18, 13, 0],
  [360, "Magnezone Articuno ex", 18, 13, 0],
  [361, "Greninja Kangaskhan", 13, 9, 1],
  [362, "Electivire Zebstrika", 15, 13, 0],
  [363, "Palkia ex Articuno", 16, 14, 0],
  [364, "Skarmory Bastiodon", 11, 10, 0],
  [365, "Gallade ex Chatot", 13, 12, 0],
  [366, "Infernape ex Greninja", 9, 9, 0],
  [367, "Exeggutor ex Aerodactyl ex", 10, 11, 0],
  [368, "Palkia ex Gastrodon", 10, 10, 1],
  [369, "Machamp ex Dugtrio", 16, 18, 0],
  [370, "Starmie ex", 10, 8, 4],
  [371, "Togekiss Dusknoir", 10, 12, 0],
  [372, "Darkrai ex Shaymin", 9, 11, 0],
  [373, "Machamp ex Primeape", 9, 11, 0],
  [374, "Garchomp Purugly", 9, 11, 0],
  [375, "Bisharp Dialga ex", 13, 17, 0],
  [376, "Magnezone Zebstrika", 10, 14, 0],
  [377, "Rapidash Magcargo", 7, 10, 0],
  [378, "Venusaur ex Serperior", 10, 15, 0],
  [379, "Serperior Exeggutor", 9, 12, 2],
  [380, "Rampardos Mew ex", 7, 11, 0],
  [381, "Exeggutor ex Wigglytuff ex", 9, 15, 0],
  [382, "Luxray Glameow", 6, 10, 0],
  [383, "Venusaur ex Mew ex", 6, 10, 0],
  [384, "Primeape Kabutops", 6, 10, 0],
  [385, "Aerodactyl ex Kabutops", 5, 9, 0],
  [386, "Dialga ex Bisharp", 5, 9, 0],
  [387, "Lucario Marshadow", 6, 11, 0],
  [388, "Garchomp Porygon-Z", 7, 13, 0],
  [389, "Zapdos ex", 7, 13, 0],
  [390, "Charizard ex Infernape ex", 8, 15, 0],
  [391, "Aerodactyl ex Garchomp", 4, 8, 0],
  [392, "Pachirisu ex Galvantula", 5, 10, 0],
  [393, "Greninja Infernape ex", 6, 12, 0],
  [394, "Palkia ex Dragonite", 4, 8, 0],
  [395, "Alakazam Mew ex", 8, 15, 1],
  [396, "Alakazam Beheeyem", 4, 9, 0],
  [397, "Yanmega ex Darkrai ex", 6, 14, 0],
  [398, "Alakazam Kangaskhan", 5, 12, 0],
  [399, "Togekiss Druddigon", 4, 10, 0],
  [400, "Empoleon Palkia ex", 4, 10, 0],
  [401, "Gengar ex Gengar", 4, 10, 0],
  [402, "Exeggutor ex Dusknoir", 4, 10, 1],
  [403, "Magnezone Regigigas", 3, 10, 0],
  [404, "Weavile ex Greninja", 3, 11, 0],
  [405, "Scolipede Weavile ex", 3, 11, 0],
  [406, "Greninja Starmie ex", 13, 10, 0],
  [407, "Dugtrio Rampardos", 14, 11, 0],
  [408, "Wigglytuff ex Magnezone", 13, 12, 0],
  [409, "Garchomp Regigigas", 8, 7, 1],
  [410, "Gallade ex Regirock", 13, 13, 0],
  [411, "Greninja Lumineon", 11, 10, 1],
  [412, "Dragonite Glameow", 12, 13, 0],
  [413, "Magnezone Wormadam", 11, 12, 0],
  [414, "Sandslash Rampardos", 11, 12, 0],
  [415, "Omastar Articuno ex", 10, 11, 0],
  [416, "Porygon-Z Dialga ex", 8, 8, 1],
  [417, "Darkrai ex Weezing", 8, 9, 0],
  [418, "Machamp ex Machamp", 7, 8, 0],
  [419, "Magnezone Magcargo", 6, 7, 0],
  [420, "Weavile ex Yanmega ex", 11, 13, 0],
  [421, "Hypno Glaceon", 11, 13, 0],
  [422, "Yanmega ex Magcargo", 5, 6, 0],
  [423, "Gallade ex Meowth", 10, 12, 0],
  [424, "Golem Aerodactyl ex", 10, 12, 0],
  [425, "Blastoise ex Giratina", 8, 10, 0],
  [426, "Mismagius ex Gengar ex", 8, 10, 0],
  [427, "Mew ex Palkia ex", 7, 8, 1],
  [428, "Infernape ex Ninetales", 7, 9, 0],
  [429, "Wigglytuff ex Melmetal", 7, 9, 0],
  [430, "Yanmega ex Manaphy", 10, 13, 0],
  [431, "Gengar Togekiss", 9, 12, 0],
  [432, "Greninja Bruxish", 8, 11, 0],
  [433, "Magnezone Purugly", 5, 7, 0],
  [434, "Dragonite Yanmega ex", 7, 10, 0],
  [435, "Exeggutor ex Lickilicky ex", 7, 10, 0],
  [436, "Magnezone Exeggutor ex", 7, 10, 0],
  [437, "Garchomp Regirock", 9, 13, 0],
  [438, "Machamp ex Primeape", 6, 9, 0],
  [439, "Exeggutor ex Pidgeot ex", 6, 9, 0],
  [440, "Greninja Glaceon", 8, 12, 0],
  [441, "Rampardos Primeape", 8, 12, 0],
  [442, "Exeggutor ex Lilligant", 9, 13, 1],
  [443, "Pidgeot ex Weezing", 7, 11, 0],
  [444, "Mewtwo ex Dusknoir", 5, 8, 0],
  [445, "Venusaur ex Lilligant", 6, 10, 0],
  [446, "Bastiodon Mew ex", 9, 15, 0],
  [447, "Infernape ex Kangaskhan", 6, 10, 0],
  [448, "Palkia ex Mamoswine", 6, 10, 0],
  [449, "Marowak ex Marowak", 4, 7, 0],
  [450, "Pidgeot ex Exeggutor ex", 5, 9, 0],
  [451, "Weavile ex Weezing", 5, 9, 0],
  [452, "Yanmega ex Pachirisu ex", 6, 11, 0],
  [453, "Bibarel Farfetch'd", 6, 11, 0],
  [454, "Togekiss Cresselia", 6, 11, 0],
  [455, "Palkia ex Purugly", 7, 13, 0],
  [456, "Lucario Farfetch'd", 4, 8, 0],
  [457, "Lickilicky ex Manaphy", 4, 8, 0],
  [458, "Garchomp Tauros", 5, 10, 0],
  [459, "Floatzel Piloswine", 7, 14, 0],
  [460, "Celebi ex Beedrill", 5, 10, 0],
  [461, "Mismagius ex Giratina", 7, 14, 0],
  [462, "Dialga ex Butterfree", 6, 13, 0],
  [463, "Moltres ex Magmortar", 4, 9, 0],
  [464, "Moltres ex Magcargo", 4, 9, 0],
  [465, "Magnezone Raichu", 5, 11, 1],
  [466, "Aerodactyl ex Victreebel", 4, 10, 0],
  [467, "Magnezone Pachirisu ex", 3, 8, 0],
  [468, "Magnezone Dragonite", 4, 11, 0],
  [469, "Moltres ex Infernape ex", 5, 14, 0],
  [470, "Weavile ex Spiritomb", 3, 9, 0],
  [471, "Weezing Darkrai ex", 3, 10, 0],
  [472, "Wormadam Farfetch'd", 2, 7, 0],
  [473, "Magnezone Darkrai", 2, 7, 0],
  [474, "Blastoise ex Greninja", 3, 11, 0],
  [475, "Farfetch'd Skarmory", 2, 8, 0],
  [476, "Yanmega ex Primeape", 2, 9, 0],
  [477, "Primeape Rampardos", 2, 10, 0],
  [478, "Magnezone Regirock", 1, 9, 0],
  [479, "Zebstrika Galvantula", 0, 8, 0],
  [480, "Mewtwo ex Mismagius ex", 0, 6, 0],
  [481, "Rapidash Salazzle", 0, 6, 0],
  [482, "Lucario Gliscor", 9, 5, 0],
  [483, "Pachirisu ex Electrode", 5, 3, 0],
  [484, "Magnezone Yanmega ex", 8, 5, 0],
  [485, "Garchomp Magnezone", 14, 9, 0],
  [486, "Machamp ex Druddigon", 8, 6, 0],
  [487, "Palkia ex Giratina", 10, 8, 0],
  [488, "Yanmega ex Celebi ex", 6, 5, 0],
  [489, "Magnezone Wigglytuff ex", 7, 6, 0],
  [490, "Arbok Darkrai ex", 8, 7, 0],
  [491, "Mismagius ex Cresselia ex", 9, 8, 0],
  [492, "Gallade ex Primeape", 9, 8, 0],
  [493, "Golem Shaymin", 9, 8, 0],
  [494, "Mewtwo ex Uxie", 10, 9, 0],
  [495, "Pachirisu ex Rotom", 10, 9, 0],
  [496, "Machamp ex Mew ex", 11, 10, 0],
  [497, "Starmie ex Tentacruel", 13, 12, 0],
  [498, "Gallade ex Spiritomb", 7, 7, 0],
  [499, "Magneton Electivire", 5, 5, 0],
  [500, "Gengar Giratina", 5, 5, 0],
  [501, "Scolipede Weezing", 8, 8, 0],
  [502, "Lucario Primeape", 8, 8, 1],
  [503, "Weavile ex Farfetch'd", 8, 9, 0],
  [504, "Cresselia ex Togekiss", 8, 9, 0],
  [505, "Dragonite Hypno", 7, 8, 0],
  [506, "Gardevoir Uxie", 7, 7, 1],
  [507, "Greninja Wigglytuff ex", 6, 7, 0],
  [508, "Starmie ex Kingler", 6, 7, 0],
  [509, "Dragonite Articuno ex", 6, 7, 0],
  [510, "Wigglytuff ex Wormadam", 6, 7, 0],
  [511, "Mamoswine Articuno ex", 8, 9, 1],
  [512, "Pidgeot ex Darkrai ex", 7, 9, 0],
  [513, "Empoleon Spiritomb", 6, 8, 0],
  [514, "Butterfree Exeggutor ex", 6, 8, 0],
  [515, "Skarmory Melmetal", 6, 8, 0],
  [516, "Nidoking Weezing", 8, 11, 0],
  [517, "Dragonite Greninja", 8, 11, 0],
  [518, "Lucario Hitmontop", 5, 7, 0],
  [519, "Blastoise ex Starmie ex", 5, 7, 0],
  [520, "Charizard ex Rapidash", 7, 10, 0],
  [521, "Luxray Lopunny", 7, 10, 0],
  [522, "Kabutops Farfetch'd", 4, 4, 2],
  [523, "Gallade ex Gardevoir", 6, 9, 0],
  [524, "Rhyperior Hitmonlee", 6, 9, 0],
  [525, "Togekiss Hypno", 4, 6, 0],
  [526, "Greninja Lumineon", 6, 9, 0],
  [527, "Gardevoir Mismagius ex", 6, 9, 0],
  [528, "Celebi ex Dusknoir", 4, 6, 0],
  [529, "Articuno ex Omastar", 5, 8, 0],
  [530, "Magnezone Magmar", 5, 8, 0],
  [531, "Luxray Electrode", 5, 8, 0],
  [532, "Pachirisu ex Raichu", 5, 8, 0],
  [533, "Mamoswine", 6, 10, 0],
  [534, "Pidgeot ex Zebstrika", 6, 10, 0],
  [535, "Magnezone Mismagius ex", 3, 5, 0],
  [536, "Aerodactyl ex Mew ex", 3, 5, 0],
  [537, "Garchomp Meowth", 6, 10, 0],
  [538, "Gyarados ex Dusknoir", 4, 7, 0],
  [539, "Lucario Onix", 4, 7, 0],
  [540, "Wigglytuff ex Weezing", 5, 9, 0],
  [541, "Mewtwo ex Greninja", 2, 4, 0],
  [542, "Weavile ex Bibarel", 5, 10, 0],
  [543, "Togekiss Clefable", 4, 8, 0],
  [544, "Dialga ex Greninja", 5, 10, 0],
  [545, "Serperior Tangrowth", 2, 4, 0],
  [546, "Zapdos ex Mew ex", 5, 10, 1],
  [547, "Machamp ex Marowak ex", 4, 9, 0],
  [548, "Celebi ex Venusaur ex", 4, 9, 0],
  [549, "Blastoise ex Regice", 3, 7, 0],
  [550, "Lucario Kabutops", 3, 7, 0],
  [551, "Articuno ex Dusknoir", 3, 7, 0],
  [552, "Luxray Farfetch'd", 3, 7, 0],
  [553, "Gyarados ex Yanmega ex", 3, 7, 0],
  [554, "Alakazam Florges", 2, 5, 0],
  [555, "Gengar ex", 3, 9, 0],
  [556, "Mew ex Spiritomb", 3, 9, 0],
  [557, "Blastoise ex Kangaskhan", 2, 6, 0],
  [558, "Dragonite Kangaskhan", 2, 6, 0],
  [559, "Mew ex Skarmory", 3, 9, 0],
  [560, "Magnezone Azelf", 2, 6, 0],
  [561, "Magnezone Zapdos", 2, 7, 0],
  [562, "Blastoise ex Lumineon", 2, 7, 0],
  [563, "Venusaur ex Dusknoir", 2, 7, 0],
  [564, "Darkrai ex Nidoking", 3, 11, 0],
  [565, "Darkrai ex Pidgeot", 3, 11, 0],
  [566, "Machamp ex Gallade ex", 2, 8, 0],
  [567, "Pidgeot Sandslash", 2, 8, 0],
  [568, "Gyarados ex Kingler", 2, 8, 0],
  [569, "Aerodactyl ex Golem", 2, 8, 0],
  [570, "Pidgeot ex Farfetch'd", 2, 9, 0],
  [571, "Dialga ex Tauros", 2, 9, 0],
  [572, "Articuno ex Lapras ex", 1, 5, 0],
  [573, "Dragonite Palkia ex", 1, 9, 0],
  [574, "Electivire Magneton", 1, 9, 0],
  [575, "Mew ex Weavile ex", 0, 4, 0],
  [576, "Gengar ex Hypno", 0, 4, 0],
  [577, "Gengar ex Giratina", 0, 6, 0],
  [578, "Scolipede", 0, 3, 0],
  [579, "Victreebel Celebi ex", 0, 8, 0],
  [580, "Muk Weezing", 0, 8, 0],
  [581, "Mew ex Tauros", 6, 3, 0],
  [582, "Zapdos ex Greninja", 10, 5, 0],
  [583, "Yanmega ex Luxray", 9, 5, 0],
  [584, "Darkrai ex Butterfree", 5, 3, 0],
  [585, "Kingler Articuno ex", 10, 6, 0],
  [586, "Weavile ex Magnezone", 8, 5, 0],
  [587, "Garchomp Hitmonlee", 6, 4, 0],
  [588, "Articuno ex Bibarel", 6, 4, 0],
  [589, "Primeape Aerodactyl ex", 7, 5, 0],
  [590, "Infernape ex Meowth", 8, 6, 0],
  [591, "Starmie ex Blastoise ex", 8, 6, 0],
  [592, "Infernape ex Magmortar", 4, 3, 0],
  [593, "Charizard ex Salazzle", 8, 6, 0],
  [594, "Yanmega ex Articuno ex", 4, 3, 0],
  [595, "Golem Magnezone", 4, 3, 0],
  [596, "Raichu Magneton", 9, 7, 0],
  [597, "Charizard ex Ninetales", 9, 7, 0],
  [598, "Pachirisu ex Pikachu ex", 6, 5, 0],
  [599, "Electivire Galvantula", 6, 5, 0],
  [600, "Rampardos Bidoof", 6, 5, 0],
  [601, "Mismagius ex Greninja", 6, 5, 0],
  [602, "Greninja Rapidash", 6, 5, 0],
  [603, "Palkia ex Garchomp", 7, 6, 0],
  [604, "Magnezone Onix", 6, 6, 0],
  [605, "Zapdos ex Electivire", 6, 6, 0],
  [606, "Yanmega ex Exeggutor", 6, 6, 0],
  [607, "Aerodactyl ex Leafeon", 5, 5, 0],
  [608, "Magnezone Volcarona", 4, 4, 0],
  [609, "Arbok Honchkrow", 5, 5, 0],
  [610, "Kingler Abomasnow", 3, 3, 0],
  [611, "Gallade ex Lopunny", 6, 6, 0],
  [612, "Golem Rampardos", 2, 2, 0],
  [613, "Magnezone Chatot", 6, 6, 0],
  [614, "Exeggutor ex Vespiquen", 4, 4, 0],
  [615, "Moltres ex Arcanine ex", 8, 8, 0],
  [616, "Greninja Tentacruel", 9, 9, 0],
  [617, "Kabutops Mew ex", 7, 6, 1],
  [618, "Palkia ex Lumineon", 4, 4, 0],
  [619, "Togekiss Beheeyem", 4, 4, 0],
  [620, "Pidgeot ex", 5, 5, 0],
  [621, "Bastiodon", 2, 2, 0],
  [622, "Mismagius ex Bibarel", 6, 7, 0],
  [623, "Omastar Regice", 6, 7, 0],
  [624, "Marowak ex Hitmonlee", 6, 7, 0],
  [625, "Starmie ex Glaceon", 5, 6, 0],
  [626, "Mew ex Rampardos", 5, 6, 0],
  [627, "Starmie ex Gyarados", 5, 6, 0],
  [628, "Exeggutor Mew ex", 5, 5, 1],
  [629, "Starmie ex Seaking", 4, 5, 0],
  [630, "Greninja Yanmega ex", 4, 4, 1],
  [631, "Raichu Magneton", 4, 5, 0],
  [632, "Zapdos ex Pikachu ex", 4, 4, 1],
  [633, "Jolteon Electivire", 4, 5, 0],
  [634, "Gyarados Mew ex", 3, 4, 0],
  [635, "Gengar ex Florges", 3, 4, 0],
  [636, "Dragonite Zebstrika", 3, 4, 0],
  [637, "Mismagius ex Wigglytuff ex", 3, 4, 0],
  [638, "Articuno ex Druddigon", 6, 8, 0],
  [639, "Pidgeot ex Greninja", 5, 7, 0],
  [640, "Venusaur ex Weezing", 6, 8, 1],
  [641, "Pachirisu ex Mew ex", 4, 6, 0],
  [642, "Greninja Lopunny", 4, 6, 0],
  [643, "Mismagius ex Gardevoir", 2, 3, 0],
  [644, "Starmie ex Omastar", 4, 6, 0],
  [645, "Yanmega ex Garchomp", 4, 6, 0],
  [646, "Wormadam Bisharp", 2, 3, 0],
  [647, "Moltres ex Volcarona", 4, 6, 0],
  [648, "Golem Stunky", 5, 8, 0],
  [649, "Garchomp Psyduck", 5, 8, 0],
  [650, "Palkia ex Psyduck", 3, 5, 0],
  [651, "Magnezone Ditto", 3, 5, 0],
  [652, "Magnezone Lopunny", 3, 5, 0],
  [653, "Venusaur ex Venusaur", 3, 5, 0],
  [654, "Florges Beheeyem", 3, 5, 0],
  [655, "Exeggutor ex Golem", 3, 4, 1],
  [656, "Greninja Skarmory", 3, 5, 0],
  [657, "Machamp ex Aerodactyl ex", 3, 5, 0],
  [658, "Empoleon Articuno ex", 3, 5, 0],
  [659, "Gyarados ex Chatot", 4, 7, 0],
  [660, "Tentacruel Hypno", 2, 4, 0],
  [661, "Victreebel Leafeon", 4, 8, 0],
  [662, "Gyarados ex Spiritomb", 3, 6, 0],
  [663, "Aerodactyl ex Greninja", 1, 2, 0],
  [664, "Mismagius ex Uxie", 2, 4, 0],
  [665, "Gengar ex Gardevoir", 4, 8, 0],
  [666, "Marowak ex", 2, 4, 0],
  [667, "Greninja Gyarados", 2, 3, 1],
  [668, "Magnezone Leafeon", 2, 4, 0],
  [669, "Wigglytuff ex Mismagius ex", 2, 4, 0],
  [670, "Vespiquen Leafeon", 3, 6, 0],
  [671, "Greninja Wartortle", 1, 2, 0],
  [672, "Garchomp Manaphy", 5, 10, 0],
  [673, "Omastar Rampardos", 2, 4, 0],
  [674, "Wigglytuff ex Garchomp", 2, 4, 0],
  [675, "Darkrai ex Bidoof", 2, 4, 0],
  [676, "Magnezone Flareon", 2, 4, 0],
  [677, "Mew ex Mewtwo ex", 3, 6, 0],
  [678, "Bastiodon Chatot", 3, 6, 0],
  [679, "Wormadam Bastiodon", 1, 2, 0],
  [680, "Mamoswine Manaphy", 3, 6, 0],
  [681, "Victreebel Exeggutor", 3, 6, 0],
  [682, "Golem Lopunny", 2, 4, 0],
  [683, "Yanmega ex Druddigon", 2, 4, 0],
  [684, "Weavile ex Muk", 3, 6, 0],
  [685, "Bibarel Marshadow", 4, 9, 0],
  [686, "Magnezone Electrode", 4, 9, 0],
  [687, "Gyarados Vaporeon", 3, 7, 0],
  [688, "Butterfree Exeggutor", 3, 7, 0],
  [689, "Mew ex Melmetal", 3, 7, 0],
  [690, "Magnezone Celebi ex", 2, 5, 0],
  [691, "Togekiss Spiritomb", 2, 5, 0],
  [692, "Venusaur ex Lopunny", 2, 5, 0],
  [693, "Arcanine ex Rapidash", 2, 5, 0],
  [694, "Starmie ex Golduck", 2, 5, 0],
  [695, "Magnezone Uxie", 2, 5, 0],
  [696, "Darkrai ex Magneton", 3, 8, 0],
  [697, "Mismagius ex Hypno", 2, 6, 0],
  [698, "Greninja Magnezone", 1, 3, 0],
  [699, "Serperior Venusaur ex", 2, 6, 0],
  [700, "Palkia ex Lumineon", 2, 6, 0],
  [701, "Nidoqueen Nidoking", 2, 6, 0],
  [702, "Gardevoir Florges", 2, 6, 0],
  [703, "Venusaur ex Regirock", 1, 3, 0],
  [704, "Jolteon Magneton", 1, 3, 0],
  [705, "Wigglytuff ex Lickilicky ex", 2, 6, 0],
  [706, "Butterfree Tangrowth", 1, 3, 0],
  [707, "Magnezone Shaymin", 2, 6, 0],
  [708, "Magnezone Rapidash", 1, 3, 0],
  [709, "Poliwrath Druddigon", 1, 3, 0],
  [710, "Mamoswine Palkia ex", 2, 6, 0],
  [711, "Wigglytuff ex Florges", 1, 3, 0],
  [712, "Mismagius ex Azelf", 1, 3, 0],
  [713, "Palkia ex Yanmega ex", 1, 3, 0],
  [714, "Dialga ex Staraptor", 1, 3, 0],
  [715, "Pidgeot Arbok", 2, 6, 0],
  [716, "Alakazam Mismagius ex", 2, 6, 0],
  [717, "Infernape ex Yanmega ex", 2, 7, 0],
  [718, "Ninetales", 1, 4, 0],
  [719, "Bastiodon Druddigon", 1, 4, 0],
  [720, "Magcargo Magmortar", 1, 4, 0],
  [721, "Palkia ex Staraptor", 1, 4, 0],
  [722, "Hitmonlee Druddigon", 1, 4, 0],
  [723, "Magnezone Primeape", 1, 4, 0],
  [724, "Yanmega ex Vespiquen", 1, 3, 1],
  [725, "Pidgeot ex Gyarados ex", 1, 5, 0],
  [726, "Articuno ex Blastoise ex", 1, 5, 0],
  [727, "Dialga ex Dusknoir", 1, 4, 1],
  [728, "Yanmega ex Shaymin", 1, 5, 0],
  [729, "Hypno Aerodactyl", 1, 5, 0],
  [730, "Moltres ex Rapidash", 1, 5, 0],
  [731, "Palkia ex Wigglytuff ex", 1, 5, 0],
  [732, "Greninja Manaphy", 1, 6, 0],
  [733, "Bibarel Skarmory", 1, 6, 0],
  [734, "Magnezone Melmetal", 1, 6, 0],
  [735, "Dusknoir Regigigas", 1, 6, 0],
  [736, "Mesprit Giratina", 1, 7, 0],
  [737, "Mamoswine Vaporeon", 1, 8, 0],
  [738, "Bastiodon Hypno", 0, 2, 0],
  [739, "Venusaur ex Caterpie", 0, 5, 0],
  [740, "Greninja Magcargo", 0, 1, 0],
  [741, "Weavile ex Toxicroak", 0, 4, 0],
  [742, "Palkia ex Blastoise ex", 0, 4, 0],
  [743, "Tentacruel Articuno ex", 0, 4, 0],
  [744, "Vaporeon Abomasnow", 0, 3, 0],
  [745, "Starmie ex Dodrio", 0, 6, 0],
  [746, "Uxie Azelf", 0, 2, 0],
  [747, "Dialga ex Pidgeot", 0, 3, 0],
  [748, "Arcanine ex Charizard ex", 0, 3, 0],
  [749, "Pidgeot ex Aerodactyl ex", 0, 5, 0],
  [750, "Roserade Butterfree", 0, 2, 0],
  [751, "Persian Hypno", 0, 5, 0],
  [752, "Lickilicky ex Darkrai ex", 0, 6, 0],
  [753, "Butterfree Venusaur ex", 0, 3, 0],
  [754, "Sandslash Mienshao", 0, 2, 0],
  [755, "Darkrai ex Hypno", 0, 3, 0],
  [756, "Infernape ex Salazzle", 0, 4, 0],
  [757, "Magnezone Starmie ex", 0, 4, 0],
  [758, "Exeggutor ex Dialga ex", 0, 2, 0],
  [759, "Darkrai ex Dusknoir", 0, 3, 0],
  [760, "Zapdos ex Raichu", 0, 6, 0],
  [761, "Garchomp Kingler", 0, 3, 0],
  [762, "Lickilicky ex Farfetch'd", 0, 4, 0],
  [763, "Bisharp Melmetal", 0, 3, 0],
  [764, "Lickilicky ex Skarmory", 0, 2, 0],
  [765, "Primeape Marowak", 1, 0, 0],
  [766, "Garchomp Chatot", 6, 1, 0],
  [767, "Pachirisu ex Hypno", 4, 1, 0],
  [768, "Greninja", 3, 1, 0],
  [769, "Mewtwo ex Togekiss", 3, 1, 0],
  [770, "Garchomp Bibarel", 3, 1, 0],
  [771, "Aerodactyl ex Sandslash", 6, 2, 0],
  [772, "Mewtwo ex Magneton", 5, 2, 0],
  [773, "Garchomp Wigglytuff ex", 6, 3, 0],
  [774, "Greninja Dialga ex", 6, 3, 0],
  [775, "Machamp ex Hitmonchan", 4, 2, 0],
  [776, "Greninja Regice", 6, 3, 0],
  [777, "Vaporeon Lumineon", 2, 1, 0],
  [778, "Garchomp Lumineon", 4, 2, 0],
  [779, "Exeggutor Lilligant", 4, 2, 0],
  [780, "Zapdos ex Raichu", 2, 1, 0],
  [781, "Alakazam Greninja", 4, 2, 0],
  [782, "Marowak ex Magnezone", 2, 1, 0],
  [783, "Hypno Magcargo", 2, 1, 0],
  [784, "Wigglytuff ex Dusknoir", 4, 2, 0],
  [785, "Palkia ex Lopunny", 4, 2, 0],
  [786, "Purugly Dialga ex", 4, 2, 0],
  [787, "Gallade ex Kangaskhan", 2, 1, 0],
  [788, "Marowak ex Regirock", 4, 2, 0],
  [789, "Pidgeot ex Magnezone", 4, 2, 0],
  [790, "Blastoise ex Meowth", 2, 1, 0],
  [791, "Magnezone Lucario", 5, 3, 0],
  [792, "Gyarados ex Golduck", 5, 3, 0],
  [793, "Venusaur ex Kangaskhan", 5, 1, 2],
  [794, "Starmie ex Dragonite", 3, 2, 0],
  [795, "Lumineon Abomasnow", 3, 2, 0],
  [796, "Gyarados Articuno", 3, 2, 0],
  [797, "Dragonite Pachirisu ex", 3, 2, 0],
  [798, "Victreebel Farfetch'd", 3, 2, 0],
  [799, "Mismagius ex Clefable", 3, 2, 0],
  [800, "Arcanine ex Rapidash", 3, 2, 0],
  [801, "Rhyperior Gliscor", 3, 2, 0],
  [802, "Rampardos Golem", 3, 2, 0],
  [803, "Gyarados ex Shaymin", 3, 2, 0],
  [804, "Exeggutor ex Torterra", 6, 4, 0],
  [805, "Mew ex Luxray", 3, 2, 0],
  [806, "Rampardos Meowth", 6, 4, 0],
  [807, "Persian Bastiodon", 3, 2, 0],
  [808, "Yanmega ex Kangaskhan", 4, 3, 0],
  [809, "Celebi ex Mew ex", 4, 2, 1],
  [810, "Beedrill Vespiquen", 4, 3, 0],
  [811, "Garchomp Shaymin", 4, 3, 0],
  [812, "Marowak Lucario", 4, 2, 1],
  [813, "Yanmega ex Lucario", 4, 3, 0],
  [814, "Pachirisu ex Shaymin", 4, 3, 0],
  [815, "Yanmega ex Moltres ex", 4, 3, 0],
  [816, "Greninja Bibarel", 4, 3, 0],
  [817, "Probopass Melmetal", 4, 3, 0],
  [818, "Gengar ex Yanmega ex", 4, 3, 0],
  [819, "Wigglytuff ex Articuno ex", 4, 3, 0],
  [820, "Kingler Mew ex", 4, 3, 0],
  [821, "Alakazam Farfetch'd", 4, 3, 0],
  [822, "Leafeon Farfetch'd", 4, 3, 0],
  [823, "Magnezone Empoleon", 5, 4, 0],
  [824, "Electivire Pachirisu ex", 5, 4, 0],
  [825, "Yanmega ex Arbok", 5, 4, 0],
  [826, "Yanmega ex Zapdos ex", 4, 4, 0],
  [827, "Starmie ex Poliwrath", 1, 1, 0],
  [828, "Garchomp Lapras", 2, 2, 0],
  [829, "Wigglytuff ex Arbok", 4, 4, 0],
  [830, "Dialga ex Pidgeot ex", 2, 2, 0],
  [831, "Infernape ex Regirock", 3, 3, 0],
  [832, "Palkia ex Magcargo", 3, 3, 0],
  [833, "Dragonite Vaporeon", 1, 1, 0],
  [834, "Magnezone Lickilicky ex", 2, 2, 0],
  [835, "Exeggutor ex Bastiodon", 3, 3, 0],
  [836, "Mew ex Golem", 1, 1, 0],
  [837, "Gyarados ex", 1, 1, 0],
  [838, "Celebi ex Exeggutor", 2, 2, 0],
  [839, "Magnezone Grotle", 3, 3, 0],
  [840, "Greninja Persian", 3, 2, 1],
  [841, "Garchomp Marshadow", 3, 3, 0],
  [842, "Magneton Jolteon", 3, 3, 0],
  [843, "Blastoise ex Tauros", 4, 4, 0],
  [844, "Exeggutor ex Roserade", 3, 3, 0],
  [845, "Lickilicky ex Articuno ex", 1, 1, 0],
  [846, "Greninja Hitmonlee", 1, 1, 0],
  [847, "Magnezone Cresselia", 2, 2, 0],
  [848, "Rhyperior Lucario", 1, 1, 0],
  [849, "Shiinotic Vileplume", 1, 1, 0],
  [850, "Golem Ambipom", 3, 2, 1],
  [851, "Dragonite Jolteon", 2, 2, 0],
  [852, "Darkrai ex Bibarel", 5, 5, 0],
  [853, "Mismagius ex Dusknoir", 4, 4, 0],
  [854, "Electivire Luxray", 2, 2, 0],
  [855, "Darkrai ex Wigglytuff ex", 2, 2, 0],
  [856, "Greninja Aerodactyl ex", 3, 3, 0],
  [857, "Garchomp Palkia ex", 5, 5, 0],
  [858, "Rapidash Flareon", 2, 2, 0],
  [859, "Exeggutor ex Charizard ex", 4, 4, 0],
  [860, "Victreebel Shiinotic", 2, 2, 0],
  [861, "Gyarados ex Butterfree", 2, 2, 0],
  [862, "Kabutops Primeape", 2, 2, 0],
  [863, "Flareon Greninja", 1, 1, 0],
  [864, "Empoleon Kangaskhan", 1, 1, 0],
  [865, "Starmie ex Lapras ex", 1, 1, 0],
  [866, "Lickilicky ex Cinccino", 3, 2, 1],
  [867, "Serperior Lilligant", 3, 3, 0],
  [868, "Raichu Electivire", 2, 2, 0],
  [869, "Yanmega ex Gallade ex", 2, 2, 0],
  [870, "Magnezone Bastiodon", 4, 4, 0],
  [871, "Blastoise ex Gyarados ex", 3, 3, 0],
  [872, "Greninja Jolteon", 3, 3, 0],
  [873, "Gallade ex Gliscor", 1, 1, 0],
  [874, "Exeggutor Celebi ex", 3, 3, 0],
  [875, "Greninja Darkrai", 1, 1, 0],
  [876, "Alakazam Gardevoir", 3, 3, 0],
  [877, "Blastoise ex Lapras", 3, 3, 0],
  [878, "Rapidash Magmortar", 1, 1, 0],
  [879, "Yanmega ex Spiritomb", 3, 3, 0],
  [880, "Lumineon Palkia ex", 2, 2, 0],
  [881, "Blastoise ex Lapras ex", 2, 2, 0],
  [882, "Darkrai ex Toxicroak", 1, 1, 0],
  [883, "Dugtrio Primeape", 3, 3, 0],
  [884, "Garchomp Mienshao", 3, 3, 0],
  [885, "Dusknoir Regirock", 2, 2, 0],
  [886, "Rampardos Chatot", 3, 3, 0],
  [887, "Alakazam Weezing", 3, 3, 0],
  [888, "Florges Mew ex", 5, 4, 1],
  [889, "Lapras ex Greninja", 1, 1, 0],
  [890, "Roserade Celebi ex", 3, 3, 0],
  [891, "Alakazam Azelf", 2, 2, 0],
  [892, "Raichu Pikachu ex", 5, 5, 0],
  [893, "Persian Rampardos", 1, 1, 0],
  [894, "Pidgeot ex Hitmonlee", 3, 3, 0],
  [895, "Darkrai ex Gyarados ex", 4, 4, 0],
  [896, "Beheeyem Mewtwo ex", 3, 3, 0],
  [897, "Greninja Galvantula", 4, 4, 0],
  [898, "Greninja Ninetales", 3, 3, 0],
  [899, "Magnezone Galvantula", 3, 3, 0],
  [900, "Articuno ex Manaphy", 4, 5, 0],
  [901, "Exeggutor ex Shiinotic", 4, 5, 0],
  [902, "Dragonite Garchomp", 3, 4, 0],
  [903, "Bisharp Farfetch'd", 3, 4, 0],
  [904, "Poliwrath Greninja", 3, 4, 0],
  [905, "Moltres ex Charizard", 3, 4, 0],
  [906, "Pachirisu ex Bibarel", 3, 4, 0],
  [907, "Arcanine ex Ninetales", 3, 4, 0],
  [908, "Electrode Electivire", 3, 4, 0],
  [909, "Melmetal Bidoof", 3, 4, 0],
  [910, "Greninja Shaymin", 3, 4, 0],
  [911, "Lapras ex Articuno ex", 3, 4, 0],
  [912, "Exeggutor ex Flareon", 3, 3, 1],
  [913, "Pachirisu ex Chatot", 3, 4, 0],
  [914, "Melmetal Mawile", 3, 4, 0],
  [915, "Victreebel Exeggutor", 3, 4, 0],
  [916, "Eelektross Weezing", 3, 4, 0],
  [917, "Magmortar Hypno", 3, 4, 0],
  [918, "Aerodactyl ex Arbok", 3, 4, 0],
  [919, "Aerodactyl ex Persian", 3, 4, 0],
  [920, "Mewtwo ex Palkia ex", 2, 3, 0],
  [921, "Rampardos Darkrai ex", 2, 3, 0],
  [922, "Golem Wigglytuff ex", 2, 3, 0],
  [923, "Skuntank Dusknoir", 2, 3, 0],
  [924, "Yanmega ex Lopunny", 2, 3, 0],
  [925, "Ninetales Lopunny", 2, 3, 0],
  [926, "Purugly Mew ex", 2, 2, 1],
  [927, "Yanmega ex Butterfree", 2, 3, 0],
  [928, "Mismagius ex Spiritomb", 2, 3, 0],
  [929, "Gallade ex Greninja", 2, 3, 0],
  [930, "Butterfree Heatran", 2, 3, 0],
  [931, "Charizard ex Moltres", 2, 3, 0],
  [932, "Kingler Seaking", 2, 3, 0],
  [933, "Palkia ex Dusknoir", 2, 3, 0],
  [934, "Yanmega ex", 4, 6, 0],
  [935, "Beedrill Vileplume", 2, 3, 0],
  [936, "Dialga ex Victreebel", 2, 3, 0],
  [937, "Aerodactyl ex Lickilicky ex", 2, 3, 0],
  [938, "Lickilicky ex Melmetal", 2, 3, 0],
  [939, "Porygon-Z Palkia ex", 4, 6, 0],
  [940, "Exeggutor ex Starmie ex", 2, 3, 0],
  [941, "Primeape Aerodactyl ex", 2, 3, 0],
  [942, "Gardevoir Dusknoir", 2, 3, 0],
  [943, "Garchomp Fearow", 2, 3, 0],
  [944, "Garchomp Lucario", 2, 3, 0],
  [945, "Garchomp Gastrodon", 2, 3, 0],
  [946, "Venusaur", 2, 3, 0],
  [947, "Gallade ex Bibarel", 2, 3, 0],
  [948, "Zapdos ex Electrode", 2, 3, 0],
  [949, "Empoleon Mew ex", 2, 3, 0],
  [950, "Magnezone Kingler", 2, 3, 0],
  [951, "Lickilicky ex Celebi ex", 2, 3, 0],
  [952, "Exeggutor Magnezone", 2, 3, 0],
  [953, "Magnezone Tauros", 2, 3, 0],
  [954, "Flareon Glaceon", 2, 3, 0],
  [955, "Magneton Mew ex", 2, 3, 0],
  [956, "Weavile ex Skuntank", 2, 3, 0],
  [957, "Dragonite Starmie", 3, 5, 0],
  [958, "Melmetal Bastiodon", 3, 5, 0],
  [959, "Yanmega ex Lilligant", 3, 5, 0],
  [960, "Magnezone Electrode", 3, 5, 0],
  [961, "Porygon-Z Hypno", 3, 5, 0],
  [962, "Marowak ex Lickilicky ex", 2, 4, 0],
  [963, "Marowak ex Dugtrio", 2, 4, 0],
  [964, "Cresselia ex Butterfree", 2, 4, 0],
  [965, "Darkrai ex Vaporeon", 2, 4, 0],
  [966, "Palkia ex Regigigas", 1, 2, 0],
  [967, "Pachirisu ex Shinx", 1, 2, 0],
  [968, "Florges Mismagius ex", 1, 2, 0],
  [969, "Dusknoir Celebi ex", 1, 2, 0],
  [970, "Marowak ex Mew ex", 2, 4, 0],
  [971, "Celebi ex Palkia ex", 1, 2, 0],
  [972, "Arcanine ex Magcargo", 3, 6, 0],
  [973, "Rampardos Stonjourner", 1, 2, 0],
  [974, "Gengar ex Togekiss", 2, 4, 0],
  [975, "Luxray Pikachu ex", 1, 2, 0],
  [976, "Pidgeot ex Yanmega ex", 1, 2, 0],
  [977, "Vaporeon Mamoswine", 1, 2, 0],
  [978, "Yanmega ex Melmetal", 1, 2, 0],
  [979, "Charizard ex Rapidash", 1, 2, 0],
  [980, "Palkia ex Regice", 1, 1, 1],
  [981, "Articuno ex Dragonite", 1, 2, 0],
  [982, "Venusaur ex Roserade", 1, 2, 0],
  [983, "Exeggutor ex Rotom", 1, 2, 0],
  [984, "Electivire Pikachu ex", 1, 2, 0],
  [985, "Staraptor Palkia ex", 1, 2, 0],
  [986, "Garchomp Tauros", 1, 2, 0],
  [987, "Wigglytuff ex Ambipom", 2, 4, 0],
  [988, "Darkrai ex Psyduck", 1, 2, 0],
  [989, "Abomasnow Lapras ex", 2, 4, 0],
  [990, "Weavile ex Pidgeot", 1, 2, 0],
  [991, "Lapras ex Palkia ex", 1, 2, 0],
  [992, "Exeggutor ex Skarmory", 2, 4, 0],
  [993, "Weavile ex Liepard", 1, 2, 0],
  [994, "Exeggutor ex Beedrill", 1, 2, 0],
  [995, "Ninetales Mew ex", 1, 2, 0],
  [996, "Electivire Spiritomb", 2, 4, 0],
  [997, "Aerodactyl ex Chatot", 1, 2, 0],
  [998, "Gyarados ex Fan Rotom", 1, 2, 0],
  [999, "Golem Primeape", 1, 2, 0],
  [1000, "Mew ex Exeggutor ex", 1, 2, 0],
  [1001, "Porygon-Z Shaymin", 1, 2, 0],
  [1002, "Staraptor Weavile ex", 1, 2, 0],
  [1003, "Darkrai ex Yanmega ex", 1, 2, 0],
  [1004, "Celebi ex Exeggutor", 1, 2, 0],
  [1005, "Leafeon Bidoof", 1, 2, 0],
  [1006, "Leafeon", 1, 2, 0],
  [1007, "Greninja Salazzle", 1, 2, 0],
  [1008, "Primeape Marshadow", 2, 4, 0],
  [1009, "Infernape ex Heat Rotom", 1, 2, 0],
  [1010, "Vileplume Bellossom", 2, 4, 0],
  [1011, "Aerodactyl ex Dugtrio", 1, 2, 0],
  [1012, "Vaporeon Articuno ex", 2, 4, 0],
  [1013, "Dialga ex Kangaskhan", 1, 2, 0],
  [1014, "Wigglytuff ex Druddigon", 1, 2, 0],
  [1015, "Gallade ex Sandslash", 1, 2, 0],
  [1016, "Pachirisu ex Butterfree", 1, 2, 0],
  [1017, "Magnezone Porygon-Z", 1, 2, 0],
  [1018, "Celebi ex Kangaskhan", 2, 4, 0],
  [1019, "Yanmega ex Bisharp", 1, 2, 0],
  [1020, "Charizard Arcanine", 1, 2, 0],
  [1021, "Greninja Glameow", 2, 4, 0],
  [1022, "Victreebel Exeggutor ex", 1, 2, 0],
  [1023, "Staraptor Skarmory", 1, 2, 0],
  [1024, "Pidgeot ex Palkia ex", 2, 4, 0],
  [1025, "Whimsicott Vaporeon", 1, 2, 0],
  [1026, "Yanmega ex Wigglytuff ex", 1, 2, 0],
  [1027, "Skarmory", 1, 2, 0],
  [1028, "Eelektross Pikachu ex", 1, 2, 0],
  [1029, "Gengar ex Glameow", 1, 1, 1],
  [1030, "Staraptor Hitmonlee", 1, 2, 0],
  [1031, "Gengar Mismagius ex", 1, 2, 0],
  [1032, "Infernape ex Glameow", 2, 4, 0],
  [1033, "Garchomp Lumineon", 2, 4, 0],
  [1034, "Garchomp Persian", 1, 2, 0],
  [1035, "Starmie ex Tauros", 1, 2, 0],
  [1036, "Gallade ex Shaymin", 1, 2, 0],
  [1037, "Victreebel Magnezone", 1, 2, 0],
  [1038, "Gallade ex Onix", 1, 2, 0],
  [1039, "Gallade ex Combee", 1, 2, 0],
  [1040, "Machamp ex Onix", 2, 5, 0],
  [1041, "Roserade Exeggutor", 2, 5, 0],
  [1042, "Jolteon Leafeon", 2, 5, 0],
  [1043, "Marowak ex Marshadow", 2, 5, 0],
  [1044, "Rampardos Kangaskhan", 2, 5, 0],
  [1045, "Articuno ex Pidgeot", 2, 5, 0],
  [1046, "Togekiss Mewtwo ex", 2, 5, 0],
  [1047, "Mew ex Gyarados ex", 2, 5, 0],
  [1048, "Venomoth Leafeon", 2, 6, 0],
  [1049, "Articuno ex Empoleon", 1, 3, 0],
  [1050, "Greninja Mamoswine", 1, 3, 0],
  [1051, "Gyarados ex Blastoise ex", 1, 3, 0],
  [1052, "Machamp Lucario", 1, 3, 0],
  [1053, "Lumineon Articuno ex", 1, 3, 0],
  [1054, "Electrode Heliolisk", 1, 3, 0],
  [1055, "Skarmory Heatran", 1, 3, 0],
  [1056, "Weezing Lopunny", 1, 3, 0],
  [1057, "Rapidash Jolteon", 1, 3, 0],
  [1058, "Dragonite Tauros", 1, 3, 0],
  [1059, "Luxray Mew ex", 1, 3, 0],
  [1060, "Darkrai ex Dodrio", 1, 3, 0],
  [1061, "Marowak ex Gallade ex", 1, 3, 0],
  [1062, "Pidgeot ex Dragonite", 1, 3, 0],
  [1063, "Dragonite Raichu", 1, 3, 0],
  [1064, "Electrode Jolteon", 1, 3, 0],
  [1065, "Gyarados ex Farfetch'd", 1, 3, 0],
  [1066, "Machamp ex Marshadow", 1, 3, 0],
  [1067, "Bisharp Mew ex", 1, 3, 0],
  [1068, "Alakazam Pidgeot ex", 1, 3, 0],
  [1069, "Aerodactyl ex Marowak ex", 1, 3, 0],
  [1070, "Yanmega ex Electrode", 1, 3, 0],
  [1071, "Golem Hitmonlee", 1, 3, 0],
  [1072, "Togekiss Glameow", 1, 3, 0],
  [1073, "Machamp Bibarel", 1, 3, 0],
  [1074, "Omastar Farfetch'd", 1, 3, 0],
  [1075, "Togekiss Rotom", 1, 3, 0],
  [1076, "Pachirisu ex Yanmega ex", 1, 3, 0],
  [1077, "Greninja Dugtrio", 1, 3, 0],
  [1078, "Pachirisu ex Raichu", 1, 3, 0],
  [1079, "Articuno ex Blastoise", 1, 3, 0],
  [1080, "Galvantula Pikachu ex", 1, 3, 0],
  [1081, "Lumineon Palkia ex", 1, 3, 0],
  [1082, "Mismagius ex Farfetch'd", 1, 3, 0],
  [1083, "Moltres ex Magnezone", 1, 3, 0],
  [1084, "Dragonite Weezing", 1, 3, 0],
  [1085, "Machamp ex Rampardos", 1, 3, 0],
  [1086, "Wormadam Melmetal", 1, 3, 0],
  [1087, "Machamp Rampardos", 1, 3, 0],
  [1088, "Lumineon Tauros", 1, 3, 0],
  [1089, "Infernape ex Lopunny", 1, 3, 0],
  [1090, "Dusknoir Yanmega ex", 1, 4, 0],
  [1091, "Yanmega ex Glaceon", 1, 4, 0],
  [1092, "Articuno ex Lickilicky ex", 1, 4, 0],
  [1093, "Machamp ex Meowth", 1, 4, 0],
  [1094, "Weezing Centiskorch", 1, 4, 0],
  [1095, "Kabutops", 1, 4, 0],
  [1096, "Gengar ex Uxie", 1, 4, 0],
  [1097, "Zapdos ex Jolteon", 1, 4, 0],
  [1098, "Marowak ex Golem", 1, 4, 0],
  [1099, "Ambipom Skarmory", 1, 4, 0],
  [1100, "Weezing Tauros", 1, 3, 1],
  [1101, "Melmetal", 1, 4, 0],
  [1102, "Alakazam Jynx", 1, 4, 0],
  [1103, "Porygon-Z Mew ex", 1, 4, 0],
  [1104, "Blastoise ex Mismagius ex", 1, 4, 0],
  [1105, "Dialga ex Farfetch'd", 1, 4, 0],
  [1106, "Kricketune Shiinotic", 1, 3, 2],
  [1107, "Starmie ex Porygon-Z", 1, 5, 0],
  [1108, "Garchomp Tentacruel", 1, 5, 0],
  [1109, "Pidgeot ex Weavile ex", 1, 5, 0],
  [1110, "Scolipede Mew ex", 1, 5, 0],
  [1111, "Toxicroak Mew ex", 1, 6, 0],
  [1112, "Porygon-Z", 1, 4, 2],
  [1113, "Weezing Drapion", 0, 1, 0],
  [1114, "Rhyperior Rampardos", 0, 1, 0],
  [1115, "Electrode Pikachu ex", 0, 3, 0],
  [1116, "Arbok Muk", 0, 2, 0],
  [1117, "Darkrai ex Staraptor", 0, 1, 0],
  [1118, "Palkia ex Tauros", 0, 1, 0],
  [1119, "Mew ex Dusknoir", 0, 2, 0],
  [1120, "Rapidash Bellossom", 0, 3, 0],
  [1121, "Charizard ex Pikachu ex", 0, 3, 0],
  [1122, "Yanmega ex Rapidash", 0, 1, 0],
  [1123, "Gallade ex Chatot", 0, 1, 0],
  [1124, "Cresselia ex Greninja", 0, 3, 0],
  [1125, "Magnezone Arbok", 0, 2, 0],
  [1126, "Dusknoir Mewtwo ex", 0, 2, 0],
  [1127, "Raichu Electivire", 0, 2, 0],
  [1128, "Palkia ex Porygon-Z", 0, 2, 0],
  [1129, "Pidgeot ex Victreebel", 0, 2, 0],
  [1130, "Melmetal Greninja", 0, 3, 0],
  [1131, "Darkrai ex Grimer", 0, 1, 0],
  [1132, "Torterra Vespiquen", 0, 1, 0],
  [1133, "Primeape Farfetch'd", 0, 2, 0],
  [1134, "Exeggutor ex Tangrowth", 0, 1, 0],
  [1135, "Articuno ex Gyarados ex", 0, 1, 0],
  [1136, "Venusaur Tangrowth", 0, 1, 0],
  [1137, "Infernape ex Charizard ex", 0, 1, 0],
  [1138, "Celebi ex Raticate", 0, 3, 0],
  [1139, "Magcargo Moltres ex", 0, 2, 0],
  [1140, "Pachirisu ex Spiritomb", 0, 1, 0],
  [1141, "Palkia ex Omastar", 0, 2, 0],
  [1142, "Mamoswine Omastar", 0, 1, 0],
  [1143, "Articuno ex Regice", 0, 1, 0],
  [1144, "Mew ex Druddigon", 0, 2, 0],
  [1145, "Lickilicky ex Lopunny", 0, 2, 0],
  [1146, "Sandslash Kabutops", 0, 1, 0],
  [1147, "Aerodactyl ex Gallade ex", 0, 1, 0],
  [1148, "Electrode Magnezone", 0, 2, 0],
  [1149, "Machamp ex Dusknoir", 0, 1, 0],
  [1150, "Alakazam", 0, 2, 0],
  [1151, "Electrode Pachirisu ex", 0, 3, 0],
  [1152, "Greninja Magneton", 0, 2, 0],
  [1153, "Luxray Spiritomb", 0, 2, 0],
  [1154, "Lucario Sandslash", 0, 3, 0],
  [1155, "Exeggutor ex Farfetch'd", 0, 2, 0],
  [1156, "Gengar ex Sigilyph", 0, 2, 0],
  [1157, "Venusaur ex Spiritomb", 0, 2, 0],
  [1158, "Zapdos ex Zebstrika", 0, 4, 0],
  [1159, "Magnezone Hitmonchan", 0, 2, 0],
  [1160, "Wigglytuff ex Frosmoth", 0, 3, 0],
  [1161, "Pachirisu ex Jolteon", 0, 2, 0],
  [1162, "Gyarados ex Kangaskhan", 0, 2, 0],
  [1163, "Yanmega ex Purugly", 0, 2, 0],
  [1164, "Marowak ex Kangaskhan", 0, 2, 0],
  [1165, "Flareon Druddigon", 0, 2, 0],
  [1166, "Mew ex Celebi ex", 0, 3, 0],
  [1167, "Yanmega ex Salazzle", 0, 4, 0],
  [1168, "Skarmory Wormadam", 0, 2, 0],
  [1169, "Empoleon Manaphy", 0, 2, 0],
  [1170, "Pidgeot ex Staraptor", 0, 1, 0],
  [1171, "Venusaur ex Victreebel", 0, 3, 0],
  [1172, "Lapras ex Magnezone", 0, 1, 0],
  [1173, "Luxray Dedenne", 0, 3, 1],
  [1174, "Venusaur Butterfree", 0, 1, 0],
  [1175, "Garchomp Rotom", 0, 1, 0],
  [1176, "Dialga ex Wigglytuff", 0, 2, 0],
  [1177, "Ninetales Centiskorch", 0, 2, 0],
  [1178, "Gallade ex Marshadow", 0, 2, 0],
  [1179, "Gardevoir Mesprit", 0, 3, 0],
  [1180, "Rotom", 0, 2, 0],
  [1181, "Celebi ex Jolteon", 0, 2, 0],
  [1182, "Beedrill Victreebel", 0, 4, 0],
  [1183, "Garchomp Golduck", 0, 2, 0],
  [1184, "Porygon-Z Magnezone", 0, 1, 0],
  [1185, "Moltres ex Rapidash", 0, 3, 0],
  [1186, "Gyarados ex Lapras", 0, 2, 0],
  [1187, "Eelektross Raichu", 0, 1, 0],
  [1188, "Roserade Leafeon", 0, 1, 0],
  [1189, "Pidgeot ex Primeape", 0, 2, 0],
  [1190, "Mamoswine Floatzel", 0, 1, 0],
  [1191, "Skuntank Scolipede", 0, 1, 0],
  [1192, "Gengar ex Alakazam", 0, 3, 0],
  [1193, "Roserade Lopunny", 0, 2, 0],
  [1194, "Luxray Magneton", 0, 2, 0],
  [1195, "Pidgeot ex Starmie ex", 0, 2, 0],
  [1196, "Poliwrath Manaphy", 0, 3, 0],
  [1197, "Dialga ex Magneton", 0, 1, 0],
  [1198, "Scolipede Drapion", 0, 2, 0],
  [1199, "Dialga ex Celebi ex", 0, 3, 0],
  [1200, "Primeape Rhyperior", 0, 1, 0],
  [1201, "Garchomp Primeape", 0, 1, 0],
  [1202, "Cresselia ex Cresselia", 0, 1, 0],
  [1203, "Alakazam Spiritomb", 0, 1, 0],
  [1204, "Magcargo Hypno", 0, 1, 0],
  [1205, "Greninja Honchkrow", 0, 2, 0],
  [1206, "Rhyperior Onix", 0, 2, 0],
  [1207, "Starmie ex Garchomp", 0, 1, 0],
  [1208, "Alakazam Mewtwo ex", 0, 3, 2],
  [1209, "Darkrai ex Ambipom", 0, 1, 0],
  [1210, "Scolipede Honchkrow", 0, 2, 0],
  [1211, "Serperior Yanmega ex", 0, 2, 0],
  [1212, "Gengar ex Azelf", 0, 2, 0],
  [1213, "Lickilicky ex Ambipom", 0, 2, 0],
  [1214, "Bastiodon Shaymin", 0, 2, 0],
  [1215, "Rampardos Spiritomb", 0, 2, 0],
  [1216, "Arcanine ex Magnezone", 0, 1, 0],
  [1217, "Celebi ex Lilligant", 0, 3, 0],
  [1218, "Skuntank Toxicroak", 0, 2, 0],
  [1219, "Exeggutor ex Ivysaur", 0, 1, 0],
  [1220, "Raichu Pachirisu ex", 0, 2, 0],
  [1221, "Aerodactyl ex Pachirisu ex", 0, 2, 0],
  [1222, "Garchomp Weezing", 0, 3, 0],
  [1223, "Weavile ex Drapion", 0, 1, 0],
  [1224, "Golem Onix", 0, 2, 0],
  [1225, "Vaporeon Mew ex", 0, 2, 0],
  [1226, "Dragonite Lickilicky ex", 0, 2, 0],
  [1227, "Dragonite Weezing", 0, 2, 0],
  [1228, "Lickilicky ex Rampardos", 0, 3, 0],
  [1229, "Marowak ex Primeape", 0, 3, 0],
  [1230, "Arcanine ex Pidgeot", 0, 2, 0],
  [1231, "Wigglytuff ex Vaporeon", 0, 1, 0],
  [1232, "Wigglytuff ex Gyarados ex", 0, 4, 0],
  [1233, "Starmie ex Alakazam", 0, 1, 0],
  [1234, "Togekiss Gardevoir", 0, 3, 0],
  [1235, "Dragonite Pidgeot", 0, 2, 0],
  [1236, "Roserade Serperior", 0, 1, 0],
  [1237, "Greninja Hitmonchan", 0, 1, 0],
  [1238, "Starmie ex Empoleon", 0, 1, 0],
  [1239, "Garchomp Porygon", 0, 3, 0],
  [1240, "Pachirisu ex Electabuzz", 0, 2, 0],
  [1241, "Abomasnow Regice", 0, 1, 0],
  [1242, "Toxicroak Cinccino", 0, 2, 0],
  [1243, "Cresselia ex Magnezone", 0, 2, 0],
  [1244, "Garchomp Lopunny", 0, 2, 0],
  [1245, "Dragonite Farfetch'd", 0, 2, 0],
  [1246, "Golem Giratina", 0, 1, 0],
  [1247, "Dialga ex Purugly", 0, 3, 0],
  [1248, "Greninja Cramorant", 0, 2, 0],
  [1249, "Magnezone Charizard ex", 0, 2, 0],
  [1250, "Luxray", 0, 2, 0],
  [1251, "Exeggutor ex Melmetal", 0, 4, 0],
  [1252, "Pidgeot ex Melmetal", 0, 2, 0],
  [1253, "Magnezone Primeape", 0, 1, 0],
  [1254, "Regirock Lopunny", 0, 2, 0],
  [1255, "Gengar ex Mewtwo ex", 0, 1, 0],
  [1256, "Ninetales Salazzle", 0, 1, 0],
  [1257, "Weezing Scolipede", 0, 2, 0],
  [1258, "Greninja Vaporeon", 0, 2, 0],
  [1259, "Dusknoir Druddigon", 0, 2, 0],
  [1260, "Pidgeot ex Venusaur ex", 0, 2, 0],
  [1261, "Shaymin Druddigon", 0, 1, 0],
  [1262, "Palkia ex Kingler", 0, 2, 0],
  [1263, "Infernape ex Jolteon", 0, 2, 0],
  [1264, "Starmie ex Spiritomb", 0, 3, 0],
  [1265, "Alakazam Hypno", 0, 1, 0],
  [1266, "Blastoise ex Omastar", 0, 1, 0],
  [1267, "Mew ex Regigigas", 0, 1, 0],
  [1268, "Infernape ex Salazzle", 0, 3, 0],
  [1269, "Infernape ex Darkrai ex", 0, 1, 0],
  [1270, "Dragonite Regice", 0, 1, 0],
  [1271, "Articuno ex Lumineon", 0, 3, 0],
  [1272, "Arcanine ex Aerodactyl ex", 0, 3, 0],
  [1273, "Sandslash Primeape", 0, 2, 0],
  [1274, "Mew ex Pachirisu ex", 0, 1, 0],
  [1275, "Mismagius ex Staraptor", 0, 2, 0],
  [1276, "Celebi ex Butterfree", 0, 2, 0],
  [1277, "Starmie ex Pidgeot ex", 0, 2, 0],
  [1278, "Beedrill Bellossom", 0, 2, 0],
  [1279, "Pidgeot ex Skarmory", 0, 2, 0],
  [1280, "Primeape Hitmonlee", 0, 3, 0],
  [1281, "Raichu Luxray", 0, 2, 0],
  [1282, "Magnezone Rotom", 0, 1, 0],
  [1283, "Garchomp Skiddo", 0, 3, 0],
  [1284, "Garchomp Regice", 0, 4, 0],
  [1285, "Marowak ex Golem", 0, 2, 0],
  [1286, "Pachirisu ex Farfetch'd", 0, 2, 0],
  [1287, "Victreebel Mew ex", 0, 2, 0],
  [1288, "Gallade ex Glameow", 0, 2, 0],
  [1289, "Bastiodon Farfetch'd", 0, 2, 0],
  [1290, "Shiinotic Mew ex", 0, 1, 0],
  [1291, "Blastoise ex Glaceon", 0, 2, 0],
  [1292, "Porygon-Z Manaphy", 0, 1, 0],
  [1293, "Magnezone Charmeleon", 0, 3, 0],
  [1294, "Starmie ex Purugly", 0, 2, 0],
  [1295, "Dragonite Luxray", 0, 3, 0],
  [1296, "Garchomp Primeape", 0, 2, 0]
];


const STATE = {
  processedData: [],
  rankedByFormula: [],
  templatesEnabled: true,
  templateCounts: {}
};

// Get dynamic z-score based on sample size
const getDynamicZScore = (n) => {
  if (n < 30) return 2.576;
  if (n < 200) return 2.576 + (2.326 - 2.576) * ((n - 30) / 170);
  if (n < 1000) return 2.326 + (1.96 - 2.326) * ((n - 200) / 800);
  return 1.96;
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
  const adjustedZ = adaptiveZ / metaAdjustment;

  return allData.map(([origRank, deck, wins, losses, ties]) => {
    const n = wins + losses + ties;
    const adjWins = wins + 0.5 * ties;
    const adjLosses = losses + 0.5 * ties;
    const postAlpha = priorAlpha + adjWins;
    const postBeta = priorBeta + adjLosses;
    const posteriorMean = postAlpha / (postAlpha + postBeta);
    const postVariance = (postAlpha * postBeta) / ((postAlpha + postBeta) ** 2 * (postAlpha + postBeta + 1));
    const lowerBound = Math.max(0, posteriorMean + adjustedZ * Math.sqrt(postVariance));
    const adjustedLowerBound = Math.min(0.99, lowerBound);

    return { origRank, deck, wins, losses, ties, n, posteriorMean, adjustedLowerBound };
  });
};

// Convert win percentage to strength score
const calculateStrength = (winPct) => winPct * 1.8;

// Get tier from strength
const getTier = (strength) => {
  if (strength >= 100) return 'X';
  if (strength >= 97) return 'S++';
  if (strength >= 94) return 'S+';
  if (strength >= 91) return 'S';
  if (strength >= 88) return 'A';
  if (strength >= 85) return 'B';
  if (strength >= 82) return 'C';
  if (strength >= 79) return 'D';
  if (strength >= 76) return 'E';
  if (strength >= 73) return 'F';
  return 'Unranked';
};

const TEMPLATES = [
  // TIER 0: TRANSCENDENT/GODLIKE (0-1 decks) - ONCE IN A FORMAT
  {
    id: 1,
    name: "Arceus's Judgment",
    requirements: {
      strength: { min: 100.00 }
    },
    template: "{deck_name} has reached Arceus's Judgment — an unprecedented {strength} ({tier}) that reshapes competitive reality itself. With {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% meta share, this deck wields power beyond the Plates, forcing the format to bend to its divine will."
  },
  {
    id: 2,
    name: "Creation Trio Dominance",
    requirements: {
      strength: { min: 97.00 },
      adjustedWinRate: { min: 54.5 },
      share: { min: 8.00 }
    },
    template: "{deck_name} commands Creation Trio Dominance — {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% meta share. Like Dialga, Palkia, and Giratina controlling time, space, and distortion, this deck doesn't merely win tournaments—it erases competition from existence."
  },
  {
    id: 3,
    name: "Primal Reversion",
    requirements: {
      strength: { min: 95.00 },
      adjustedWinRate: { min: 53.50 },
      share: { min: 6.00 }
    },
    template: "{deck_name} has triggered Primal Reversion — {strength} ({tier}) unleashing ancient, world-altering power. Like Primal Groudon's Desolate Land and Primal Kyogre's Primordial Sea, this {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% meta share changes the very rules of engagement."
  },
  {
    id: 4,
    name: "Mega Evolution Apex",
    requirements: {
      strength: { min: 93.00 },
      adjustedWinRate: { min: 52.50 },
      share: { min: 5.00 }
    },
    template: "{deck_name} has reached Mega Evolution Apex — the ultimate bond between strategy and execution at {strength} ({tier}). With {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% meta share, this deck has achieved the perfect Mega Stone resonance that defines format peaks."
  },

  // TIER 1: ELITE/LEGENDARY (1-2 decks) - EXTREMELY RARE
  {
    id: 5,
    name: "Champion's Ace",
    requirements: {
      share: { min: 3.00 },
      adjustedWinRate: { min: 53.00 },
      strength: { min: 91.00 }
    },
    template: "{deck_name} is the Champion's Ace — the format-defining threat at {share}% meta share with {adjusted_win_rate}% adjusted win rate and {strength} ({tier}). Like Leon's undefeated Charizard or Cynthia's terrifying Garchomp, every serious competitor must build their strategy around defeating this monster."
  },
  {
    id: 6,
    name: "Legendary Bird Trio",
    requirements: {
      strength: { min: 88.00 },
      adjustedWinRate: { min: 52.00 },
      share: { min: 4.00 },
      matchesPercent: { min: 1.50 }
    },
    template: "{deck_name} has earned Legendary Bird Trio status — {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% meta share. Like Articuno, Zapdos, and Moltres guarding their sacred sites, this deck's proven dominance commands respect across the competitive landscape."
  },

  // TIER 2: ELITE PERFORMERS (5-8 decks) - VERY RARE
  {
    id: 7,
    name: "Dragonite Rush",
    requirements: {
      adjustedWinRate: { min: 57.00 },
      strength: { min: 75.00 },
      matchesPercent: { max: 3 }
    },
    template: "{deck_name} delivers Dragonite Rush — an explosive {adjusted_win_rate}% adjusted win rate ({W}-{L}-{T}) at {strength} ({tier}) across {matches} matches. At {share}% meta share, it strikes with Lance's signature devastation, though limited data leaves questions about sustained dominance."
  },
  {
    id: 8,
    name: "Gym Leader Pillar",
    requirements: {
      share: { min: 4.00 },
      strength: { min: 80.00 },
      adjustedWinRate: { min: 50.00 }
    },
    template: "{deck_name} stands as a Gym Leader Pillar — {share}% meta share at {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches. Like Pewter City's Brock or Saffron's Sabrina, this immovable force shapes how every trainer approaches the format's gauntlet."
  },
  {
    id: 9,
    name: "Gyarados Evolution",
    requirements: {
      strength: { min: 75.00, max: 85.00 },
      adjustedWinRate: { min: 50.50, max: 56.99 },
      share: { min: 0.4, max: 5.00 }
    },
    template: "{deck_name} underwent Gyarados Evolution — transformed from overlooked to overwhelming at {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches. At {share}% meta share, this Magikarp-to-Gyarados breakthrough proves patient optimization creates serpentine terror."
  },

  // TIER 3: STRONG PERFORMERS (8-12 decks) - RARE
  {
    id: 10,
    name: "Shiny Encounter",
    requirements: {
      share: { max: 2.5 },
      strength: { min: 86.00 },
      adjustedWinRate: { min: 53.00 }
    },
    template: "{deck_name} is a Shiny Encounter — exceptionally rare at {share}% adoption but gleaming at {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches. Like spotting a shiny in the wild, those who've mastered it possess something truly extraordinary."
  },
  {
    id: 11,
    name: "Victory Road Climber",
    requirements: {
      share: { min: 0.25, max: 10.00 },
      strength: { min: 80.00, max: 86.00 },
      adjustedWinRate: { min: 50.00 }
    },
    template: "{deck_name} climbs Victory Road — {share}% adoption with {strength} ({tier}) and {adjusted_win_rate}% adjusted win rate across {matches} matches. Like a rising trainer conquering that final cave before the Elite Four, this deck's momentum suggests championship potential awaits."
  },
  {
    id: 12,
    name: "Super Effective Strike",
    requirements: {
      adjustedWinRate: { min: 54.00, max: 70.00 },
      strength: { min: 76.00, max: 90.00 },
      share: { max: 5.00 }
    },
    template: "{deck_name} lands Super Effective Strikes — {adjusted_win_rate}% adjusted win rate ({W}-{L}-{T}) at {strength} ({tier}) across {matches} matches. At just {share}% meta share, this deck exploits type matchups like Starmie demolishing Charizard, devastatingly effective against key threats."
  },
  {
    id: 13,
    name: "Professor Oak's Research",
    requirements: {
      strength: { min: 72.00, max: 85.00 },
      share: { min: 0.3, max: 10.0 },
      adjustedWinRate: { min: 49.50 }
    },
    template: "{deck_name} represents Professor Oak's Research — time-tested reliability at {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% meta share. Like the Professor's original Kanto starters, this proven partner thrives through format evolution and metagame shifts."
  },

  // TIER 4: HIGH PERFORMERS (10-20 decks) - UNCOMMON
  {
    id: 14,
    name: "Type Specialist Master",
    requirements: {
      share: { min: 0.20, max: 5.00 },
      strength: { min: 75.00, max: 82.00 },
      adjustedWinRate: { min: 49.00 }
    },
    template: "{deck_name} achieves Type Specialist Mastery — {share}% of trainers have perfected it to {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches. Like Erika's Grass shrine or Blaine's volcanic arena, focused dedication to a single strategy yields expert-level results."
  },
  {
    id: 15,
    name: "Focus Energy Critical",
    requirements: {
      adjustedWinRate: { min: 60.00 },
      share: { max: 0.30 }
    },
    template: "{deck_name} strikes with Focus Energy Criticals — {adjusted_win_rate}% win rate ({W}-{L}-{T}) at {strength} ({tier}) across {matches} matches and {share}% meta share. Like Persian's Slash landing critical hits, this explosive potential comes with variance risk from limited sample size."
  },
  {
    id: 16,
    name: "Dunsparce Surprise",
    requirements: {
      adjustedWinRate: { min: 51.00 },
      strength: { min: 70.00, max: 84.00 },
      share: { max: 1.50 }
    },
    template: "{deck_name} delivers a Dunsparce Surprise — {adjusted_win_rate}% adjusted win rate ({W}-{L}-{T}) at {strength} ({tier}) across {matches} matches with only {share}% adoption. Like the underestimated Land Snake Pokémon, those who look past its unassuming exterior discover legitimate competitive power."
  },
  {
    id: 17,
    name: "Bond Phenomenon",
    requirements: {
      share: { max: 1.50 },
      avgMatchesPerEntry: { min: 2.50 },
      strength: { min: 68.00, max: 82.00 },
      adjustedWinRate: { min: 48.50 }
    },
    template: "{deck_name} creates a Bond Phenomenon — {share}% of pilots average {avg_matches_per_entry} matches each, demonstrating Ash-Greninja-level synchronization. At {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches, mastery of this partnership unlocks hidden potential."
  },
  {
    id: 18,
    name: "Resting Snorlax",
    requirements: {
      share: { max: 0.80 },
      adjustedWinRate: { min: 50.00, max: 51.99 },
      strength: { min: 62.00, max: 80.00 },
      matches: { min: 5 }
    },
    template: "{deck_name} rests as a Snorlax — dormant at {share}% meta share yet achieving {adjusted_win_rate}% win rate ({W}-{L}-{T}) across {matches} matches at {strength} ({tier}). Like Route 12's sleeping giant, this powerhouse awaits someone to play the Poké Flute and unleash its full strength."
  },
  {
    id: 19,
    name: "Master Ball Success",
    requirements: {
      adjustedWinRate: { min: 58.00 },
      share: { max: 0.80 }
    },
    template: "{deck_name} achieved Master Ball Success — {W}-{L}-{T} for {adjusted_win_rate}% win rate at {strength} ({tier}) across {matches} matches and {share}% meta share. This guaranteed capture rate suggests real potential, but like catching Mewtwo, sustaining excellence requires proving it's skill, not luck."
  },
  {
    id: 20,
    name: "Elite Four Dedication",
    requirements: {
      share: { max: 0.75 },
      avgMatchesPerEntry: { min: 3.50 },
      strength: { min: 66.00, max: 80.00 }
    },
    template: "{deck_name} shows Elite Four Dedication — {share}% meta share but {avg_matches_per_entry} average matches per pilot totaling {matches} games at {strength} ({tier}) with {adjusted_win_rate}% win rate. Like Bruno's Fighting mastery or Agatha's Ghost expertise, single-archetype devotion achieves specialized excellence."
  },
  {
    id: 21,
    name: "Indigo Plateau Marathon",
    requirements: {
      avgMatchesPerEntry: { min: 3.80 },
      strength: { min: 76.00, max: 84.00 },
      share: { max: 2.50 },
      adjustedWinRate: { min: 49.00 }
    },
    template: "{deck_name} runs the Indigo Plateau Marathon — {avg_matches_per_entry} average matches per pilot across {matches} total at {share}% meta share with {adjusted_win_rate}% adjusted win rate and {strength} ({tier}). Like the journey from Pallet Town to Champion, this deck rewards preparation and endurance."
  },
  {
    id: 22,
    name: "Type Advantage Tactician",
    requirements: {
      share: { min: 0.35, max: 2.00 },
      adjustedWinRate: { min: 49.00 },
      strength: { min: 72.00, max: 81.00 }
    },
    template: "{deck_name} is a Type Advantage Tactician — {share}% adoption with {adjusted_win_rate}% adjusted win rate at {strength} ({tier}) across {matches} matches. Like choosing Squirtle to sweep Brock's Rock Gym, smart pilots deploy this deck when the metagame matchup chart favors its strengths."
  },

  // TIER 5: SOLID MID-TIER (20-35 decks) - COMMON
  {
    id: 23,
    name: "Pikachu's Persistence",
    requirements: {
      strength: { min: 71.00, max: 81.00 },
      adjustedWinRate: { min: 48.50 },
      share: { min: 0.70, max: 3.50 }
    },
    template: "{deck_name} shows Pikachu's Persistence — {matches} matches at {share}% meta share with {adjusted_win_rate}% adjusted win rate at {strength} ({tier}). Like Ash's partner refusing evolution, this deck stays true to fundamentals and rewards pilots who grind through the season with consistent dedication."
  },
  {
    id: 24,
    name: "Reliable Starter",
    requirements: {
      strength: { min: 72.00, max: 79.00 },
      adjustedWinRate: { min: 48.50 },
      share: { min: 0.40, max: 1.50 }
    },
    template: "{deck_name} is a Reliable Starter — {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% meta share. Like Bulbasaur, Charmander, or Squirtle in Professor Oak's lab, this dependable partner delivers stable performance regardless of format weather."
  },
  {
    id: 25,
    name: "Wailord Surfacing",
    requirements: {
      strength: { min: 77.00, max: 84.00 },
      share: { min: 0.50, max: 2.20 },
      adjustedWinRate: { min: 49.00 }
    },
    template: "{deck_name} is Wailord Surfacing — {share}% adoption yet {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches. Like the Float Whale Pokémon breaching after deep-sea dwelling, when this massive archetype fully emerges, it will displace everything around it."
  },
  {
    id: 26,
    name: "Eevee's Potential",
    requirements: {
      strength: { min: 68.00, max: 78.00 },
      share: { min: 0.50, max: 5.00 },
      adjustedWinRate: { min: 44.00 }
    },
    template: "{deck_name} carries Eevee's Potential — {matches} matches at {share}% meta share with {adjusted_win_rate}% adjusted win rate at {strength} ({tier}). Like the Evolution Pokémon's eight different paths, pilot creativity and dedication keep evolving this beloved archetype's tournament presence."
  },
  {
    id: 27,
    name: "Rare Candy Staple",
    requirements: {
      strength: { min: 78.00, max: 90.00 },
      share: { min: 2.00, max: 6.00 },
      adjustedWinRate: { min: 46.00, max: 53.00 }
    },
    template: "{deck_name} is a Rare Candy Staple — {share}% of trainers trust it with {adjusted_win_rate}% adjusted win rate at {strength} ({tier}) across {matches} matches. Like the instant evolution item in every competitive deck, this foundational strategy shapes how the format operates."
  },
  {
    id: 28,
    name: "Ho-Oh's Balance",
    requirements: {
      adjustedWinRate: { min: 48.50, max: 51.50 },
      strength: { min: 67.00, max: 77.00 },
      share: { min: 0.60, max: 3.00 }
    },
    template: "{deck_name} achieves Ho-Oh's Balance — {adjusted_win_rate}% adjusted win rate ({W}-{L}-{T}) at {strength} ({tier}) across {matches} matches and {share}% meta share. Like the Rainbow Pokémon's seven-colored wings representing perfect harmony, this deck exists in competitive equilibrium."
  },
  {
    id: 29,
    name: "Regional Form Adaptation",
    requirements: {
      strength: { min: 68.00, max: 82.00 },
      adjustedWinRate: { min: 44.00 },
      share: { min: 0.40, max: 3.00 }
    },
    template: "{deck_name} shows Regional Form Adaptation — {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% meta share. Like Alolan Vulpix thriving in snowy peaks, early success hints this variant adapted to the format's ecosystem, but longevity remains uncertain."
  },
  {
    id: 30,
    name: "Perfect IV Breeding",
    requirements: {
      strength: { min: 70.00, max: 81.00 },
      avgMatchesPerEntry: { min: 3.00 },
      share: { max: 2.00 }
    },
    template: "{deck_name} represents Perfect IV Breeding — {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% meta share. Pilots averaging {avg_matches_per_entry} matches each understand this archetype rewards the patience and expertise of competitive breeding."
  },

  // TIER 6: INTERESTING FRINGE (30-50 decks) - UNCOMMON
  {
    id: 31,
    name: "Unown Message",
    requirements: {
      share: { min: 0.12, max: 1.50 },
      strength: { min: 58.00, max: 82.00 },
      matchesPercent: { min: 0.05 },
      adjustedWinRate: { min: 35.00 }
    },
    template: "{deck_name} spells an Unown Message — {share}% meta share with {matches} matches producing {adjusted_win_rate}% adjusted win rate at {strength} ({tier}). Like the Symbol Pokémon's cryptic ruins alphabet, this data pattern defies conventional analysis and intrigues curious theorycrafters."
  },
  {
    id: 32,
    name: "Ditto Transform Effect",
    requirements: {
      metaImpact: { min: 180.00 },
      strength: { min: 70.00 }
    },
    template: "{deck_name} creates a Ditto Transform Effect — generating {meta_impact} meta impact despite {share}% adoption with {adjusted_win_rate}% win rate at {strength} ({tier}) across {matches} matches. Like the Transform Pokémon, this deck forces opponents to prepare for it or risk copying their strategy against them."
  },
  {
    id: 33,
    name: "Ninjask Speed Boost",
    requirements: {
      avgMatchesPerEntry: { max: 2.50 },
      strength: { max: 73.00 },
      share: { min: 0.15 },
      matchesPercent: { min: 0.08 }
    },
    template: "{deck_name} has Ninjask Speed Boost — {avg_matches_per_entry} average matches per pilot across {matches} total with {adjusted_win_rate}% win rate at {strength} ({tier}). Like the Ninja Pokémon's signature ability, it accelerates quickly in tournaments but struggles to maintain velocity for deep runs."
  },
  {
    id: 34,
    name: "Safari Zone Find",
    requirements: {
      matchesPercent: { min: 0.08, max: 0.50 },
      adjustedWinRate: { min: 44.00 },
      share: { min: 0.10, max: 1.00 },
      strength: { min: 60.00, max: 78.00 }
    },
    template: "{deck_name} is a Safari Zone Find — {matches} matches at {share}% adoption with {adjusted_win_rate}% at {strength} ({tier}). Like catching Chansey or Tauros in the tall grass, adventurous trainers testing this archetype believe they've captured something precious before it flees."
  },
  {
    id: 35,
    name: "Missingno. Glitch",
    requirements: {
      matchesPercent: { min: 0.05, max: 0.40 },
      strength: { min: 55.00, max: 75.00 },
      adjustedWinRate: { max: 47.00 },
      share: { min: 0.10 }
    },
    template: "{deck_name} is a Missingno. Glitch — {matches} matches ({share}% meta share) with {adjusted_win_rate}% adjusted win rate at {strength} ({tier}). Like encountering the infamous data corruption, this deck's existence raises unsettling questions about format dynamics that defy logical explanation."
  },
  {
    id: 36,
    name: "Porygon Upgrade",
    requirements: {
      matchesPercent: { min: 0.05, max: 0.45 },
      strength: { min: 58.00, max: 76.00 },
      adjustedWinRate: { min: 40.00, max: 52.00 },
      share: { min: 0.10 }
    },
    template: "{deck_name} undergoes Porygon Upgrade — {matches} matches at {share}% meta share with {adjusted_win_rate}% win rate at {strength} ({tier}). Like the Virtual Pokémon receiving patches to become Porygon2, innovative deckbuilders are actively debugging and optimizing this digital archetype."
  },
  {
    id: 37,
    name: "Pre-Evolution Faith",
    requirements: {
      adjustedWinRate: { max: 44.00 },
      strength: { min: 54.00, max: 70.00 },
      share: { min: 0.20 },
      matchesPercent: { min: 0.05 }
    },
    template: "{deck_name} requires Pre-Evolution Faith — {share}% of trainers pilot it despite {adjusted_win_rate}% win rate ({W}-{L}-{T}) across {matches} matches at {strength} ({tier}). Like refusing to abandon Magikarp before level 20, true believers know evolution rewards patience despite current struggle."
  },

  // TIER 7: EXPERIMENTAL & FRINGE (50-100 decks) - ABUNDANT
  {
    id: 38,
    name: "Professor Elm's Theory",
    requirements: {
      matchesPercent: { max: 0.03 }
    },
    template: "{deck_name} tests Professor Elm's Theory — only {matches} matches ({share}% meta share) at {strength} ({tier}) with {adjusted_win_rate}% win rate. Like the Johto professor's untested hypotheses on Pokémon eggs, this archetype needs more tournament data before competitive evaluation is possible."
  },
  {
    id: 39,
    name: "Pallet Town Departure",
    requirements: {
      matchesPercent: { min: 0.03, max: 0.10 },
      strength: { max: 65.00 }
    },
    template: "{deck_name} begins its Pallet Town Departure — {matches} matches ({share}% meta share) with {adjusted_win_rate}% win rate at {strength} ({tier}). Like a trainer's first tentative steps on Route 1, this fledgling archetype shows promise but requires experience and refinement to mature."
  },
  {
    id: 40,
    name: "Crasher Wake's Wave",
    requirements: {
      matchesPercent: { min: 0.03, max: 0.15 },
      adjustedWinRate: { min: 48.00 },
      strength: { min: 60.00, max: 75.00 }
    },
    template: "{deck_name} rides Crasher Wake's Wave — {matches} matches at {share}% meta share with {adjusted_win_rate}% win rate at {strength} ({tier}). Like the Pastoria Gym Leader's unpredictable Surf attacks, this deck crashes into tournaments with surprising results, but sustainability is questionable."
  },
  {
    id: 41,
    name: "Bug Catcher's Pride",
    requirements: {
      matchesPercent: { min: 0.05, max: 0.20 },
      share: { max: 0.50 },
      strength: { min: 58.00, max: 72.00 }
    },
    template: "{deck_name} represents Bug Catcher's Pride — {matches} matches at {share}% meta share with {adjusted_win_rate}% win rate at {strength} ({tier}). Like Youngster trainers devoted to their Beedrill and Butterfree, this niche specialist deck appeals to pilots who embrace the underdog type."
  },
  {
    id: 42,
    name: "Cerulean Cave Explorer",
    requirements: {
      strength: { min: 60.00, max: 76.00 },
      adjustedWinRate: { min: 40.00 },
      share: { min: 0.12, max: 1.80 },
      matchesPercent: { min: 0.05 }
    },
    template: "{deck_name} enters Cerulean Cave — {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% meta share. Like venturing into Kanto's most dangerous dungeon seeking Mewtwo, this deck appeals to explorers seeking unconventional paths to victory."
  },

  // TIER 8: FALLBACK
  {
    id: 43,
    name: "Pokédex Entry",
    requirements: {},
    template: "{deck_name} earns a Pokédex Entry at {strength} ({tier}) with {share}% meta share and {adjusted_win_rate}% adjusted win rate across {W}-{L}-{T} ({matches} matches). Every deck, like every Pokémon, contributes uniquely to the competitive ecosystem's biodiversity."
  }
];


// Check if deck meets template requirements
const meetsRequirements = (deck, requirements, totalGames, deckShare) => {
  for (const [key, constraint] of Object.entries(requirements)) {
    let value;
    switch (key) {
      case 'matchesPercent':
        value = (deck.n / totalGames) * 100;
        break;
      case 'share':
        value = deckShare;
        break;
      case 'winPct':
        value = deck.hierarchicalWinPct;
        break;
      case 'strength':
        value = deck.strength;
        break;
      case 'metaImpact':
        value = (deckShare / 100) * deck.hierarchicalWinPct;
        break;
      default:
        value = deck[key];
    }
    if (constraint.min !== undefined && value < constraint.min) return false;
    if (constraint.max !== undefined && value > constraint.max) return false;
  }
  return true;
};

// Find best matching template for deck
const findBestTemplate = (deck, totalGames, deckShare) => {
  for (const template of TEMPLATES) {
    if (meetsRequirements(deck, template.requirements, totalGames, deckShare)) {
      return template;
    }
  }
  return TEMPLATES[TEMPLATES.length - 1];
};

// Generate narrative text from template
const generateNarrative = (deck, template, deckShare) => {
  const metaImpact = (deckShare / 100) * deck.hierarchicalWinPct;
  return template.template
    .replace(/{deck_name}/g, deck.deck)
    .replace(/{share}/g, deckShare.toFixed(2))
    .replace(/{adjusted_win_rate}/g, deck.adjustedWinRate.toFixed(2))
    .replace(/{win_pct}/g, deck.hierarchicalWinPct.toFixed(2))
    .replace(/{strength}/g, deck.strength.toFixed(2))
    .replace(/{tier}/g, getTier(deck.strength))
    .replace(/{matches}/g, deck.n)
    .replace(/{W}/g, deck.wins)
    .replace(/{L}/g, deck.losses)
    .replace(/{T}/g, deck.ties)
    .replace(/{meta_impact}/g, metaImpact.toFixed(2))
    .replace(/{avg_matches_per_entry}/g, (deck.avgMatchesPerEntry || 0).toFixed(2));
};

// Process and rank all data
const processData = () => {
  const formulaResults = hierarchicalBayesian(data);
  const totalGames = data.reduce((sum, [, , wins, losses, ties]) => sum + wins + losses + ties, 0);

  STATE.processedData = data.map(([origRank, deck, wins, losses, ties], idx) => {
    const n = wins + losses + ties;
    const w = wins + 0.5 * ties;
    const observedP = w / n;
    const adjustedWinRate = (w / n) * 100;
    const f = formulaResults[idx];
    const share = (n / totalGames) * 100;
    const hierarchicalWinPct = f.adjustedLowerBound * 100;
    const strength = calculateStrength(hierarchicalWinPct);

    return {
      origRank, deck, wins, losses, ties, n, w, observedP, share,
      adjustedWinRate, hierarchicalWinPct, strength, posteriorMean: f.posteriorMean
    };
  });

  STATE.rankedByFormula = [...STATE.processedData]
    .sort((a, b) => b.strength !== a.strength ? b.strength - a.strength : b.observedP - a.observedP)
    .map((item, idx) => ({ ...item, rank: idx + 1, delta: item.origRank - (idx + 1) }));
};

// Create rank change HTML indicator
const rankChangeHTML = (delta) => {
  const icons = {
    up: '<polyline points="12 19 12 5 5 12"></polyline>',
    down: '<polyline points="12 5 12 19 19 12"></polyline>',
    neutral: '<line x1="5" y1="12" x2="19" y2="12"></line>'
  };
  const [type, prefix] = delta > 0 ? ['positive', '+'] : delta < 0 ? ['negative', ''] : ['neutral', ''];
  const icon = delta > 0 ? 'up' : delta < 0 ? 'down' : 'neutral';
  return `<span class="rank-change ${type}"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">${icons[icon]}</svg> ${prefix}${delta}</span>`;
};

// Generate table HTML
const generateTable = () => {
  const ranked = STATE.rankedByFormula;
  const totalGames = data.reduce((sum, [, , w, l, t]) => sum + w + l + t, 0);
  const headers = ['Rank', 'Deck', 'W', 'L', 'T', 'Games', 'Post Mean%', 'Hier LB%', 'Strength', 'Change'];

  // Reset template counts
  STATE.templateCounts = {};

  let html = `
    <div class="templates-toggle">
      <label class="toggle-label">Show Narratives</label>
      <label class="toggle-switch">
        <input type="checkbox" ${STATE.templatesEnabled ? 'checked' : ''} onchange="window.toggleTemplates()">
        <span class="toggle-slider"></span>
      </label>
    </div>
    <table>
      <thead>
        <tr>${headers.map(h => `<th${h.match(/^(Post|Hier|Change)/) ? ' class="text-center"' : ''}>${h}</th>`).join('')}</tr>
      </thead>
      <tbody>
  `;

  for (const item of ranked) {
    html += `
      <tr>
        <td class="rank">${item.rank}</td>
        <td>${item.deck}</td>
        <td class="center">${item.wins}</td>
        <td class="center">${item.losses}</td>
        <td class="center">${item.ties}</td>
        <td class="center">${item.n}</td>
        <td class="center">${(item.posteriorMean * 100).toFixed(2)}%</td>
        <td class="center">${item.hierarchicalWinPct.toFixed(2)}%</td>
        <td class="strength">${item.strength.toFixed(2)}</td>
        <td class="center">${rankChangeHTML(item.delta)}</td>
      </tr>
    `;

    if (STATE.templatesEnabled) {
      const template = findBestTemplate(item, totalGames, item.share);
      
      // Count template usage
      STATE.templateCounts[template.name] = (STATE.templateCounts[template.name] || 0) + 1;
      
      const narrative = generateNarrative(item, template, item.share);
      const tierClass = `tier-${getTier(item.strength).replace(/\+/g, '-plus')}`;

      html += `
        <tr class="narrative-row">
          <td colspan="10">
            <div class="narrative-content">
              <div class="narrative-header">
                <svg class="template-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                ${template.name}
                <span class="template-badge ${tierClass}">${getTier(item.strength)}</span>
              </div>
              <div class="narrative-text">${narrative}</div>
            </div>
          </td>
        </tr>
      `;
    }
  }

  html += `</tbody></table>`;

  if (STATE.templatesEnabled) {
    html += `
      <div class="template-legend">
        <div class="legend-item"><div class="legend-tier tier-X">X</div><div class="legend-description">100+</div></div>
        <div class="legend-item"><div class="legend-tier tier-S-plus-plus">S++</div><div class="legend-description">97-100</div></div>
        <div class="legend-item"><div class="legend-tier tier-S-plus">S+</div><div class="legend-description">94-97</div></div>
        <div class="legend-item"><div class="legend-tier tier-S">S</div><div class="legend-description">91-94</div></div>
        <div class="legend-item"><div class="legend-tier tier-A">A</div><div class="legend-description">88-91</div></div>
        <div class="legend-item"><div class="legend-tier tier-B">B</div><div class="legend-description">85-88</div></div>
        <div class="legend-item"><div class="legend-tier tier-C">C</div><div class="legend-description">82-85</div></div>
        <div class="legend-item"><div class="legend-tier tier-D">D</div><div class="legend-description">79-82</div></div>
        <div class="legend-item"><div class="legend-tier tier-E">E</div><div class="legend-description">76-79</div></div>
        <div class="legend-item"><div class="legend-tier tier-F">F</div><div class="legend-description">73-76</div></div>
        <div class="legend-item"><div class="legend-tier tier-Unranked">U</div><div class="legend-description">Below 73</div></div>
      </div>
      
      <div class="template-counter">
        <h3>Template Distribution</h3>
        <div class="counter-grid">
          ${Object.entries(STATE.templateCounts)
            .sort((a, b) => b[1] - a[1])
            .map(([name, count]) => `
              <div class="counter-item">
                <span class="counter-name">${name}</span>
                <span class="counter-value">${count}</span>
              </div>
            `).join('')}
        </div>
      </div>
    `;
  }

  return html;
};

// Update table display
const updateTable = () => {
  document.querySelector('.table-wrapper').innerHTML = generateTable();
};

// Toggle templates visibility
window.toggleTemplates = () => {
  STATE.templatesEnabled = !STATE.templatesEnabled;
  updateTable();
};

// Initialize application
const init = () => {
    processData();

    document.getElementById('root').innerHTML = `
        <div class="container">
            <h1>Tournament Deck Ranking Analysis</h1>

            <div class="card">
                <h2>Methodology</h2>
                <div class="methodology-grid">
                    <div class="methodology-box formula">
                        <h3>Hierarchical Bayesian Estimation with Meta Awareness</h3>
                        <p><strong>What it does:</strong> This method is intelligent about the entire tournament landscape. It first analyzes tens of thousands of results across all decks to understand: "What does typical performance look like in this meta?" Then it ranks each deck by intelligently blending two sources of information: what the broader meta tells us AND what this specific deck's individual results show. A deck with few results gets slightly pulled toward the meta average (since we have less certainty). A deck with extensive results gets ranked almost purely on its own merit (since we're very confident).</p>
                        <p><strong>How to think about it:</strong> Imagine reviewing tournament data from tens of thousands of matches. You notice overall patterns: "Most decks win between 45-55% of their games, but there's some variance in the meta." Now when you see a deck with very few games and a strange win rate, you're rightfully skeptical—update your estimate toward what you know from the broader data. But a deck that's been played extensively and consistently wins 65% of the time? That's real.</p>
                    </div>
                </div>
            </div>

            <div class="tabs-container">
                <div class="tabs-header">
                    <button class="tab-button formula active" onclick="switchTab('formula')">Rankings</button>
                </div>
                <div class="table-wrapper">${generateTable()}</div>
            </div>

            <div class="card insights">
                <h2>Key Features</h2>
                <div class="insights-list">
                    <p><strong>Dynamic z-scores:</strong> Intelligently scales confidence based on sample size. Tiny samples (n&lt;30) use 99th percentile, medium samples use 98th, and large samples (n&gt;1000) use 95th percentile.</p>
                    <p><strong>Better strength scaling:</strong> Maps 30-60% win rates to 1-100 strength, where 50% = 50 points (average), creating meaningful rankings.</p>
                    <p><strong>Meta diversity adjustment:</strong> Adapts confidence based on whether the meta is tightly grouped or widely spread.</p>
                    <p><strong>Small meta boost:</strong> Applies a progressive boost for metas with fewer than 100 unique decks, ensuring score differentiation remains meaningful.</p>
                    <p><strong>Template narratives:</strong> Toggle narrative descriptions for each deck that adapt based on performance metrics.</p>
                </div>
            </div>
        </div>
    `;

    updateTable();
};

document.addEventListener('DOMContentLoaded', init);