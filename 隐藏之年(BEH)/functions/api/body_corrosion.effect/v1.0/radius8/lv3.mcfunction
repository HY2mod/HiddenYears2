tag @s add hy.temp.exposed_attacker
effect @a[r=4,tag=!hy.temp.attacker,tag=!hy.ruby] poison 15 0
effect @a[r=4,tag=!hy.temp.attacker] nausea 30 2
effect @a[r=4,tag=!hy.temp.attacker] wither 3 0
tellraw @a[r=4,tag=!hy.temp.attacker] { "rawtext" : [ { "translate" : "hy.message.tetanus" } ] }
effect @e[r=4,type=!player] poison 15 0
effect @e[r=4,type=!player] nausea 30 2
effect @e[r=4,type=!player] wither 3 0
tag @s remove hy.temp.exposed_attacker