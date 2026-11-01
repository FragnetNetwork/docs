---
title: Player slots
keywords: ['bf4 player slots', 'battlefield 4 player slots', 'bf4 max players', 'bf4 vars.maxPlayers', 'bf4 commander slots', 'bf4 spectator slots', 'fragnet dashboard']
---

Player slots are determined by four factors:

1.  The max-cap, which is the number of player slots in your plan. You see it in the **Current plan** card on the **Billing** tab of your server in the [Fragnet dashboard](VAR::PANEL_URL). To get more or fewer slots, change your plan: see [Upgrade or downgrade your server](../../FAQ/upgrade-downgrade-server.md).

2.  The admin (you) also has a max cap that can be set with **vars.maxPlayers**, between 0 and the number of slots in your plan. In `Startup.txt` it follows your plan: the **Configuration** tab shows it as **Max players** in the **Players and teams** group, marked "Set by your plan. Change the plan on the Billing tab." To run with fewer players for a while, send `vars.maxPlayers` with the number you want (for example `vars.maxPlayers 32`) from the **Console** on the **Overview** tab or from PRoCon. A value set this way lasts until the server restarts.

3.  During runtime the game engine will not allow the desired max-cap to be set to anything lower than the current number of players.

4.  Depending on game mode there may also be a commander on each team, who is included in the maximum number of players and takes up one of your player slots, unless commanders are disabled. The same applies to spectators. In the **Players and teams** group of `Startup.txt`, turn off **Commander** or lower **Max spectators** to keep those slots for players. See [Change a setting](../../control-panel/configuration.md#in-a-game-config-file).

<!-- screenshot: bf4-startup-players-and-teams.png | BF4 server, Configuration tab, Startup.txt selected in the list on the left, Easy editor on the Players and teams group: Max players greyed out with "Set by your plan. Change the plan on the Billing tab.", Tick rate, Team autobalance, Commander, Max spectators -->

The current desired max number of players is the minimum of the max-cap and the **vars.maxPlayers** value. Normally the engine will accept runtime changes to the setting within a second. However, if the **vars.maxPlayers** setting is set to anything lower than the current number of players on the server, the effective max number of players on the server will remain unchanged. The server will then retry changing the effective max-cap every 10 seconds until it succeeds.

The **Players** tab shows how many players are on the server and the current maximum while the server is running.

:::tip
Some game modes are made for fewer players than your plan allows. The **Maps** tab warns you when a mode in your rotation is made for fewer players than your server has slots. See [Map handling](./map-handling.md).
:::
