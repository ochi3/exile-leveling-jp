const e=`#section Act 5
➞ {enter|1_5_1} #The Slave Pens
Find and kill {kill|監督官、クロウ}
    #sub 可能な限り{dir|180}に進んでください
    #sub Go {dir|270}
➞ {enter|1_5_town} #Overseer's Tower
ラニ {quest|a5q1b} #Return to Oriath
➞ {enter|1_5_2} #The Control Blocks
Find and take {quest_text|瘴気計}
    #sub 可能な限り{dir|270}に進んでください
Find and kill {kill|司法官カスティカス}, take {quest_text|熱情の目}
    #sub {quest_text|瘴気計}から{dir|45}に進んでください
➞ {enter|1_5_3} #Oriath Square
➞ {enter|1_5_4} #The Templar Courts
    #sub Go {dir|45}
➞ {enter|1_5_5} #The Chamber of Innocence
    #sub 時計回りに回り込んで進んでください
    #sub 推奨レベル: 37以上
    #sub 推奨ファームレベル: 40～42
Get {crafting}
➞ {arena|イノセンスの聖域}, kill {kill|ハイテンプラー、アヴァリアス}
    #sub {dir|315}に進み、反時計回りの渦巻きを描いてください
{logout}
ラニ {quest|a5q2} #The Key to Freedom
ヴァイレンタ {quest|a5q3} #In Service to Science
ラニ {quest|a5q4} #Death to Purity
{waypoint|1_5_5} #The Chamber of Innocence
➞ {enter|1_5_4b} #The Torched Courts
➞ {enter|1_5_3b} #The Ruined Square
    #sub 反時計回りに回り込んで進んでください
Get {waypoint_get}
    #sub Go {dir|315}
➞ {enter|1_5_6} #The Ossuary
Find and take {quest_text|浄化の印}
Get {crafting}
{logout}
{waypoint|1_5_3b} #The Ruined Square
➞ {enter|1_5_7} #The Reliquary
    #sub {dir|225}に進み、広場を見つけてください
    #sub Go {dir|180}
3つの{quest_text|キタヴァの苦悩}を見つけ、マップの隅を探してください
Get {crafting}
{logout}
ラニ {quest|a5q7} #Kitava's Torments
{waypoint|1_5_3b} #The Ruined Square
➞ {enter|1_5_8} #The Cathedral Rooftop
    #sub Go {dir|225}
➞ {arena|聖堂の屋上}, kill {kill|貪欲なる者、キタヴァ}
{generic|リリィ・ロス}に話しかけ、レイクラストへ航海してください
`;export{e as default};
