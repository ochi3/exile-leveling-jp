const n=`#section Act 10
{waypoint|2_10_town} #Oriath Docks
➞ {enter|2_10_1} #The Cathedral Rooftop
➞ {arena|聖堂の屋上}, kill {kill|プレイグウィング}
    #sub Go {dir|0}
➞ {enter|2_10_2} #The Ravaged Square
少し歩いて開けたところに {portal|set} を設置
➞ {enter|2_10_7} #The Control Blocks
    #sub Go {dir|180}
{waypoint|2_10_town} #Oriath Docks
ラニ {quest|a10q1} #Safe Passage
Take {portal|use}
Get {waypoint_get}
    #sub Go {dir|45}
#ifdef LEAGUE_START
    ➞ {enter|2_10_9} #The Ossuary
    Get {crafting}
    Complete {trial}
#endif
{logout}
{waypoint|Labyrinth_Airlock}
{ascend|merciless}飛ばしても良い
Get {crafting|3_Labyrinth_boss_3}
{waypoint|2_10_7} #The Control Blocks
Find and kill {kill|ヴァイレンタ}
{logout}
ラニ {quest|a10q6} #Vilenta's Vengeance
{waypoint|2_10_2} #The Ravaged Square
➞ {enter|2_10_3} #The Torched Courts
    #sub Go {dir|135}
➞ {enter|2_10_4} #The Desecrated Chambers
    #sub 時計回りに回る
Get {crafting}
➞ {arena|イノセンスの聖域}, kill {kill|再構築されし者、アヴァリウス}, take {quest_text|浄化の杖}
    #sub {dir|315}反時計回りに回る
{logout}
Talk to {generic|バノン}
ラニ {quest|a10q2} #Death and Rebirth
{waypoint|2_10_2} #The Ravaged Square
Talk to {generic|イノセンス}
    #sub Go {dir|45}
➞ {enter|2_10_5} #The Canals
➞ {enter|2_10_6} #The Feeding Trough
Get {crafting}
Talk to {generic|シン}
➞ {arena|渇望の祭壇}, kill {kill|貪欲なる者、キタヴァ}
Talk to {generic|シン} ➞ {enter|2_10_town} #Oriath Docks
Talk to {generic|リリィ・ロス}と話し、オリアスから出航してください
➞ {enter|2_11_endgame_town} #Karui Shores
Get {crafting}
#ifdef BANDIT_KILL
    ラニ {quest|a10q3} #An End to Hunger
        #sub チャットに{generic|/passives}と入力して、クエストからすべての24パッシブを取得していることを確認してください
    Relog
#endif
#ifndef BANDIT_KILL
    ラニ {quest|a10q3} #An End to Hunger
        #sub チャットに{generic|/passives}と入力して、クエストからすべての22パッシブを取得していることを確認してください
    Relog
#endif
`;export{n as default};
