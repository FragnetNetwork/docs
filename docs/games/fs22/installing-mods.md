---
title: Installing and activating mods on your Farming Simulator 22 server
keywords: ['fs22', 'fs22 docs', 'fs22 mods', 'fs22 installing mods', 'fs22 modhub', 'fs22 upload mods', 'fs22 activate mods', 'fs22 dlc', 'fs22 mod space']
---

# Installing mods

You manage mods on the **Mods** tab of your server in the [Fragnet dashboard](VAR::PANEL_URL): go to **My servers**, select your server and open **Mods**.

There are a few ways to install mods on your FS22 server. After a mod is installed, it still needs to be activated.

The **Mods & DLCs** card has three views:

- **Installed mods**: every mod on the server, with its version and whether it's active.
- **DLCs**: the official Farming Simulator 22 DLCs.
- **ModHub**: the official ModHub catalogue, ready to install.

<!-- screenshot: fs22-mods-tab.png | FS22 server, Mods tab, Installed mods view with the game stopped: the Mods & DLCs card with the Upload ZIPs button, the Installed mods / DLCs / ModHub views, a few mods with their Active switches, and the Mod space bar at the bottom -->

:::info
Activating, deactivating and deleting mods, and installing from ModHub, only work while the game is stopped. Uploading mod ZIPs works at any time. To stop the game, select **Stop** in the header and confirm with **Stop game**. The server itself must be running for the dashboard to list mods.
:::

## Install from ModHub

Mods from ModHub are managed by GIANTS, so you always get the version that's on ModHub.

1. Stop the game.
2. On the **Mods** tab, select **ModHub**.
3. Find the mod. The **Search this catalogue page** box searches the page you're on; change pages with **Previous** and **Next**. If you have the mod's ModHub link, paste it (or the mod ID) into the box that says "Paste a farming-simulator.com mod link or a mod ID".
4. Select **Install** next to the mod.

The dashboard waits until the server lists the mod, then tells you which file it was installed as. Mods that need other mods show **Requires:** with their names: install those too.

<!-- screenshot: fs22-mods-modhub.png | FS22 server, Mods tab, ModHub view with the game stopped: the catalogue list with Install buttons, one mod marked Installed, the "Paste a farming-simulator.com mod link or a mod ID" field -->

## Upload mods manually

You can upload mods from your PC in the dashboard or with an SFTP client. On your PC, mods are usually in:

```
C:\Users\<YourUsername>\Documents\My Games\FarmingSimulator2022\mods
```

### Upload in the dashboard

1. On the **Mods** tab, select **Upload ZIPs**.
2. Drop the mod ZIPs on the **Upload mods** window, or click it to browse. You can select several files at once.
3. Wait until each file shows **Installed**, then select **Done**.

Each ZIP can be up to 512 MB. New mods are installed inactive.

<!-- screenshot: fs22-upload-mods-dialog.png | FS22 server, Mods tab → Upload ZIPs: the "Upload mods" window with the drop area and an upload queue showing one mod Uploading and one Installed -->

:::tip
For mods larger than 512 MB, or many mods at once, use SFTP. See [How to manage your Farming Simulator 22 server files using FTP](manage-files-via-ftp.md).
:::

## Activating, deactivating and deleting mods and DLCs

### Activate a mod

1. Stop the game.
2. On the **Mods** tab, in **Installed mods**, turn on the switch in the **Active** column next to the mod. To activate several mods, tick them and select **Activate** in the bar that appears.
3. Select **Start game** in the header.

### Deactivate a mod

1. Stop the game.
2. Turn off the mod's switch in the **Active** column, or tick several mods and select **Deactivate**.

### Delete a mod

Deleting a mod frees up your mod space. Only inactive mods can be deleted.

1. Stop the game and deactivate the mod.
2. Select the bin icon next to the mod, or tick several mods and select **Delete**.
3. Confirm with **Delete**.

<!-- screenshot: fs22-mods-select-bar.png | FS22 server, Mods tab, Installed mods with the game stopped and two inactive mods ticked: the bar showing "2 selected" with the Activate, Deactivate, Delete and Clear buttons -->

### DLCs

All official Farming Simulator 22 DLCs are included on the server. You can't delete them, only turn them on or off in the **DLCs** view. If you activate a DLC, players need that DLC too to join the server.

## Updating mods

The dashboard can't update an installed mod in place yet. To update a mod, stop the game, deactivate and delete the old version, then install the new version from **ModHub** or upload it with **Upload ZIPs**, and activate it again.

ModHub mods can also be updated in the FS22 control panel by GIANTS Software, under **Mods**. To open it, go to the **Overview** tab and, on the **FS22 control panel** card, select the open-in-new-tab icon next to **Panel address**.

## Mod space

The **Mod space** tile on the **Overview** tab and the bar at the bottom of the **Mods** tab show how much of your plan's mod space you use. When it's full, delete mods you don't need, or select **Add storage** to add mod space on the **Billing** tab. See [Upgrade your server](upgrade-server.md).
