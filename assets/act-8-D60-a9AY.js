const e=`#section Act 8
➞ {enter|2_8_1} #The Sarn Ramparts
➞ {enter|2_8_town} #The Sarn Encampment
➞ {enter|2_8_2_1} #The Toxic Conduits
    #sub Go {dir|270}
➞ {enter|2_8_2_2} #Doedre's Cesspool
    #sub 地面にある黒いペンキの飛び散りが進むべき正しい方向を示しています
➞ {arena|大釜}, kill {kill|不快なる者、ドードゥリ}
➞ {arena|下水の出口}
Get {crafting}
➞ {enter|2_8_8} #The Quay
    #sub Go {dir|45}
Find and take {quest_text|永遠のアンク}
    #sub {dir|270}の壁に沿って進んでください
➞ {arena|復活の池}
    #sub Go {dir|135}
Talk to {generic|Clarissa}, kill {kill|トールマン}
➞ {enter|2_8_9} #The Grain Gate
Find and kill {kill|ジェムリング・リージョネア}
    #sub 出入口付近の死んだ衛兵に沿って進んでください
➞ {enter|2_8_10} #The Imperial Fields
    #sub 出入口付近の死んだ衛兵に沿って進んでください
➞ {enter|2_8_12_1} #The Solaris Temple Level 1
    #sub 道に沿って進み、{waypoint}まで進んでください
    #sub Go {dir|315}
Get {waypoint_get}
➞ {enter|2_8_12_2} #The Solaris Temple Level 2
Find and kill {kill|ソラリスの遣い、ドーン}, take {quest_text|太陽の宝珠}
Get {crafting}
{logout}
ハーガン {quest|a8q1} #Essence of the Hag
マラモア {quest|a8q7} #The Gemling Legion
クラリッサ {quest|a8q6} #Love is Dead
{waypoint|2_8_12_1} #The Solaris Temple Level 1
➞ {enter|2_8_11} #The Solaris Concourse
➞ {enter|2_8_13} #The Harbour Bridge
    #sub Go {dir|225}
➞ {enter|2_8_6} #The Lunaris Concourse
Get {waypoint_get}
    #sub Go {dir|315}
➞ {enter|2_8_7_1_} #The Lunaris Temple Level 1
➞ {enter|2_8_7_2} #The Lunaris Temple Level 2
Find and kill {kill|ルナリスの遣い、ダスク}, take {quest_text|月の宝珠}
Get {crafting}
{logout}
{waypoint|2_8_6} #The Lunaris Concourse
➞ {enter|2_8_13} #The Harbour Bridge
    #sub Go {dir|135}
➞ {arena|天空神殿}, activate {generic|姉妹の像}
Kill {kill|永遠なる月、ルナリス} & {kill|永遠なる太陽、ソラリス}
➞ {enter|2_9_1} #The Blood Aqueduct
    #sub 推奨レベル: 54以上
    #sub 推奨ファームレベル: 58～62
➞ {enter|2_9_town} #Highgate
{waypoint|2_8_6} #The Lunaris Concourse
➞ {enter|2_8_5} #The Bath House
    #sub Go {dir|180}
#ifdef LEAGUE_START
    Complete {trial}
        #sub {dir|270}側を探してください
    Get {crafting}
#endif
➞ {enter|2_8_4} #The High Gardens
    #sub {dir|270}側を探してください
➞ {arena|恐怖の池}, kill {kill|恐怖の影、ユーグル}
{portal|use}
ハーガン {quest|a8q4} #Reflection of Terror
`;export{e as default};
