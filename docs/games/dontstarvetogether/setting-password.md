---
title: Setting a password on your Don't Starve Together server
keywords: ['dont starve together', 'dont starve together server', 'dont starve together server password' , 'dont starve together password', 'dont starve together cluster_password', 'fragnet dashboard']
---

# Setting a password on your Don't Starve Together server

The server password is the `cluster_password` setting in your server's `cluster.ini` file. Your server may also have it as a startup setting. Check the startup settings first.

## In the startup settings

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your Don't Starve Together server.
2. Select the **Configuration** tab, select **General** in the list on the left, then the **Startup** group (see [Startup](../../control-panel/configuration.md#startup)).
3. If there is a startup setting for the cluster password, enter your password there. Leave it empty for a server without a password.
4. Select **Save** in the bar at the bottom.
5. Restart the server (see [Power controls](../../control-panel/basics.md#power-controls)).

A startup setting is written into `cluster.ini` every time the server starts, so if your server has one, always change the password there.

## In cluster.ini

If your server has no startup setting for the password, set it in `cluster.ini`:

1. On the **Files** tab, open the folder `DoNotStarveTogether/config/server` and select `cluster.ini` to open it in the editor (see [Edit a file](../../control-panel/file-manager.md#edit-a-file)).
2. In the `[NETWORK]` section, set your password after `cluster_password`:

   ```ini
   cluster_password = yourpassword
   ```

3. Select **Save file**.
4. Restart the server.

That's it. Players now need the password to join your server.
