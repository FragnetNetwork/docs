---
title: Admin guide
keywords: ['battlefield 3 admin guide', 'battlefield 3 admin', 'battlefield 3 server admin', 'battlefield 3 server admin guide', 'bf3 admin', 'bf3 admin guide', 'bf3 server admin', 'bf3 server admin guide', 'bf3 procon', 'bf3 procon layer', 'fragnet dashboard']
---

The recommended admin tool for Battlefield 3 is **PRoCon**.

Every Battlefield server hosted with us comes with a free PRoCon layer. The layer runs PRoCon and its plugins next to your server around the clock, so your rules, balancing and admin tools keep working when your PC is off. Besides configuring and administrating your server, PRoCon lets you run plugins on it.

## Create your PRoCon layer

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.
2. Open the **PRoCon** tab. If you don't see it in the tab row, look under **More**.
3. Select **Create PRoCon layer**. The layer is ready in about two minutes and connects to your server by itself.

If your server has no **PRoCon** tab, [open a support ticket](VAR::SUPPORT_URL).

## Connect with the PRoCon client

1. Download and install the [PRoCon client](https://myrcon.net/files/file/29-procon-client/) on your PC.
2. On the **PRoCon** tab, find the **Connect with PRoCon** card. It shows your layer's **Host**, **Port**, **Username** and **Password**. Select **Show** to see the password.
3. In the PRoCon client, add a connection with these details and connect.

Always connect to the layer, not straight to your game server's RCON port. Plugins only run on the layer. If you can't connect, see [Troubleshooting Procon layer](../proconlayer/troubleshoot-procon.md).

## Where to manage what

| Task | Where |
| --- | --- |
| Commands, kicks, bans and plugins | The PRoCon client, connected to your layer |
| Map rotation | The **Maps** tab. See [Adding maps](./how-to-add-back-to-karkand-maps.md). |
| Server name, join password and game rules | The **Configuration** tab, in `Startup.txt`. See [Change a setting](../../control-panel/configuration.md#in-a-game-config-file). |
| Who is playing | The **Players** tab (shown while the server is running) |
| RCON port and RCON password | The **Connection** card on the **Overview** tab |

:::info
The **Console** on the **Overview** tab only shows Battlefield 3 server events. You can't type commands there, so run commands from PRoCon. See [Games without a full console](../../control-panel/basics.md#games-without-a-full-console).
:::

For more help with the PRoCon client, see the Procon Layer guides, for example [Adding users to your Procon layer](../proconlayer/add-user.md).
