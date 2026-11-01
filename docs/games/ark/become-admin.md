---
title: Becoming an admin on ARK server
keywords: ['ark survival evolved', 'ark survival evolved server', 'ark server', 'admin on ark server', 'ark admin password', 'ark server admin', 'enablecheats', 'fragnet dashboard']
---

# Becoming an admin on ARK server

To use admin commands on your ARK server, you set an admin password in the dashboard and enter it in the game's console.

## Set the admin password

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your ARK server.
2. Open the **Configuration** tab and select **General** in the list on the left.
3. In the **Startup** group, find **Admin Password** and enter the password you want to use.
4. Select **Save** in the bar at the bottom of the page.
5. Restart the server: open ⋯ **More actions** at the top of the page and select **Restart**. The new password applies once the server is back up.

See [Change a setting under General](../../control-panel/configuration.md#under-general) for more on saving these settings.

:::tip
Use only letters, numbers, dashes and underscores in the password. ARK reads its settings from the server's startup line, so spaces and characters such as `?` can stop the server from starting.
:::

## Use admin commands in the game

1. Join your server.
2. Press the `Tab` key. A console opens at the bottom of the screen.
3. Type the following command, with your admin password, and press `Enter`:

   ```text
   enablecheats yourAdminPassword
   ```

You are now an admin and can use any console command.

:::note
You need to enter the command again each time you rejoin the server.
:::

All console commands are listed on the [ARK wiki](https://ark.fandom.com/wiki/Console_commands).
