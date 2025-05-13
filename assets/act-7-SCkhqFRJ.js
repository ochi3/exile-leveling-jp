const e=`#section Act 7
{waypoint|2_7_town} #The Bridge Encampment
➞ {enter|2_7_1} #The Broken Bridge
#ifdef LEAGUE_START
    Find and take {quest_text|銀のロケット}
        #sub 道に沿って進み、壊れた{waypoint}を探してください
#endif
➞ {enter|2_7_2} #The Crossroads
    #sub 道に沿って進んでください
Get {waypoint_get}
➞ {enter|2_7_3} #The Fellshrine Ruins
    #sub Go {dir|135}
➞ {enter|2_7_4} #The Crypt
    #sub 道に沿って進んでください
#ifdef LEAGUE_START
    Complete {trial}
    Get {crafting}
#endif
{generic|石棺}を見つけて次の階に進んでください
Find and take {quest_text|マリガロの地図}
{logout}
{waypoint|2_7_2} #The Crossroads
➞ {enter|2_7_5_1} #The Chamber of Sins Level 1
    #sub Go {dir|315}
Get {crafting}
Get {waypoint_get}
Activate {quest_text|マップデバイス} with {quest_text|マリガロの地図}
➞ {enter|2_7_5_map} #Maligaro's Sanctum
➞ {arena|マリガロの工房}, kill {kill|芸術家、マリガロ}, take {quest_text|ブラックヴェノム}
    #sub エリアの端に沿って進み、隅にある橋を渡ってください
    #sub 橋は通常、対角線上の隅に出現します
{logout}
ヘレナ {quest|a7q2} #Essence of the Artist
#ifdef LEAGUE_START
    ウェイラム・ロス {quest|a7q5} #The Silver Locket
#endif
{waypoint|2_7_5_1} #The Chamber of Sins Level 1
シルク {quest|a7q3}, take {quest_text|黒曜石の鍵} #Web of Secrets
➞ {enter|2_7_5_2} #The Chamber of Sins Level 2
    #sub {waypoint}と同じ方向に進んでください
#ifdef LEAGUE_START
    Complete {trial}
    Get {crafting}
#endif
{generic|隠し通路}を開いて ➞ {enter|2_7_6} #The Den
➞ {enter|2_7_7} #The Ashen Fields
➞ {arena|要塞の野営地}, kill {kill|森の王、グルースト}
    #sub Go {dir|225}
➞ {enter|2_7_8} #The Northern Forest
{waypoint|2_7_town} #The Bridge Encampment
エラミール {quest|a7q1} #The Master of a Million Faces
{waypoint|2_6_8} #Prisoner's Gate
➞ {arena|火を飲む者の谷}, kill {kill|裂けし者、アバラス}
    #sub 道路の隣にある崖を下りてください
{portal|use}
ベストル {quest|a6q7} #The Cloven One
{waypoint|2_7_8} #The Northern Forest
➞ {enter|2_7_10} #The Causeway
Get {crafting}
Find and take {quest_text|キシャラの星}
➞ {enter|2_7_11} #The Vaal City
Find {waypoint_get}
{waypoint|2_7_8} #The Northern Forest
➞ {enter|2_7_9} #The Dread Thicket
Find and take 7x{quest_text|ホタル}
Get {crafting}
➞ {arena|絶望のねぐら}, kill {kill|絶望の母、グラスクル}
{portal|use}
エラミール {quest|a7q9} #Queen of Despair
ウェイラム・ロス {quest|a7q6} #Kishara's Star
{waypoint|Labyrinth_Airlock} #Aspirants' Plaza
{ascend|cruel}
Get {crafting|2_Labyrinth_boss_3}
{waypoint|2_7_11} #The Vaal City
Hand in {quest|a7q7} #Lighting the Way
➞ {enter|2_7_12_1} #The Temple of Decay Level 1
➞ {enter|2_7_12_2} #The Temple of Decay Level 2
Get {crafting}
➞ {arena|アラカーリの巣}, kill {kill|影を紡ぐ者、アラカーリ}
`;export{e as default};
