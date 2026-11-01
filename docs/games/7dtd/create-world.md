---
title: Creating a new world
keywords: ['create 7dtd world', 'create 7 days to die world', 'create 7 days to die server world', 'create 7dtd server world', '7dtd world', '7 days to die world', '7dtd rwg', '7dtd wipe world', 'game world', 'world gen size', 'fragnet dashboard']
---

The world your 7 Days To Die server loads is set by four startup settings: **Game World**, **World Seed**, **World Gen Size** and **Game Name**.

## Choose a new world

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your 7 Days To Die server.
2. Open the **Configuration** tab and select **General** in the list on the left. The settings are in the **Startup** group.
3. Set **Game World** to the world you want the server to load, for example `Navezgane`, `RWG` (a randomly generated world), `PREGEN6k`, `PREGEN8k` or `PREGEN10k`.
4. If you chose `RWG`, also set:
   - **World Seed**: the seed the new world is generated from. If a world with the resulting name already exists, the server loads that world instead.
   - **World Gen Size**: the width and height of the generated world, between 2048 and 16384.
5. Set **Game Name** to a name for this save. It also affects the seed used to place decoration, such as trees.
6. Select **Save** in the bar at the bottom of the page.
7. Restart the server: open ⋯ **More actions** at the top of the page and select **Restart**. The server generates or loads the world while it starts.

See [Change a setting under General](../../control-panel/configuration.md#under-general) for more on saving these settings.

:::info
A random world can take a long time to generate. The larger the **World Gen Size**, the longer it takes to generate, and the longer players take to download and load the map the first time they join.
:::

## Remove old worlds

Deleting a world's save makes the server start that world from scratch.

1. If you might want the world back, make a [backup](../../control-panel/backups/index.md) first.
2. Stop the server with **Shut down**.
3. Open the **Files** tab and go to the `.local/share/7DaysToDie/Saves` folder.
4. Delete the world folders: open a folder's ⋯ menu and select **Delete**, or tick several folders and select **Delete** in the bar that appears.
5. For a random world, you can also delete its folder in `.local/share/7DaysToDie/GeneratedWorlds`, so the map is generated again.
6. Start the server with **Start**.

:::warning Only delete folders
Delete only the folders in `Saves`. Leave the files there, such as `serveradmin.xml`, which holds your admin list.
:::

## Wipe the whole server

A wipe deletes every file on the server, including worlds, mods, config files and your admin list, and then installs the game fresh. Make a [backup](../../control-panel/backups/index.md) first if you want to keep anything.

1. Open the **Configuration** tab and select **General**.
2. In the **Danger zone**, select **Wipe server**.
3. Type your server's name to confirm and select **Wipe server now**.

See [Danger zone: wipe the server](../../control-panel/configuration.md#danger-zone-wipe-the-server) for details.
