---
title: Adding maps
keywords: ['adding maps to battlefield 3', 'adding maps to battlefield 3 server', 'adding maps to bf3', 'adding maps to bf3 server', 'bf3 maps', 'battlefield 3 maps', 'bf3 maplist', 'battlefield 3 maplist']
---

You can add Battlefield maps by editing maplist.txt from our game panel or using Procon layer. If you would like to use Procon layer for this purpose, we would recommend checking [this article](../proconlayer/set-maps-via-procon)

1.  Log in to the [Game Panel](VAR::OLD_PANEL_URL).
    
2.  Click on **Configuration Files**.
    
3.  Choose to edit ```Maplist.txt```.
    
4.  Add maps/gametypes based on the below examples and code.
    

Example list:  
```
XP1_001 ConquestLarge0 1  
XP1_004 RushLarge0 2
```

### Maps

| **Engine Name** | **Human Readable Name**                                 |
|-----------------|---------------------------------------------------------|
| XP1_001         | Strike At Karkand                                       |
| XP1_002         | Gulf of Oman                                            |
| XP1_003         | Sharqi Peninsula                                        |
| XP1_004         | Wake Island (Supports all modes besides ConquestSmall1) |

### Game Modes

|  **Game Mode **  | **Human Readable Name (Max player count)** |
|:----------------:|:------------------------------------------:|
| ConquestLarge0   | Conquest (64)                              |
| ConquestSmall0   | Conquest (32)                              |
| ConquestSmall1   | Conquest Assault (32)                      |
| RushLarge0       | Rush (32)                                  |
| SquadRush0       | Squad Rush (8)                             |
| SquadDeathMatch0 | Squad Deathmatch (16)                      |
| TeamDeathMatch0  | Team Deathmatch (24)                       |