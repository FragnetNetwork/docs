---
title: Adding mods
keywords: ['adding mods to arma reforger', 'adding mods to arma reforger server', 'arma reforger mods', 'arma reforger server mods', 'arma reforger config.json', 'arma reforger mod id', 'arma reforger scenario id', 'arma reforger workshop', 'fragnet dashboard']
---

Arma Reforger servers download their mods from the Arma Reforger Workshop when they start. You tell the server which mods to load in the `mods` list of its `config.json` file, which you edit on the **Files** tab in the [Fragnet dashboard](VAR::PANEL_URL).

## Find the mod's ID and name

Each mod needs its ID and name. You can find them in two ways:

- **On the Workshop website**: open the mod on the [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop). The ID is the 16-character code at the start of the mod's address, for example `591AF5BDA9F7CE8B` in `.../workshop/591AF5BDA9F7CE8B-CaptureHold`.
- **From your game**: subscribe to the mod in the game, close the game and open the folder `C:\Users\<YourUsername>\Documents\My Games\ArmaReforger\addons\`. Each mod has a folder there. Open `ServerData.json` in the mod's folder to see its `id`, `name` and `version`, for example:

```json
{
   "id": "591AF5BDA9F7CE8B",
   "name": "Capture & Hold",
   "revision": {
      "version": "1.0.0",
      "dependencies": [],
      "scenarios": [],
      "downloaded": true
   }
}
```

## Add the mods to config.json

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your Arma Reforger server.
2. Select the **Files** tab.
3. Select `config.json` to open it in the editor.
4. Find the line `"mods": []` and add one entry per mod with its `modId` and `name`:

   ```json
   "mods": [
      {
         "modId": "591AF5BDA9F7CE8B",
         "name": "Capture & Hold"
      },
      {
         "modId": "PD7EGSE9T3KBGBK8",
         "name": "Name of the second mod"
      }
   ]
   ```

5. Separate the entries with a comma (`,`), but don't put a comma after the last one.
6. Select **Save file**, or press **Ctrl+S** (**Cmd+S** on a Mac). The editor marks JSON mistakes, such as a missing comma or bracket. Fix them before you save, or the server won't start.
7. Restart the server. It downloads the mods while it starts, which can take a few minutes the first time.

For more about the editor, see [Edit a file](../../control-panel/file-manager.md#edit-a-file).

:::tip Mod versions
You can add a `"version"` to a mod entry, for example `"version": "1.0.0"`, to keep the server on that version. Without it, the server loads the latest version of the mod. If you do set a version, change it in `config.json` when the mod updates.
:::

## Mods with a scenario

Some mods bring their own scenario. To play it, the server needs the scenario's ID. You find it in the mod's `ServerData.json` (in your game's `addons` folder, see above) under `scenarios`, as `gameId`:

```json
{
   "id": "3CUU9KNFJ6AUNXZD",
   "name": "Name of mod",
   "revision": {
      "version": "1.0.0",
      "dependencies": [],
      "scenarios": [
         {
            "name": "Name of scenario",
            "gameId": "{FGWZH7WSY6F7P45J}Missions/MissionHeader_1.conf"
         }
      ],
      "downloaded": true
   }
}
```

Copy the whole value, in this example `{FGWZH7WSY6F7P45J}Missions/MissionHeader_1.conf`, and set it as the server's scenario:

1. Open the **Configuration** tab. If it shows a list on the left, select **General**.
2. Select the **Startup** group and paste the value into the startup setting for the scenario ID.
3. Select **Save** and restart the server.

If your server has no startup setting for the scenario, put the value in `config.json` instead, as `"scenarioId"` in the `game` section. See [Startup](../../control-panel/configuration.md#startup) for how startup settings work.
