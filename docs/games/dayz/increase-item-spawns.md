---
title: Increase Item Spawns
keywords: ['dayz', 'dayz loot', 'dayz loot table', 'dayz types.xml', 'dayz item spawns', 'dayz item spawn amount', 'dayz nominal', 'dayz central economy', 'dayz files tab', 'fragnet dashboard']
---

# Increasing spawn rates for items on your DayZ server

DayZ decides how much of each item spawns with its Central Economy. The amounts are in `types.xml`, in the `db` folder of the mission your server runs. This guide raises the number of shovels on the map. The same steps work for any item.

## Find your mission folder

Each map has its own mission folder in `mpmissions`, with its own `types.xml`:

| Map | Mission folder |
| --- | --- |
| Chernarus | `dayzOffline.chernarusplus` |
| Livonia | `dayzOffline.enoch` |
| Sakhal | `dayzOffline.sakhal` |
| Badlands | `dayzOffline.nasdara` |

The **Map** card on the **Overview** tab shows which map your server runs. A community map has its own mission folder.

## Edit types.xml

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.
2. Select the **Files** tab.
3. Open `mpmissions`, then your mission folder (for example `dayzOffline.chernarusplus`), then `db`.
4. Before you change anything, open the ⋯ menu of `types.xml` and select **Make a copy**. If something goes wrong, you can go back to the copy.
5. Open the ⋯ menu of `types.xml` again and select **Download**.
6. Open the file in a text editor on your computer, such as Notepad++ or Visual Studio Code, and search for the item, for example `name="Shovel"`.
7. Change the values (see below) and save the file.
8. Back on the **Files** tab, in the same `db` folder, select **Upload** and choose your edited `types.xml`.
9. Restart the server. The server reads `types.xml` when it starts.

:::info
The standard `types.xml` is larger than 1 MB, so the dashboard's editor can't open it. Download and upload it as above, or edit it over SFTP. See [Files and SFTP](../../control-panel/file-manager.md#sftp-and-ftp-access). If your mission uses a smaller file, you can select it to edit it directly in the dashboard.
:::

Check your XML before you restart: a missing closing tag in `types.xml` can stop items from spawning. Editors like Visual Studio Code highlight such mistakes.

## Item values

Each item in `types.xml` is a `<type>` block. The shovel looks like this (values differ between maps and game versions):

```xml
<type name="Shovel">
    <nominal>50</nominal>
    <lifetime>14400</lifetime>
    <restock>0</restock>
    <min>35</min>
    <quantmin>-1</quantmin>
    <quantmax>-1</quantmax>
    <cost>100</cost>
    <flags count_in_cargo="0" count_in_hoarder="0" count_in_map="1" count_in_player="0" crafted="0" deloot="0"/>
    <category name="tools"/>
    <tag name="floor"/>
    <usage name="Industrial"/>
    <usage name="Farm"/>
    <value name="Tier2"/>
    <value name="Tier3"/>
    <value name="Tier4"/>
</type>
```

| Value | What it does |
| --- | --- |
| `nominal` | How many of this item the server tries to keep on the map. |
| `min` | When fewer than this many are on the map, the server spawns more, up to `nominal`. |
| `lifetime` | Seconds an item stays in the world before it despawns, if nobody touches it. |
| `restock` | Seconds the server waits before it spawns more after the count drops below `min`. `0` spawns them gradually. |
| `quantmin`, `quantmax` | How full an item spawns, in percent, for example the bullets in an ammo box or the water in a bottle. `-1` means the item has no quantity. |
| `cost` | Spawn priority. Usually `100`; leave it as it is. |
| `flags` | Which copies count toward `nominal`: in containers (`count_in_cargo`), in tents and stashes (`count_in_hoarder`), on the map (`count_in_map`) and on players (`count_in_player`). `crafted` marks items that are only crafted, `deloot` items from dynamic events such as helicopter crashes. |
| `category` | The item's category, such as weapons, tools, containers or clothes. |
| `usage` | The kind of places it spawns in, such as Farm, Industrial, Medic or Hunting. |
| `value` | The map tiers it spawns in, from Tier1 near the coast to Tier4 deep inland. |

## Spawn more of an item

To get more shovels, raise `nominal` and `min`. For example, change `nominal` from `50` to `100` and `min` from `35` to `70`. Keep `min` lower than or equal to `nominal`.

Large increases put more items in the world, which can slow the server down. Raise values a little at a time.

:::tip
To undo your changes, delete the edited `types.xml`, rename your copy back to `types.xml` and restart the server. You can also restore a [backup](./make-backup.md).
:::

If you have questions, [open a support ticket](VAR::SUPPORT_URL).
