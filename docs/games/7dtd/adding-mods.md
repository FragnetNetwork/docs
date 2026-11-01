---
title: Installing mods
keywords: ['7dtd mods', '7 days to die mods', '7 days to die server mods', '7dtd server mods', '7dtd mod', '7 days to die mod', '7 days to die server mod', '7dtd server mod', 'mods folder', 'fragnet dashboard']
---

You install mods on a 7 Days To Die server by uploading them to a `Mods` folder in the server's files. There is no mod installer in the dashboard for this game.

## Download the mods

1. Find the mods you want on a mod site. Two well-known ones are [7daystodiemods](https://7daystodiemods.com/) and [NexusMods](https://www.nexusmods.com/7daystodie).
2. Download each mod to your computer and keep the archives somewhere easy to find.

## Upload the mods to your server

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your 7 Days To Die server.
2. Open the **Files** tab. You start in the server's root folder.
3. If there is no `Mods` folder yet, select **New folder**, enter `Mods` as the **Name** and select **Create**. The name must be exactly `Mods`, with a capital M.
4. Open the `Mods` folder and select **Upload**, or drag the mod archives onto the file list (see [Upload files](../../control-panel/file-manager.md#upload-files)). Uploads over 100 MB should go through [SFTP](../../control-panel/file-manager.md#sftp-and-ftp-access).
5. For each archive, open its ⋯ menu and select **Extract**.
6. Check the result: each mod needs its own folder directly inside `Mods`, with a `ModInfo.xml` file in it, for example `Mods/ModName/ModInfo.xml`.
7. Delete the archives you extracted: open the ⋯ menu and select **Delete**.
8. Restart the server: open ⋯ **More actions** at the top of the page and select **Restart**.

:::tip Extra folder level
If extracting creates an extra folder, such as `Mods/ModName/ModName/ModInfo.xml`, the game won't load the mod. The dashboard can't move files between folders, so fix the folder structure on your computer and upload the mod again, or move the folder with an SFTP client. See [Moving files between folders](../../control-panel/file-manager.md#moving-files-between-folders).
:::
