---
title: Map handling
keywords: ['battlefield 4 map handling', 'bf4 map handling', 'bf4 map rotation', 'bf4 maplist', 'battlefield 4 maplist', 'bf4 maps tab', 'fragnet dashboard']
---

BF4 PC game servers are designed to rotate through a sequence of maps. The exact configuration is specified in the server’s internal map list. Different maps in the map list can use different game modes. (Note however, that some game modes will not work properly if there are more players on the server than the game mode is designed for.)

Upon startup, the `MapList.txt` file is read. During runtime, the mapList.\* commands can be used to edit the set of maps.

When the same map is played for several rounds, all 2-team game modes stipulate that the teams will switch sides after a run. This way, a 2-round session of Rush will have players play both attackers and defenders.

## Set the map rotation on the Maps tab

The **Maps** tab in the [Fragnet dashboard](VAR::PANEL_URL) edits `MapList.txt` for you.

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.
2. Open the **Maps** tab. The **Map rotation** card lists the maps your server plays, top to bottom, with the mode and how many rounds each. A server without a map list says "Your server plays its default map until you add maps."
3. Select **Add map**. A new row appears at the bottom of the list.
4. In the new row, choose the map, then the mode, and enter the number of **Rounds** (1 to 99). The mode list only offers the modes that map runs.
5. Use the up and down arrows to change the order, and the bin icon to remove a map.
6. Select **Save** in the bar at the bottom of the page. **Discard** throws your changes away.
7. Restart the server. The rotation applies when the server restarts. See [Power controls](../../control-panel/basics.md#power-controls).

<!-- screenshot: bf4-maps-tab.png | BF4 server, Maps tab with one unsaved change: the Map rotation card with 3 rows (map, mode, Rounds, up/down arrows and bin icon), the Add map button, and the bar at the bottom with "Unsaved rotation changes · applies on restart", Discard and Save -->

If a mode is made for fewer players than your server has slots, the row shows a warning such as "This mode is made for 32 players and your server has 64 slots." See [Player slots](./player-slots.md).

For the engine names behind the map and mode names, see [Maps and game modes list](./maps-and-game-modes.md).

## Controlling map switching (via console)

You can type these commands in the **Console** on the **Overview** tab (see [Send a command](../../control-panel/basics.md#send-a-command)) or send them from PRoCon.

*   mapList.\* can be used to edit the map list while the server is running.

*   mapList.setNextMapIndex sets which will be the next map.

*   mapList.getMapIndices returns information on which is the current and next map in the list.

*   mapList.runNextRound switches to the next round, without finishing the current.

*   mapList.restartRound makes all players reload the current map, and restarts the current round.

*   mapList.endRound declares a specific team as the winning team, and then moves directly to the end-of-round screen.

:::info
Changes made with mapList.\* commands only last until the server restarts, unless you save them to `MapList.txt` with `mapList.save`. Saving replaces the rotation you set on the **Maps** tab.
:::

## Maplist.txt format

The file is `MapList.txt` in the `Instance/Admin` folder. Each line in the file has three entries: the map name, the game mode, and the number of rounds to be played on the map until proceeding to the next map in the list.

Example Maplist.txt:

|          **Line**         |                                   **Description**                                  |
|:-------------------------:|:----------------------------------------------------------------------------------:|
| MP_Siege ConquestLarge0 1 | The first one round of Conquest will be played on Siege of Shanghai.               |
| MP_Naval Obliteration 1   | Followed by one round of Obliteration on Parcel Storm, this sequence then restart. |

You normally don't need to edit the file by hand. Use it for maps or modes the **Maps** tab doesn't offer, or when the tab says "Your map list has lines this editor does not read, so it is left as it is. Edit MapList.txt in Files.":

1. On the **Maps** tab, select **Open in Files**, or open the **Files** tab and go to `Instance/Admin`.
2. Open `MapList.txt`, make your changes and select **Save file**. See [Edit a file](../../control-panel/file-manager.md#edit-a-file).
3. Restart the server.

The **Configuration** tab also lists `MapList.txt`, but only to read: "Edit the map rotation on the Maps tab."

## Editing Maplist.txt with Procon Layer

Maplist can also be configured with the Procon Layer. It provides a GUI where you add the maps with a simple click, rather than writing the lines in the config.
For more information please refer to [this article](../proconlayer/set-maps-via-procon.md).
