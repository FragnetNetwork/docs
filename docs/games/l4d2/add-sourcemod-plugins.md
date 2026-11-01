---
title: Adding SourceMod plugins to Left 4 Dead 2 server
keywords: ['left 4 dead 2 sourcemod', 'left 4 dead 2 sourcemod plugins', 'left 4 dead 2 sourcemod plugins install', 'left 4 dead 2 sourcemod plugins installation', 'left 4 dead 2 sourcemod plugins setup', 'l4d2 smx upload', 'fragnet dashboard']
---

# Adding SourceMod plugins to Left 4 Dead 2 server

1. First, you need SourceMod installed. See [Installing Metamod and Sourcemod](install-metamod.md) if you need help.

2. Download the plugin you want from one of these sites. SourceMod plugins are `.smx` files.

   - https://forums.alliedmods.net/forumdisplay.php?f=108
   - https://www.sourcemod.net/plugins.php

3. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server. Open the **Files** tab and go to `left4dead2` → `addons` → `sourcemod` → `plugins`.

4. Select **Upload** and choose the plugin's `.smx` file, or drag the file onto the file list. See [Upload files](../../control-panel/file-manager.md#upload-files).

5. Once it has been uploaded, start or restart your server, and the plugin is installed. See [Power controls](../../control-panel/basics.md#power-controls).

:::info
If the plugin has any other instructions on setting it up, please read through them, as every plugin is unique and some need additional setup. If a plugin comes with other files, such as configs, translations or gamedata, upload them to the matching folders under `addons/sourcemod`.
:::
