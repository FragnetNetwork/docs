---
description: "Install Metamod:Source and SourceMod on your Left 4 Dead 2 server by uploading them on the Files tab."
title: Installing Metamod and Sourcemod on your Left 4 Dead 2 server
keywords: ['Left 4 Dead 2 metamod', 'Left 4 Dead 2 sourcemod', 'Left 4 Dead 2 metamod install', 'Left 4 Dead 2 metamod setup', 'Left 4 Dead 2 sourcemod install', 'Left 4 Dead 2 sourcemod setup', 'l4d2 metamod upload', 'fragnet dashboard']
---

# Installing Metamod and Sourcemod on your Left 4 Dead 2 server

SourceMod runs on top of Metamod\:Source, so you need both. You install them by uploading them to your server on the **Files** tab in the [Fragnet dashboard](VAR::PANEL_URL).

## Step 1: Download Metamod\:Source and SourceMod

1. Download the latest stable **Linux** build of [Metamod\:Source](https://www.sourcemm.net/downloads.php?branch=stable).
2. Download the latest stable **Linux** build of [SourceMod](https://www.sourcemod.net/downloads.php?branch=stable).

Both downloads are `.tar.gz` archives. Each one contains an `addons` folder. SourceMod also contains a `cfg` folder.

## Step 2: Upload and extract them

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.
2. Stop the server. See [Power controls](../../control-panel/basics.md#power-controls).
3. Open the **Files** tab and open the `left4dead2` folder.
4. Select **Upload** and choose both archives. See [Upload files](../../control-panel/file-manager.md#upload-files).
5. Open the ⋯ menu next to the Metamod\:Source archive and select **Extract**. Do the same for the SourceMod archive. Their files go into the `addons` and `cfg` folders inside `left4dead2`.
6. Delete the two archives: open each one's ⋯ menu and select **Delete**.

## Step 3: Start the server and check

1. Start the server.
2. In the **Console** on the **Overview** tab, type `meta version` and press **Enter**. Then type `sm version` and press **Enter**. See [Send a command](../../control-panel/basics.md#send-a-command).

If both commands answer with version details, Metamod\:Source and SourceMod are installed. Next, you can [add SourceMod plugins](add-sourcemod-plugins.md) and [make yourself an admin](become-admin.md).
