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
[500, "Rampardos Type: Null", 4, 3, 0]
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
  if (strength >= 84) return 'B';
  if (strength >= 80) return 'C';
  if (strength >= 75) return 'D';
  if (strength >= 70) return 'E';
  if (strength >= 65) return 'F';
  return 'Unranked';
};

const TEMPLATES = [
  // TIER 1: ELITE/LEGENDARY (1-2 decks) - EXTREMELY RARE
  {
    id: 1,
    name: "Champion's Throne",
    requirements: {
      share: { min: 15.00 },
      adjustedWinRate: { min: 53.00 },
      strength: { min: 92.00 }
    },
    template: "{deck_name} sits atop the Champion's Throne — dominating {share}% of tournaments with an exceptional {adjusted_win_rate}% adjusted win rate. At {strength} ({tier}), this deck commands the format with the authority of a true Champion, defining the very rules opponents must follow."
  },
  {
    id: 2,
    name: "Legendary Pokémon",
    requirements: {
      strength: { min: 88.00 },
      adjustedWinRate: { min: 52.00 },
      share: { min: 4.00 },
      matchesPercent: { min: 1.50 }
    },
    template: "{deck_name} is Legendary — {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches. At {share}% of the format, it represents the complete package: powerful, versatile, and consistently proven across the competitive landscape."
  },

  // TIER 2: ELITE PERFORMERS (5-8 decks) - VERY RARE
  {
    id: 3,
    name: "Unstoppable Force",
    requirements: {
      adjustedWinRate: { min: 57.00 },
      strength: { min: 84.00 }
    },
    template: "{deck_name} is an Unstoppable Force — an extraordinary {adjusted_win_rate}% adjusted win rate ({W}-{L}-{T}) across {matches} matches. At {strength} ({tier}) with {share}% of the meta, this archetype's dominance is undeniable and backed by substantial tournament data."
  },
  {
    id: 4,
    name: "Format Pillar",
    requirements: {
      share: { min: 5.00 },
      strength: { min: 83.00 },
      adjustedWinRate: { min: 50.00 }
    },
    template: "{deck_name} stands as the Format Pillar — representing {share}% of competitive play at {strength} ({tier}). With {adjusted_win_rate}% adjusted win rate across {matches} matches, this anchor defines the metagame. Every serious trainer builds their strategy around or against it."
  },
  {
    id: 5,
    name: "Breakthrough Evolution",
    requirements: {
      strength: { min: 81.00, max: 87.00 },
      adjustedWinRate: { min: 50.50, max: 56.99 },
      share: { min: 1.50, max: 5.00 }
    },
    template: "{deck_name} has undergone a Breakthrough Evolution — emerging with {strength} ({tier}) performance and {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% of the format. The competitive community is taking notice of this archetype's explosive potential."
  },

  // TIER 3: STRONG PERFORMERS (8-12 decks) - RARE
  {
    id: 6,
    name: "Hidden Gem",
    requirements: {
      share: { max: 2.50 },
      strength: { min: 86.00 },
      adjustedWinRate: { min: 52.00 }
    },
    template: "{deck_name} is a Hidden Gem — overlooked at just {share}% adoption, yet it delivers {strength} ({tier}) performance with {adjusted_win_rate}% adjusted win rate across {matches} matches. Those who've discovered it possess a secret weapon that few opponents see coming."
  },
  {
    id: 7,
    name: "Rising Star",
    requirements: {
      share: { min: 2.50, max: 6.00 },
      strength: { min: 80.00, max: 86.00 },
      adjustedWinRate: { min: 50.00 }
    },
    template: "{deck_name} is a Rising Star — {share}% of trainers have adopted it with {strength} ({tier}) results and {adjusted_win_rate}% adjusted win rate across {matches} matches. Tournament success is building momentum for what could become the next dominant force."
  },
  {
    id: 8,
    name: "Type Advantage Master",
    requirements: {
      adjustedWinRate: { min: 54.00, max: 67.00 },
      strength: { min: 79.00, max: 85.00 },
      share: { max: 2.00 }
    },
    template: "{deck_name} is a Type Advantage Master — posting {adjusted_win_rate}% adjusted win rate ({W}-{L}-{T}) across {matches} matches at {strength} ({tier}). At only {share}% of the meta, this deck's surgical precision against key matchups makes it devastatingly effective in skilled hands."
  },
  {
    id: 9,
    name: "Tournament Essential",
    requirements: {
      strength: { min: 78.00, max: 85.00 },
      share: { min: 1.00, max: 3.50 },
      adjustedWinRate: { min: 49.50 }
    },
    template: "{deck_name} is Tournament Essential at {strength} ({tier}) — consistently appearing in competitive play with {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% of the format. Reliable performance and proven consistency make it invaluable to serious trainers."
  },

  // TIER 4: HIGH PERFORMERS (10-20 decks) - UNCOMMON
  {
    id: 10,
    name: "Specialist's Domain",
    requirements: {
      share: { min: 0.40, max: 2.00 },
      strength: { min: 72.00, max: 82.00 },
      adjustedWinRate: { min: 49.00 }
    },
    template: "{deck_name} is a Specialist's Domain — {share}% of trainers have mastered it at {strength} ({tier}). With {adjusted_win_rate}% adjusted win rate across {matches} matches, it proves that deep preparation and focused expertise yield consistent competitive excellence."
  },
  {
    id: 11,
    name: "Burst Damage",
    requirements: {
      adjustedWinRate: { min: 57.00 },
      share: { max: 0.30 },
      matches: { max: 8 }
    },
    template: "{deck_name} delivers Burst Damage — striking with lethal {adjusted_win_rate}% win rate ({W}-{L}-{T}) across {matches} matches at {share}% of the meta. Rating: {strength} ({tier}). Explosive power with minimal sample creates extreme high-variance potential for those seeking big upside."
  },
  {
    id: 12,
    name: "Proven Threat",
    requirements: {
      adjustedWinRate: { min: 51.00 },
      matches: { min: 12, max: 200 },
      strength: { min: 70.00, max: 84.00 },
      share: { max: 1.50 }
    },
    template: "{deck_name} is a Proven Threat — {adjusted_win_rate}% adjusted win rate ({W}-{L}-{T}) across {matches} matches at {strength} ({tier}). At just {share}% adoption, this underrated archetype demonstrates real competitive viability with a meaningful sample size. Those who've mastered it understand its true potential."
  },
  {
    id: 13,
    name: "Ace Trainer",
    requirements: {
      share: { max: 1.50 },
      avgMatchesPerEntry: { min: 2.50 },
      strength: { min: 68.00, max: 82.00 },
      adjustedWinRate: { min: 48.50 }
    },
    template: "{deck_name} belongs to Ace Trainers — a dedicated community pilots it at {share}% of the format, averaging {avg_matches_per_entry} matches per trainer. At {strength} ({tier}), their {adjusted_win_rate}% adjusted win rate across {matches} matches rewards expertise and unwavering commitment."
  },
  {
    id: 14,
    name: "Sleeping Snorlax",
    requirements: {
      share: { max: 0.80 },
      adjustedWinRate: { min: 50.00, max: 51.99 },
      strength: { min: 68.00, max: 80.00 },
      matches: { min: 5 }
    },
    template: "{deck_name} rests as a Sleeping Snorlax at merely {share}% of the meta — a dormant powerhouse waiting to be awakened. Its {adjusted_win_rate}% win rate ({W}-{L}-{T}) across {matches} matches hints at {strength} ({tier}) potential. The few who've discovered it know its true competitive worth."
  },
  {
    id: 15,
    name: "Perfect Catch",
    requirements: {
      adjustedWinRate: { min: 65.00 },
      share: { max: 0.80 },
      matches: { min: 3, max: 40 }
    },
    template: "{deck_name} achieved a Perfect Catch: {W}-{L}-{T} for {adjusted_win_rate}% win rate across {matches} matches ({share}% of meta). At {strength} ({tier}), this exceptional performance shows genuine potential—but broader tournament viability requires continued success."
  },
  {
    id: 16,
    name: "Devoted Master",
    requirements: {
      share: { max: 0.75 },
      avgMatchesPerEntry: { min: 3.50 },
      strength: { min: 66.00, max: 80.00 }
    },
    template: "{deck_name} reflects one trainer's unwavering devotion — existing at only {share}% of the meta yet accumulating {matches} total matches means {avg_matches_per_entry} average matches per entry. Results: {adjusted_win_rate}% win rate at {strength} ({tier}). Such dedication speaks louder than mass popularity."
  },
  {
    id: 17,
    name: "Endurance Runner",
    requirements: {
      avgMatchesPerEntry: { min: 3.80 },
      strength: { min: 76.00, max: 84.00 },
      share: { max: 2.50 },
      adjustedWinRate: { min: 49.00 }
    },
    template: "{deck_name} is built for Endurance — rewarding trainers with stamina and preparation. With {avg_matches_per_entry} average matches per pilot across {matches} total matches at {share}% of the meta, it achieves {adjusted_win_rate}% adjusted win rate at {strength} ({tier}) through consistency and tournament durability."
  },
  {
    id: 18,
    name: "Tactical Counter",
    requirements: {
      share: { min: 0.35, max: 2.00 },
      adjustedWinRate: { min: 49.00 },
      strength: { min: 72.00, max: 81.00 }
    },
    template: "{deck_name} is a Tactical Counter — only {share}% of trainers employ it, but {adjusted_win_rate}% adjusted win rate at {strength} ({tier}) across {matches} matches makes it a devastating pocket pick. Built to exploit critical vulnerabilities in the current metagame."
  },

  // TIER 5: SOLID MID-TIER (20-35 decks) - COMMON
  {
    id: 19,
    name: "Grinder's Testament",
    requirements: {
      strength: { min: 71.00, max: 81.00 },
      adjustedWinRate: { min: 48.50 },
      share: { min: 0.70, max: 3.50 }
    },
    template: "{deck_name} is the Grinder's Testament — {matches} matches at {share}% of the format demonstrate reliable {adjusted_win_rate}% adjusted win rate at {strength} ({tier}). Built for the long tournament season, this archetype rewards consistency, preparation, and the relentless hustle of dedicated trainers."
  },
  {
    id: 20,
    name: "Steadfast Guardian",
    requirements: {
      strength: { min: 72.00, max: 79.00 },
      adjustedWinRate: { min: 48.50 },
      share: { min: 0.40, max: 1.50 }
    },
    template: "{deck_name} is a Steadfast Guardian at {strength} ({tier}) — delivering {adjusted_win_rate}% adjusted win rate across {matches} matches at just {share}% of the format. Reliable and unpretentious, it proves consistently effective regardless of metagame shifts."
  },
  {
    id: 21,
    name: "Awakening Titan",
    requirements: {
      strength: { min: 77.00, max: 84.00 },
      share: { min: 0.50, max: 2.20 },
      adjustedWinRate: { min: 49.00 }
    },
    template: "{deck_name} stirs as an Awakening Titan — only {share}% of trainers have recognized its potential, yet it achieves {strength} ({tier}) with {adjusted_win_rate}% adjusted win rate across {matches} matches. When this archetype fully awakens, the entire competitive landscape will tremble."
  },
  {
    id: 22,
    name: "Volume Leader",
    requirements: {
      strength: { min: 68.00, max: 78.00 },
      share: { min: 0.50, max: 2.00 },
      adjustedWinRate: { min: 47.50 }
    },
    template: "{deck_name} leads through Volume — accumulating {matches} matches at {share}% of the meta demonstrates {adjusted_win_rate}% adjusted win rate at {strength} ({tier}). Pilot dedication and consistent tournament attendance keep this archetype alive and relevant in the metagame."
  },
  {
    id: 23,
    name: "Reliable Partner",
    requirements: {
      strength: { min: 80.00, max: 90.00 },
      share: { min: 2.00, max: 6.00 },
      adjustedWinRate: { min: 50.00, max: 53.00 }
    },
    template: "{deck_name} is the Reliable Partner — {share}% of trainers trust it with {adjusted_win_rate}% adjusted win rate at {strength} ({tier}) across {matches} matches. Steady results and stable metagame presence prove its worth as a foundational format strategy."
  },
  {
    id: 24,
    name: "Perfect Equilibrium",
    requirements: {
      adjustedWinRate: { min: 48.50, max: 51.50 },
      strength: { min: 67.00, max: 77.00 },
      share: { min: 0.60, max: 3.00 }
    },
    template: "{deck_name} embodies Perfect Equilibrium at exactly {adjusted_win_rate}% adjusted win rate ({W}-{L}-{T}) across {matches} matches. At {strength} ({tier}) and {share}% of the meta, it represents format balance — neither over nor undervalued, simply fair and honest."
  },
  {
    id: 25,
    name: "Emerging Contender",
    requirements: {
      strength: { min: 68.00, max: 78.00 },
      adjustedWinRate: { min: 47.00 },
      share: { min: 0.40, max: 2.00 }
    },
    template: "{deck_name} is an Emerging Contender at {strength} ({tier}) — posting {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% of the meta. Early tournament success signals genuine potential; continued performance will reveal if this is a temporary spike or sustainable breakthrough."
  },
  {
    id: 26,
    name: "Master's Tool",
    requirements: {
      strength: { min: 70.00, max: 81.00 },
      avgMatchesPerEntry: { min: 3.00 },
      share: { max: 2.00 }
    },
    template: "{deck_name} is a Master's Tool — it rewards deep knowledge and practice with {strength} ({tier}) performance. Achieving {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% of the meta, pilots average {avg_matches_per_entry} matches per entry, proving extended tournament runs by true experts."
  },

  // TIER 6: INTERESTING FRINGE (30-50 decks) - UNCOMMON
  {
    id: 27,
    name: "Curious Anomaly",
    requirements: {
      share: { min: 0.20, max: 1.50 },
      strength: { min: 64.00, max: 82.00 }
    },
    template: "{deck_name} is a Curious Anomaly — {share}% of the meta with {matches} matches producing {adjusted_win_rate}% adjusted win rate at {strength} ({tier}). This data pattern defies conventional wisdom, suggesting either hidden potential or unusual sample dynamics worth investigating."
  },
  {
    id: 28,
    name: "Metagame Shifter",
    requirements: {
      metaImpact: { min: 180.00 },
      strength: { min: 70.00 }
    },
    template: "{deck_name} is a Metagame Shifter — generating {meta_impact} meta impact despite {share}% adoption. At {strength} ({tier}) with {adjusted_win_rate}% win rate across {matches} matches, it disproportionately influences how opponents prepare and deckbuild for competition."
  },
  {
    id: 29,
    name: "Swift Strike",
    requirements: {
      avgMatchesPerEntry: { max: 2.50 },
      strength: { max: 73.00 },
      share: { min: 0.20 }
    },
    template: "{deck_name} is a Swift Strike — pilots average only {avg_matches_per_entry} matches per entry, suggesting quick tournament eliminations. {matches} total matches with {adjusted_win_rate}% win rate at {strength} ({tier}). High early impact, brief duration—built for aggressive strategies."
  },
  {
    id: 30,
    name: "Explorer's Path",
    requirements: {
      matchesPercent: { min: 0.15, max: 0.50 },
      adjustedWinRate: { min: 46.50 },
      share: { max: 1.00 },
      strength: { min: 65.00, max: 78.00 }
    },
    template: "{deck_name} follows the Explorer's Path — piloted by adventurous trainers, it accumulates {matches} matches at {share}% adoption. Results of {adjusted_win_rate}% at {strength} ({tier}) suggest potential worth investigating as the format continues to evolve."
  },
  {
    id: 31,
    name: "Format Mystery",
    requirements: {
      matchesPercent: { min: 0.12, max: 0.40 },
      strength: { min: 60.00, max: 75.00 }
    },
    template: "{deck_name} is a Format Mystery — appearing in {matches} matches ({share}% of meta), and only a {adjusted_win_rate}% adjusted win rate at {strength} ({tier}) raises intriguing questions about why so many people chose this deck."
  },
  {
    id: 32,
    name: "Work in Progress",
    requirements: {
      matchesPercent: { min: 0.12, max: 0.45 },
      strength: { min: 62.00, max: 76.00 }
    },
    template: "{deck_name} is a Work in Progress — {matches} tournament matches at {share}% of the meta show early results. At {strength} ({tier}) with {adjusted_win_rate}% win rate, this emerging archetype is being actively tested, refined, and developed by the innovative community."
  },
  {
    id: 33,
    name: "Believer's Choice",
    requirements: {
      adjustedWinRate: { max: 45.00 },
      strength: { min: 58.00, max: 70.00 },
      share: { min: 0.30 }
    },
    template: "{deck_name} is backed by devoted Believers — {share}% of trainers continue piloting it despite {adjusted_win_rate}% win rate ({W}-{L}-{T}) across {matches} matches at {strength} ({tier}). Passion and unwavering loyalty to potential transcend statistical performance."
  },

  // TIER 7: EXPERIMENTAL & FRINGE (50-100 decks) - ABUNDANT
  {
    id: 34,
    name: "Untested Prospect",
    requirements: {
      matchesPercent: { max: 0.50 }
    },
    template: "{deck_name} is an Untested Prospect with only {matches} tournament matches ({share}% of meta). At {strength} ({tier}), its {adjusted_win_rate}% record is suggestive but insufficient for definitive assessment. Competitive viability requires further testing and refinement."
  },
  {
    id: 35,
    name: "Fringe Contender",
    requirements: {
      strength: { min: 65.00, max: 76.00 },
      adjustedWinRate: { min: 44.00 },
      share: { min: 0.20, max: 1.80 }
    },
    template: "{deck_name} sits on the Fringe at {strength} ({tier}) — achieving {adjusted_win_rate}% adjusted win rate across {matches} matches at {share}% of the format. Viable and interesting for theorycrafters, but lacks the consistency to breach elite competitive territory."
  },

  // TIER 8: FALLBACK
  {
    id: 36,
    name: "Format Participant",
    requirements: {},
    template: "{deck_name} is represented in the format at {strength} ({tier}) with {share}% metagame share and {adjusted_win_rate}% adjusted win rate across {W}-{L}-{T} ({matches} matches)."
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
        <div class="legend-item"><div class="legend-tier tier-B">B</div><div class="legend-description">84-88</div></div>
        <div class="legend-item"><div class="legend-tier tier-C">C</div><div class="legend-description">80-84</div></div>
        <div class="legend-item"><div class="legend-tier tier-D">D</div><div class="legend-description">75-80</div></div>
        <div class="legend-item"><div class="legend-tier tier-E">E</div><div class="legend-description">70-75</div></div>
        <div class="legend-item"><div class="legend-tier tier-F">F</div><div class="legend-description">65-70</div></div>
        <div class="legend-item"><div class="legend-tier tier-Unranked">U</div><div class="legend-description">Below 65</div></div>
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