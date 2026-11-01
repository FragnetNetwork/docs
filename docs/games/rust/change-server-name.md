---
title: Changing the name of your Rust server
keywords: ['rust server name', 'rust server change name', 'rust hostname', 'rust server.hostname', 'rust server.cfg', 'fragnet dashboard']
---

# How to change your Rust server name

The name players see in the Rust server browser is the **Server name** setting (`server.hostname`) in your server's `server.cfg`.

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your Rust server.
2. Select the **Configuration** tab.
3. In the list on the left, select `server.cfg` ("Server name, listing, rules and performance"). On **General** you can also select **Edit in server.cfg** in the notice at the top.
4. In the **Server** group, change **Server name**. Use up to 60 characters on one line.
5. Select **Save and restart** to apply it now, or **Save** to apply it at the next restart. See [Change a setting](../../control-panel/configuration.md#in-a-game-config-file).

**Server name** is tagged **Applied at start**: the dashboard keeps it in your startup settings and writes it into `server.cfg` every time the server starts. Change it on the **Configuration** tab as above. If you edit `server.cfg` in the **Files** tab instead, your change is overwritten at the next start.

:::tip
- The pencil next to the server's name at the top of the page (**Rename server**) only changes the name in your dashboard. Players don't see it. See [Rename the server](../../control-panel/basics.md#rename-the-server).
- A [scheduled wipe](./rust-wipe.md#schedule-a-wipe) sets the server name at every wipe. If you use one, change the **Server name after the wipe** there too.
:::
