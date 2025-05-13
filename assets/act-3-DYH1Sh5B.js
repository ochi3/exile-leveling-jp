const e=`#section Act 3
➞ {enter|1_3_1} #The City of Sarn
Get {crafting}
{generic|クラリッサ}を助けて話しかけてください
➞ {enter|1_3_town} #The Sarn Encampment
➞ {enter|1_3_2} #The Slums
    #sub Go {dir|0}
➞ {enter|1_3_3_1} #The Crematorium
    #sub 階段に沿って進んでください
#ifdef LEAGUE_START
    Complete {trial}
#endif
Find and kill {kill|パイエティ}, take {quest_text|トールマンの腕輪}
Get {crafting}
{logout}
Talk to {generic|クラリッサ}, take {quest_text|下水道の鍵}
マラモラ {quest|a3q1} #Lost in Love
➞ {enter|1_3_2} #The Slums
    #sub Go {dir|0}
➞ {enter|1_3_10_1} #The Sewers
Find 1x{quest_text|プラチナの胸像}
Get {waypoint_get}
Find 2x{quest_text|プラチナの胸像}
➞ {enter|1_3_5} #The Marketplace
Get {waypoint_get}
#ifdef LEAGUE_START
    ➞ {enter|1_3_6} #The Catacombs
        #sub 近くを探してください
    Complete {trial}
    Get {crafting}
#endif
{logout}
ハーガン {quest|a3q11} #Victario's Secrets
{waypoint|1_3_5} #The Marketplace
➞ {enter|1_3_7} #The Battlefront
    #sub Search {dir|0}
Get {waypoint_get}
    #sub Go {dir|315}
Find and take {quest_text|リボンスプール}
    #sub Go {dir|225}
➞ {enter|1_3_8_1} #The Solaris Temple Level 1
    #sub Go {dir|45}
➞ {enter|1_3_8_2} #The Solaris Temple Level 2
➞ {arena|永遠の研究所}, get {crafting}
{waypoint|1_3_7} #The Battlefront
➞ {enter|1_3_9} #The Docks
    #sub Go {dir|315}
    #sub 推奨レベル: 24
Find and take {quest_text|魔術燃料}
{logout}
{waypoint|1_3_8_2} #The Solaris Temple Level 2
Talk to {generic|Lady Dialla}
レディーディアーラ {quest|a3q4} #The Ribbon Spool
レディーディアーラ {quest|a3q5}, take {quest_text|インファーナルタルク} #Fiery Dust
{waypoint|1_3_10_1} #The Sewers
Burn the {quest_text|Undying Blockage}
Get {crafting}
➞ {enter|1_3_13} #The Ebony Barracks
Get {waypoint_get}
Kill {kill|グラヴィシウス将軍}
    #sub Go {dir|315}
➞ {enter|1_3_14_1} #The Lunaris Temple Level 1
➞ {enter|1_3_14_2} #The Lunaris Temple Level 2
Find and kill {kill|パイエティ}, take {quest_text|塔の鍵}
    #sub 上に向かう階段に沿って進んでください
    #sub 荷馬車のある分かれ道では、2台ではなく1台の荷馬車があるルートを進んでください
    #sub 推奨レベル: 27
Get {crafting}
{logout}
グリゴー {quest|a3q9} #Piety's Pets
モラモア {quest|a3q8} #Sever the Right Hand
{waypoint|1_3_13} #The Ebony Barracks
➞ {enter|1_3_15} #The Imperial Gardens
    #sub Go {dir|45}
Get {waypoint_get}
    #sub 道に沿って進んでください
#ifdef LEAGUE_START
    Complete {trial}
        #sub Go {dir|0}
    Get {crafting}
    {logout}
    {waypoint|1_3_15} #The Imperial Gardens
#endif
#ifdef LIBRARY
    ➞ {enter|1_3_17_1} #The Library
        #sub Go {dir|315}
    Get {waypoint_get}
    Find {generic|Loose Candle} ➞ {enter|1_3_17_2} #The Archives
    Get {crafting}
    Find 4x{quest_text|金のページ}
    {logout}
    {waypoint|1_3_17_1} #The Library
        #sub スキルジェムを購入するために必要な通貨をインベントリに入れてください
    シオサ {quest|a3q12} #A Fixture of Fate
    {waypoint|1_3_15} #The Imperial Gardens
#endif
➞ {enter|1_3_18_1} #The Sceptre of God
➞ {enter|1_3_18_2} #The Upper Sceptre of God
    #sub 出口は斜めに進むことで見つかることがよくあります。
➞ {arena|塔の屋上}, Kill {kill|ハイテンプラー、ドミナス}
    #sub バリケードを探してください
    #sub 推奨レベル: 28
`;export{e as default};
