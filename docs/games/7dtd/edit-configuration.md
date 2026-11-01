---
title: Configuring your server
keywords: ['edit configuration', 'edit config', 'edit 7dtd config', 'edit 7dtd configuration', 'edit 7dtd configuration file', 'edit 7dtd server config', 'myserverconfig.xml', 'serverconfig.xml', '7 days to die server settings', 'fragnet dashboard']
---

Most settings of a 7 Days To Die server are in its XML config file, `myserverconfig.xml` by default. Each setting in the file has a short explanation next to it. You edit the file in the **Files** tab of the dashboard.

## Keep a copy of the config file

Before you change the config file, keep a copy of it so you can go back.

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your 7 Days To Die server.
2. Open the **Files** tab. You start in the server's root folder.
3. Find `myserverconfig.xml` and open its ⋯ menu.
4. Select **Make a copy** to keep a copy on the server, or **Download** to save it to your computer.

You can also make a full [backup](../../control-panel/backups/index.md) of the server.

## Edit the config file

1. In the **Files** tab, select `myserverconfig.xml` to open it in the editor.
2. Change the `value` of the settings you want. For example, this sets the length of an in-game day to 60 real-time minutes:

   ```xml
   <property name="DayNightLength" value="60" />
   ```

3. Select **Save file**, or press **Ctrl+S** (**Cmd+S** on a Mac).
4. Restart the server to apply the changes: open ⋯ **More actions** at the top of the page and select **Restart**.

See [Edit a file](../../control-panel/file-manager.md#edit-a-file) for more on the editor.

:::info Settings that come from the startup settings
Some settings, such as the server name and the world settings, are controlled by startup settings in the dashboard. Change those on the **Configuration** tab under **General** > **Startup** instead of in the file, because the value in the file can be replaced when the server starts. See [Change your server's name](change-name.md) and [Creating a new world](create-world.md).
:::

## Use your own config file

If you have your own config file that you want the server to load:

1. In the **Files** tab, upload your config file to the root folder with **Upload**, or drag it onto the file list. See [Upload files](../../control-panel/file-manager.md#upload-files).
2. Open the **Configuration** tab and select **General**.
3. In the **Startup** group, set **Server Configuration File** to the name of the file you uploaded, for example `myserverconfig.xml`. The default is `myserverconfig.xml`.
4. Select **Save** in the bar at the bottom of the page.
5. Restart the server for the change to apply.
