---
title: Frequently Asked Questions
keywords: ['fs22', 'fs22 docs', 'fs22 faq', 'fs22 frequently asked questions', 'fs22 server issues', 'fs22 server issue', 'fs22 server problems', 'fs22 server problem', 'fs22 dashboard', 'fs22 control panel', 'fs22 restart server']
---

## Unable to find the server

The most common cause is the server browser's search filters. [This article](find-server.md) shows how to find your server.

### Is the game running?

On Fragnet, you start and stop the Farming Simulator 22 game from the [Fragnet dashboard](VAR::PANEL_URL). Go to **My servers**, select your server and check the status next to its name:

- **Online · ready to join**: players can join.
- **Loading map**: the game is still loading. Wait a moment.
- **Game stopped** or **Server off**: select **Start game** in the header.

## Do I still need the FS22 control panel?

Usually not. Everything you need day to day is in the dashboard: the **Configuration** tab has the game settings (server name, passwords, savegame slot and more), and the **Mods**, **Savegames** and **Logs** tabs replace those pages of the FS22 control panel.

The FS22 control panel by GIANTS Software is still available for the few things the dashboard doesn't cover, for example updating a ModHub mod in place, deleting a savegame, or setting the career mode for a new farm. To open it, go to the **Overview** tab and, on the **FS22 control panel** card, select the open-in-new-tab icon next to **Panel address**, or select **Open FS22 control panel** in the **More actions** (⋯) menu. The dashboard signs you in for you.

### The control panel password is wrong

If you changed the password with **Change password** on the **FS22 control panel** card while the server was running, the FS22 control panel keeps the old password until it restarts. Select **Restart now** on the card, or **Restart FS22 control panel** in the **More actions** (⋯) menu.

To sign in by hand, use the **Username** (`admin`) and the **Password** shown on the **FS22 control panel** card.

### The control panel can't be reached

If the status shows **Control panel unreachable**, the dashboard can't reach the FS22 control panel, so the game can't be started or stopped either. Restart the whole server:

1. Open the **More actions** (⋯) menu in the header.
2. Select **Restart FS22 control panel** and confirm.

This restarts the FS22 control panel and the game, and takes about a minute. If the problem lasts more than a few minutes, [open a support ticket](VAR::SUPPORT_URL) and we'll look into it.

## Common problems with mods and savegames

### My savegame upload is rejected

Savegames must be uploaded as a `.zip` archive that contains the files from inside the savegame folder, with `careerSavegame.xml` at the top level. A ZIP that contains the folder itself is rejected with "This isn't a complete savegame". [This article](upload-savegame.md) shows how to prepare and upload a savegame.

### I'm not able to upload my mod

Check that:

- the mod is a `.zip` file,
- it's no larger than 512 MB (use SFTP for larger mods, see [Manage files via FTP](manage-files-via-ftp.md)),
- a mod with the same file name isn't already installed,
- your mod space isn't full ("Mod space full. Delete mods or add mod space.").

See [Installing and activating mods](installing-mods.md).

### Stuck on "Sync data with other players"

This is the most common issue on FS22 servers, and it's almost always caused by an incompatible mod or a corrupted savegame. Try starting a new game with the same mods. If the issue still occurs, remove mods from your server one at a time to find the one causing it.

### Cannot deactivate or delete a mod

- Mods can only be turned on or off, or deleted, while the game is stopped. Select **Stop** in the header and confirm with **Stop game** first.
- Only inactive mods can be deleted. Deactivate the mod first.
- If the mod still can't be deactivated, it's probably a dependency of another active mod. Deactivate the other mod first.

### Cannot activate a mod or start the server with a mod map

Usually the mod needs another mod (a dependency) that isn't installed or active. On the **Mods** tab, such a mod shows **Missing:** followed by the mods it needs. Install and activate those, then try again. If **Start game** fails with "GIANTS can't start this savegame: its map needs mods that aren't installed or active", open the **Logs** tab to see which mods are missing.

<!-- screenshot: fs22-mods-missing-dependency.png | FS22 server, Mods tab, Installed mods with the game stopped: one mod row showing "Missing:" followed by the name of the required mod, with its Active switch off -->
