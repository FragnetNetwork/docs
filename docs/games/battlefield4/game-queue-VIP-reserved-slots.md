---
title: Reserved slots
keywords: ['battlefield 4 reserved slots', 'bf4 reserved slots', 'bf4 vip slots', 'bf4 reservedslotslist', 'bf4 game queue', 'bf4 aggressive join', 'bf4 spectator list', 'fragnet dashboard']
---

If a game server is full, people who try to join will be placed in a queue. There are some options to control how people are added from the queue.

Priority order:

1.  VIP players (players added to the reservedSlotsList)

2.  Premium players (players who have bought Premium)

3.  Normal players.

Players on the reservedSlotsList are moved in ahead of normal and Premium players.

## Manage the reserved slots list

The easiest way is your PRoCon layer: connect with the PRoCon client and open the **Lists** tab. The layer is free with your server. Create it and find its login details on the **PRoCon** tab of your server in the [Fragnet dashboard](VAR::PANEL_URL) (if it's not in the tab row, look under **More**). If you can't connect, see [Troubleshooting Procon layer](../proconlayer/troubleshoot-procon.md).

You can also edit the list file on the **Files** tab:

1. Go to **My servers**, select your server and stop it. See [Power controls](../../control-panel/basics.md#power-controls).
2. On the **Files** tab, open the `Instance/Admin` folder.
3. Open `ReservedSlotsList.txt` and add one player name per line. See [Edit a file](../../control-panel/file-manager.md#edit-a-file).
4. Select **Save file** and start the server.

Stop the server before you edit the file, so that a change made from PRoCon while the server runs doesn't overwrite your edit.

## Aggressive join

If **reservedSlotsList.aggressiveJoin** is set to true and a VIP enters the queue, the server will kick a non-VIP from the game to make room for the queued VIP. The server will first try to kick a non-VIP player who is not in a group, and only if no such player could be found will it kick a grouped non-VIP. When kicking players, the server makes no distinction between Premium and Normal players. A normal or Premium player joining the queue will never trigger a kick.

To turn it on every time the server starts, add it to `Startup.txt`:

1. Open the **Configuration** tab and select `Startup.txt` in the list on the left.
2. Switch to **Raw file** and add this line:

   ```
   reservedSlotsList.aggressiveJoin true
   ```

3. Select **Save and restart**, or **Save** to apply it at the next start. See [Easy editor and raw file](../../control-panel/configuration.md#easy-editor-and-raw-file).

## ReservedSlotsList.txt format

Each line should have one player name. There can be a maximum of 500 entries in the list.

## Spectator list

If the game server is set to a server type lower than official, the spectator list can come in to use. On official, vars.alwaysAllowSpectators is set to true by default. If the server is hosted with another server type then this command can be set to false. If this is the case, then only players that are in the spectatorList.txt can join the server as a spectator.

In the dashboard, the server type is the **Server type** setting in the **Server browser** group of `Startup.txt`, and vars.alwaysAllowSpectators is the **Spectators when full** setting in the **Players and teams** group. See [Change a setting](../../control-panel/configuration.md#in-a-game-config-file).
