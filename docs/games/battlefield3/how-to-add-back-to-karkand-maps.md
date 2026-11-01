---
title: Adding maps
keywords: ['adding maps to battlefield 3', 'adding maps to battlefield 3 server', 'adding maps to bf3', 'adding maps to bf3 server', 'bf3 maps', 'battlefield 3 maps', 'bf3 maplist', 'battlefield 3 maplist', 'bf3 map rotation', 'back to karkand maps', 'fragnet dashboard']
---

You set your Battlefield 3 map rotation on the **Maps** tab in the [Fragnet dashboard](VAR::PANEL_URL). The tab edits your server's `MapList.txt` for you. You can also manage the map list from your PRoCon layer: see [Setting up Maplist via Procon](../proconlayer/set-maps-via-procon.md).

## Add maps on the Maps tab

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.
2. Open the **Maps** tab. The **Map rotation** card lists the maps your server plays, top to bottom, with the mode and how many rounds each.
3. Select **Add map**. A new row appears at the bottom of the list.
4. In the new row, choose the map (for example Strike at Karkand), then the mode, and enter the number of **Rounds** (1 to 99).
5. Use the up and down arrows to change the order, and the bin icon to remove a map.
6. Select **Save** in the bar at the bottom of the page. **Discard** throws your changes away.
7. Restart the server. The rotation applies when the server restarts. See [Power controls](../../control-panel/basics.md#power-controls).

:::info
The tab offers every mode for every Battlefield 3 map, but not every mode runs on every map. As the tab says: "Not every mode runs on every Battlefield 3 map; the server skips a pair it cannot run." Use the tables below to pick a mode the map supports.
:::

If a row is marked "Choose a map from the list." or "This map does not run that mode.", change that row before you save.

## Edit MapList.txt by hand

If your map list has lines the tab can't read, the **Maps** tab says so and leaves the file as it is. Select **Open in Files** and edit `MapList.txt` in the `Instance/Admin` folder on the **Files** tab. See [Edit a file](../../control-panel/file-manager.md#edit-a-file).

Each line has the map's engine name, the game mode and the number of rounds. Example list:

```
XP1_001 ConquestLarge0 1
XP1_004 RushLarge0 2
```

Save the file and restart the server.

## Back to Karkand maps

| **Engine Name** | **Human Readable Name**                                 |
|-----------------|---------------------------------------------------------|
| XP1_001         | Strike At Karkand                                       |
| XP1_002         | Gulf of Oman                                            |
| XP1_003         | Sharqi Peninsula                                        |
| XP1_004         | Wake Island (Supports all modes besides ConquestSmall1) |

## Game modes

|  **Game Mode**   | **Human Readable Name (Max player count)** |
|:----------------:|:------------------------------------------:|
| ConquestLarge0   | Conquest (64)                              |
| ConquestSmall0   | Conquest (32)                              |
| ConquestSmall1   | Conquest Assault (32)                      |
| RushLarge0       | Rush (32)                                  |
| SquadRush0       | Squad Rush (8)                             |
| SquadDeathMatch0 | Squad Deathmatch (16)                      |
| TeamDeathMatch0  | Team Deathmatch (24)                       |

For all Battlefield 3 maps, see [Maps and modes list](./maps-game-modes-and-slots-limitations.md).
