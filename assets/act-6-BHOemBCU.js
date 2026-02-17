const e=`#section Act 6
➞ {enter|2_6_town} #Lioneye's Watch
➞ {enter|2_6_1} #The Twilight Strand
Kill {kill|Everything}
{logout}
リリィ・ロス {quest|a6q4} #Fallen from Grace
➞ {enter|2_6_2} #The Coast
➞ {enter|2_6_4} #The Mud Flats
Find and kill {kill|名誉を汚された女王}, take {quest_text|征服の目}
    #sub エリアの{dir|45}の隅、通常は家のそばにあります
➞ {enter|2_6_5} #The Karui Fortress
➞ {arena|トコハマの砦}, kill {kill|カルイの戦神、トゥコハマ}
Get {crafting}
➞ {enter|2_6_6} #The Ridge
    #sub Go {dir|0}
➞ {enter|2_6_7_1} #The Lower Prison
#ifdef LEAGUE_START
    Complete {trial}
#endif
Get {crafting}
➞ {enter|2_6_7_2} #Shavronne's Tower
➞ {arena|監獄の屋上}, kill {kill|蘇ったシャヴロン} & {kill|再構築されたブルータス}
➞ {arena|監獄長の拷問部屋}
Get {crafting}
➞ {enter|2_6_8} #Prisoner's Gate
➞ {enter|2_6_9} #The Western Forest
    #sub 道に沿って進んでください
Get {crafting}
➞ {enter|2_6_10} #The Riverways
    #sub 道に沿って進んでください
Get {waypoint_get}
    #sub 道に沿って進んでください
➞ {enter|2_6_11} #The Wetlands
    #sub {waypoint}付近の2本の柱を探し、その道をたどって進んでください
➞ {arena|産卵場所}, kill {kill|傀儡の女主人、リスラーサ}
    #sub Go {dir|315}
{logout}
タークリー {quest|a6q3} #The Father of War
タークリー {quest|a6q2} #Essence of Umbra
タークリー {quest|a6q6} #The Puppet Mistress
{waypoint|2_6_10} #The Riverways
➞ {enter|2_6_12} #The Southern Forest
    #sub 道が終わるまで進んでください
    #sub Go {dir|135}
➞ {enter|2_6_13} #The Cavern of Anger
Take {quest_text|ブラックフラッグ}
➞ {enter|2_6_14} #The Beacon
Get {crafting}
    #sub 海岸線に沿って進んでください
Complete {quest_text|Pillar Push}
Light the {quest_text|ビーコン}, throw in {quest_text|ブラックフラッグ}
Talk to {generic|Weylam Roth}, sail to {enter|2_6_15} #The Brine King's Reef
➞ {arena|海水の王の玉座}, kill {kill|海水の王、ツォアゴス}
{logout}
Select {generic|パンテオン}
`;export{e as default};
