---
title: Creating a backup for your DayZ Server
keywords: ['dayz backup', 'dayz server backup', 'dayz creating backup', 'dayz persistence backup', 'dayz download world', 'dayz restore backup', 'dayz backups tab', 'fragnet dashboard']
---

# Backing up your DayZ server

Make a backup before you install mods, change the map or edit files, so you have something to go back to. Your server's world (the persistence: bases, vehicles, loot and characters) is in the mission folder, for example `mpmissions/dayzOffline.chernarusplus/storage_1`.

## Create a backup

A backup on the **Backups** tab contains all of your server's files: the mission folders with their persistence, the config files and the mods.

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.
2. Stop the server. DayZ saves its world while it runs, so a stopped server gives you an exact copy. (It can keep running if you don't mind losing the last few minutes.)
3. Open the **Backups** tab and select **Create backup**.
4. Give the backup a **Name**, for example "Before mod update", and select **Create backup**.
5. Start the server again.

The backup shows **In progress** until it's finished. For all the options, see [Creating a backup](../../control-panel/backups/creating-a-backup.md).

:::tip Daily backups
Turn on **Scheduled backups** on the **Backups** tab to back up every day without thinking about it. See [Scheduled backups](../../control-panel/backups/index.md#scheduled-backups).
:::

## Download only your world

To keep a copy of just the mission folder on your computer:

1. Open the **Files** tab and then the `mpmissions` folder.
2. Open the ⋯ menu of your mission folder (by default `dayzOffline.chernarusplus`) and select **Compress**. An archive appears in the same folder.
3. Open the ⋯ menu of the archive and select **Download**.
4. Delete the archive from the server afterwards, so it doesn't take up disk space.

See [File and folder actions](../../control-panel/file-manager.md#file-and-folder-actions).

## Restore a backup

To put the whole server back, open the **Backups** tab, open the backup's ⋯ menu and select **Restore**. The server stops and its files are replaced with the backup. See [Restoring a backup](../../control-panel/backups/restoring-a-backup.md).

To put back only the world:

1. Download the backup and extract it on your computer. See [Downloading a backup](../../control-panel/backups/downloading-a-backup.md).
2. In the extracted files, find the `storage_1` folder inside your mission folder and zip it.
3. Stop the server.
4. On the **Files** tab, open your mission folder and delete the current `storage_1` folder.
5. Upload the `.zip`, open its ⋯ menu and select **Extract**. Then delete the `.zip`.
6. Start the server.

For a large world, an SFTP client is easier. See [SFTP and FTP access](../../control-panel/file-manager.md#sftp-and-ftp-access).

Before a [world reset](./wipe-server.md), the dashboard offers to make a backup for you.
