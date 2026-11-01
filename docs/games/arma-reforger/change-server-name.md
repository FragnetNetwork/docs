---
title: Change server's name
keywords: ['change arma reforger server name', 'arma reforger server name', 'arma reforger server password', 'arma reforger startup settings', 'arma reforger config.json', 'fragnet dashboard']
---

Your Arma Reforger server's name, as players see it in the server browser, is a startup setting. You change it on the **Configuration** tab in the [Fragnet dashboard](VAR::PANEL_URL).

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your Arma Reforger server.
2. Select the **Configuration** tab. If it shows a list on the left, select **General**.
3. Select the **Startup** group.
4. Enter the new name in the startup setting for the server name.
5. To make players enter a password to join, fill in the startup setting for the server password. Leave it empty for a public server.
6. Select **Save**.
7. Restart the server. Startup settings apply the next time the server starts. See [Power controls](../../control-panel/basics.md#power-controls).

See [Startup](../../control-panel/configuration.md#startup) for how startup settings work.

:::info Server name in config.json
The name and password are also in the `game` section of the server's `config.json` (`name` and `password`). When they come from your startup settings, they're written into `config.json` every time the server starts, so change them under **Startup** rather than in the file.
:::

:::tip Dashboard name
The **Dashboard name** under **General** is only the name of the server in your dashboard. It doesn't change what players see. See [General settings](../../control-panel/configuration.md#general).
:::
