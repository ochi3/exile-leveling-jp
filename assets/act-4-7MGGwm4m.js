const e=`#section Act 4
➞ {enter|1_4_1} #The Aqueduct
➞ {enter|1_4_town} #Highgate
➞ {enter|1_4_2} #The Dried Lake
Find and kill {kill|浄化の皇帝、ヴォール}, take {quest_text|デシュレットの旗}
    #sub 推奨レベル: 30
Get {crafting}
{logout}
オユン {quest|a4q2} #Breaking the Seal
➞ {enter|1_4_3_1} #The Mines Level 1
Get {crafting}
➞ {enter|1_4_3_2} #The Mines Level 2
Free {quest_text|デシュレット}
➞ {enter|1_4_3_3} #The Crystal Veins
Get {crafting}
{waypoint|1_4_town} #Highgate
タスニ {quest|a4q6} #An Indomitable Spirit
{waypoint|1_3_town} #The Sarn Encampment
➞ {enter|Labyrinth_Airlock}, get {waypoint_get} #Aspirants' Plaza
{ascend|normal}
Get {crafting|1_Labyrinth_boss_3}
{waypoint|1_4_3_3} #The Crystal Veins
➞ {enter|1_4_5_1} #Daresso's Dream
➞ {enter|1_4_5_2} #The Grand Arena
Get {crafting}
{waypoint|1_4_3_3} #The Crystal Veins
➞ {enter|1_4_4_1} #Kaom's Dream
➞ {enter|1_4_4_3} #Kaom's Stronghold
    #sub Go {dir|45}
    #sub 橋に沿って進んでください
Get {crafting}
➞ {arena|王のカルデラ}, kill {kill|カオム王}, take {quest_text|憤激の目}
{portal|use}
{waypoint|1_4_5_2} #The Grand Arena
➞ {arena|刃のリング}, kill {kill|剣の王、ダレッソ}, take {quest_text|欲望の目}
    #sub {dir|225}に進み、出口をたどりながら{dir|270}を維持してください
{logout}
{waypoint|1_4_3_3} #The Crystal Veins
Talk to {generic|レディーディアーラ}
➞ {enter|1_4_6_1} #The Belly of the Beast Level 1
➞ {enter|1_4_6_2} #The Belly of the Beast Level 2
➞ {arena|魔獣の深部}, kill {kill|唾棄すべき姿、パイエティ}
Talk to {generic|パイエティ}
Get {crafting}
➞ {enter|1_4_6_3} #The Harvest
Find and kill {kill|ドードゥリ・ダークタン}, take {quest_text|マラカイの肺}
Find and kill {kill|審問官、マリガロ}, take {quest_text|マラカイの心臓}
Find and kill {kill|アンブラのシャヴロン}, take {quest_text|マラカイの腸}
マラカイの肉体 {quest|a4q5} #Corpus Malachus
➞ {arena|ブラックコア}, kill {kill|悪夢、マラカイ}
    #sub 推奨レベル: 34-35
{logout}
ディアーラ {quest|a4q1} #The Eternal Nightmare
➞ {enter|1_4_7} #The Ascent
Get {crafting}
Activate {quest_text|レバー}, use {quest_text|オリアスへのポータル}
`;export{e as default};
