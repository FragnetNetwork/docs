---
title: Changing MOTD on your Left 4 Dead 2 server
keywords: ['left 4 dead 2 motd', 'left 4 dead 2 create motd', 'left 4 dead 2 server motd', 'l4d2 motd.txt', 'fragnet dashboard']
---

# Changing MOTD on your Left 4 Dead 2 server
MOTD or Message of the day is a small text that appears to players once they join the server.

Banners can also be added, but we’ll cover this in a different guide.

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server. Open the **Files** tab.

2. First, we’ll need to locate the MOTD. By default the MOTD is located at `left4dead2/motd.txt`. Select it to open it in the editor. See [Edit a file](../../control-panel/file-manager.md#edit-a-file).

3. There will be a link, which you can remove, and add any message you wish for all players to see.

4. Once done, select **Save file**.

5. Afterwards, we need to enable the MOTD in `server.cfg`, which is located in `left4dead2/cfg/server.cfg`. Open it and insert `motd_enable 1`. You can add it anywhere in the file (keep it somewhere at the beginning for easier access), then select **Save file**.

6. Start or restart the server and connect to it. See [Power controls](../../control-panel/basics.md#power-controls).
