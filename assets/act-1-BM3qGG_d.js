const e=`#section Act 1
右上に行き {kill|ヒロイック} を倒す
➞ {enter|1_1_town} #Lioneye's Watch
タークリー {quest|a1q1} #Enemy at the Gate
➞ {enter|1_1_2} #The Coast
#ifdef LEAGUE_START
    Get {waypoint_get}
#endif
➞ {enter|1_1_3} #The Mud Flats
{quest_text|グリフ}を3個見つける
    #sub 小さな小川が3つのロアの巣をつないでいる
    #sub 通常は三角形を形成するが、まれに直線になることもある
➞ {enter|1_1_4_1} #The Submerged Passage
#ifdef LEAGUE_START
    {waypoint|1_1_2} #The Coast
    ➞ {enter|1_1_2a} #The Tidal Island
    Find and kill {kill|ヘイルレイク}, take {quest_text|薬箱}
        #sub Go {dir|270}
        #sub 崖を見つけたら、振り返って{dir|90}に進んでください
        #sub 推奨レベル: 4
    {logout}
    タークリー {quest|a1q4} #Breaking Some Eggs
    ネッサ {quest|a1q5} #Mercy Mission
#endif
#ifndef LEAGUE_START
    {waypoint|1_1_town} #Lioneye's Watch
    ネッサ {quest|a1q5} #Mercy Mission
#endif
{waypoint|1_1_4_1} #The Submerged Passage
橋を見つけたら {portal|set}を設置して先に進んでください
➞ {enter|1_1_5} #The Ledge
➞ {enter|1_1_6} #The Climb
➞ {enter|1_1_7_1} #The Lower Prison
{waypoint|1_1_town} #Lioneye's Watch
Take {portal|use}
➞ {enter|1_1_4_0} #The Flooded Depths
    #sub 橋の右側に進んでください
Find and kill {kill|海の住人}
    #sub 入口の反対側を探してください
    #sub 大きな空の部屋を探してください
{logout}
タークリー {quest|a1q7} #The Dweller of the Deep
ネッサ {quest|a1q2|a1q2b} #The Caged Brute
{waypoint|1_1_7_1} #The Lower Prison
#ifdef LEAGUE_START
    Complete {trial}
        #sub 通常は{dir|45}
#endif
➞ {enter|1_1_7_2} #The Upper Prison
#ifdef LEAGUE_START
#endif
➞ {arena|監獄長の宿舎}, kill {kill|投獄卿、ブルータス}
    #sub 推奨レベル: 8～10
{logout}
タークリー {quest|a1q2|a1q2} #The Caged Brute
{waypoint|1_1_8} #Prisoner's Gate
➞ {enter|1_1_9} #The Ship Graveyard
    #sub 道路の隣にある崖を下りてください
Find {area|1_1_9a}, place {portal|set} #The Ship Graveyard Cave
➞ {enter|1_1_11_1} #The Cavern of Wrath
{waypoint|1_1_town} #Lioneye's Watch
Take {portal|use}
➞ {enter|1_1_9a} #The Ship Graveyard Cave
Find {quest_text|Slave Girl}, take {quest_text|オールフレイム}
    #sub 入口の反対側を探してください
➞ {enter|1_1_9}, kill {kill|フェアグレーヴズ船長} #The Ship Graveyard
{logout}
ベストル {quest|a1q6} #The Marooned Mariner
ネッサ {quest|a1q3} #The Siren's Cadence
{waypoint|1_1_11_1} #The Cavern of Wrath
➞ {enter|1_1_11_2} #The Cavern of Anger
    #sub 水に沿って進んでください
➞ {arena|マーヴェイルの隠れ家}, kill {kill|セイレーン、マーヴェイル}
    #sub 水に沿って進んでください
    #sub 推奨レベル: 11-13
`;export{e as default};
