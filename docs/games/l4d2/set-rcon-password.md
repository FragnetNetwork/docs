---
title: Setting and editing an RCON password of your Left 4 Dead 2 server
keywords: ['RCon Left 4 Dead 2', 'RCon Left 4 Dead 2 server', 'Left 4 Dead 2 rcon password', 'Left 4 Dead 2 rcon password setup', 'Left 4 Dead 2 set rcon password', 'Left 4 Dead 2 server rcon password', 'Left 4 Dead 2 create rcon password', 'fragnet dashboard']
---

# Set and edit an RCON password for Left 4 Dead 2 server
You set the RCON password in the startup settings of your server in the [Fragnet dashboard](VAR::PANEL_URL).

## Change or set the RCON password

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.

2. Open the **Configuration** tab and select the **Startup** group. See [Startup](../../control-panel/configuration.md#startup).

3. Find the RCON password setting and enter the password you would like to have.

4. Select **Save** in the bar at the bottom of the page.

5. Restart the server. The new password applies the next time the server starts. See [Power controls](../../control-panel/basics.md#power-controls).

To remove the RCON password, leave the RCON password setting empty and save.

:::info
`server.cfg` (in `left4dead2/cfg` on the **Files** tab) can also contain an `rcon_password` line. If that line still has a different password after the restart, it's the one the game uses: change it there too, or remove the line.
:::
