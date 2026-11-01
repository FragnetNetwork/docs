---
title: Switching to experimental version your Satisfactory server
keywords: ['satisfactory server experimental', 'satisfactory server setup experimental', 'satisfactory branch', 'satisfactory experimental branch', 'satisfactory startup settings', 'fragnet dashboard']
---


# Switching to experimental version your Satisfactory server
Firstly we’ll need to delete the server files for new ones to be created for the experimental version.

:::danger
This will delete all of your sessions. Make a backup first if you want to keep them.
:::

1\. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server. Stop the server with **Shut down** at the top of the page (see [Power controls](../../control-panel/basics.md#power-controls)).

2\. If you want to keep your sessions, make a backup on the **Backups** tab first (see [Backups](../../control-panel/backups/index.md)). You can also download only the save folder: on the **Files** tab, open `.config/Epic/FactoryGame/Saved/SaveGames`, use **Compress** in the ⋯ menu of the `server` folder and **Download** the archive (see [File and folder actions](../../control-panel/file-manager.md#file-and-folder-actions)).

3\. On the **Files** tab, go to `.config` → `Epic` → `FactoryGame` → `Saved` → `SaveGames` → `server` and delete the contents of the `server` folder. To delete everything at once, tick the box in the header of the file list and select **Delete**.

4\. Select the **Configuration** tab, then **General** in the list on the left. In the **Startup** group, find **Branch Name**, the setting that chooses between the `public` and `experimental` branches of Satisfactory, and set it to `experimental`. Select **Save**. See [Startup](../../control-panel/configuration.md#startup).

5\. Start your server. It updates to the experimental version when it starts, which can take a few minutes.

6\. Done! Your server is now running on experimental mode.

:::info
Your game must run the same branch as the server. In Steam or the Epic Games Launcher, switch your game to the experimental version too. To go back, set **Branch Name** to `public` and start the server again. Saves made on the experimental version may not load on the public version.
:::
