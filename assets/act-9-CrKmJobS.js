const n=`#section Act 9
{waypoint|2_9_town} #Highgate
➞ {enter|2_9_2} #The Descent
➞ {enter|2_9_3} #The Vastiri Desert
Get {waypoint_get}
    #sub Go {dir|90}
Get {crafting}
Find and take {quest_text|ストームブレード}
➞ {enter|2_9_5} #The Foothills
    #sub Go {dir|315}
Get {waypoint_get}
    #sub {dir|45} の方向に進んで崖を見つけてください
    #sub Go {dir|315}
➞ {enter|2_9_6} #The Boiling Lake
Find and Kill {kill|バジリスク}, take {quest_text|バジリスクアシッド}
#sub {dir|45}の方向に進み、石化した兵士を探してください
Get {crafting}
{logout}
Talk to {generic|シン}
ペタルスとヴァーニャ {quest|a9q3}
ペタルスとヴァーニャ {quest|a9q5|a9q5_offer}, take {quest_text|瓶詰めの嵐}
{waypoint|2_9_3} #The Vastiri Desert
➞ {enter|2_9_4} #The Oasis
    #sub Go {dir|45}
➞ {arena|砂のくぼみ}, kill {kill|砂漠の女王、シャカーリ}
{logout}
イラーシャ {quest|a9q5|a9q5} #Queen of the Sands
{waypoint|2_9_5} #The Foothills
➞ {enter|2_9_7} #The Tunnel
    #sub Go {dir|315}
#ifdef LEAGUE_START
    {waypoint}に行く前に、{trial}を完了してください。入口付近にあります。
    Get {crafting}
#endif
➞ {enter|2_9_8} #The Quarry
Get {waypoint_get}
    #sub Go {dir|315}
Get {crafting}
➞ {arena|風の祠}, kill {kill|風の女王、ガルカーン}, take {quest_text|セケマの羽}
    #sub {dir|45} or {dir|225}
{logout}
イラーシャ {quest|a9q2} #The Ruler of Highgate
{waypoint|2_9_8} #The Quarry
➞ {enter|2_9_9} #The Refinery
    #sub {dir|315} or {dir|45}
Get {crafting}
    #sub {arena|精錬所地下道}へ通じる下水溝の格子を探してください
Find and kill {kill|アダス将軍}, take {quest_text|トラセンパウダー}
    #sub {dir|45}に進み、トロッコの軌道に沿って進んでください
{logout}
{waypoint|2_9_8} #The Quarry
Talk to {generic|シン}
➞ {enter|2_9_10_1} #The Belly of the Beast
➞ {enter|2_9_10_2} #The Rotting Core
➞ {arena|ブラックコア}
Talk to {generic|シン}
➞ {arena|ドードゥリの絶望}, kill {kill|ダークソウル、ドードゥリ}
➞ {arena|マリガロの苦悩}, kill {kill|壊れし者、マリガロ}
➞ {arena|シャヴロンの悲衰}, kill {kill|解放されし者、シャヴロン}
Talk to {generic|シン} ➞ {arena|ブラックハート}, kill {kill|邪悪なトリニティ}
{portal|use}
`;export{n as default};
