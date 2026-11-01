---
title: Wiping your Rust server
keywords: ['rust server wipe', 'rust wipe', 'rust map wipe', 'rust blueprint wipe', 'rust full wipe', 'rust forced wipe', 'rust scheduled wipe', 'rust automatic wipe', 'rust wipe seed', 'rust server remove player data', 'rust wipes tab', 'fragnet dashboard']
---

# How to wipe your Rust server

Many Rust communities reset their world on a fixed cycle, for example every week, every two weeks or every month, to keep the server fresh. You can wipe right away or schedule wipes on the **Wipes** tab of your server in the [Fragnet dashboard](VAR::PANEL_URL).

:::danger
A wipe deletes files for good. Keep **Back up first** ticked when you wipe now, or make a [backup](../../control-panel/backups/index.md) before you wipe by hand.
:::

## What a wipe deletes

**Wipe now** and scheduled wipes offer the same choices under **What to wipe**:

| Option | What it deletes |
| --- | --- |
| **Map** | The map and its saves. Players keep their blueprints. |
| **Map and blueprints** | The map, its saves and every player's blueprints. |
| **Full wipe** | Map, blueprints, player data, teams, clans and sign images. Rust+ pairings stay. |

Bans stay after a wipe.

## The monthly forced wipe

Facepunch releases the monthly Rust update on the first Thursday of each month at 19:00 UK time, and every server's map is wiped. The dashboard shows when the next one is:

- The **Wipes** tab shows it in the **Next forced wipe** card.
- The **Wipes** card on the **Overview** tab shows it as **Forced wipe**, next to your **Next scheduled** wipe. In the last three days before a forced wipe, the card also shows a reminder.

Restart your server after the release to get the update. To wipe on that day automatically, [schedule a wipe](#schedule-a-wipe) that repeats **On forced wipe day**.

## Wipe now

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your Rust server.
2. Select the **Wipes** tab. If you don't see it in the tab row, look under **More**. You can also select **Manage wipes** in the **Wipes** card on the **Overview** tab.
3. In the **Next forced wipe** card, select **Wipe now**.
4. Under **What to wipe**, pick **Map**, **Map and blueprints** or **Full wipe**.
5. Leave **Back up first** ticked to make a backup before anything is deleted. The backup holds your saves, configs and plugins (not the game files) and uses one backup slot.
6. Tick **New random map seed** if you want a new procedural map. A custom map keeps its own.
7. Type the server name shown in the dialog to confirm, then select **Wipe now**.

<!-- screenshot: rust-wipes-tab.png | Rust server, Wipes tab: the "Next forced wipe" card with its date and the red "Wipe now" button, and below it the "Scheduled wipes" card with the timezone line, "Change timezone", "Schedule a wipe" and at least one scheduled wipe row (name, preset tag, time, repeat, seed and warnings) -->

The server stops and saves, the files are deleted, and the server starts again if it was running. Players are disconnected while this happens. The dialog shows each step. It takes a few minutes, and you can close the dialog without stopping the wipe. When it's finished you see "Wipe done." and how many files were deleted.

If the backup fails, nothing is deleted. [Delete an old backup](../../control-panel/backups/index.md#backup-limits) to free a slot, or wipe without a backup.

## Schedule a wipe

Scheduled wipes run on their own: at the set time the server stops, the files are deleted and the server starts again.

1. On the **Wipes** tab, check the line at the top of the **Scheduled wipes** card. It says which timezone your wipes run in ("Times are in" followed by the timezone). If no timezone is set yet, wipes run in UTC. To change it, select **Change timezone**, pick a **Wipe timezone** and select **Save**.
2. Select **Schedule a wipe**.
3. Under **What to wipe**, pick **Map**, **Map and blueprints** or **Full wipe** (see [What a wipe deletes](#what-a-wipe-deletes)).
4. Under **Repeat**, choose **Once**, **Every week**, **Every two weeks**, **Every month** or **On forced wipe day**.
5. Under **When**, pick the date and time of the (first) wipe in the wipe timezone. A repeating wipe keeps this clock time, also across summer time. With **On forced wipe day** the time is fixed: the first Thursday of each month at 19:00 UK time. Your server updates when it starts again after that wipe.
6. Enter the **Server name after the wipe** and the **Description after the wipe**. Both are set at every wipe. `%DAY%` and `%MONTH%` become the wipe date, for example `My Rust Server | Wiped %DAY%/%MONTH%`.
7. Under **Map seed**, choose:
   - **Keep the current seed**: the same procedural map comes back fresh.
   - **New random seed at every wipe**: a new procedural map each time.
   - **Use this seed**: enter a seed from 0 to 2147483647.
8. Under **Chat warnings before the wipe**, tick when players get a warning in chat: 60, 30, 15, 10, 5 or 1 minutes before. Edit the message if you like. `{min}` becomes the minutes left, so the default "Server wipe in `{min}` minutes" reads "Server wipe in 10 minutes".
9. Select **Schedule**. You see "Wipe scheduled."

<!-- screenshot: rust-schedule-wipe.png | Rust server, Wipes tab, "Schedule a wipe" dialog open: "What to wipe" options, "Repeat" set to "Every week", "When", "Server name after the wipe", "Description after the wipe", "Map seed" choices and "Chat warnings before the wipe" with a few minutes ticked -->

The wipe appears under **Scheduled wipes** with its time, how often it repeats, the seed, the number of warnings and whether the server uses a custom map. After it has run, the row shows when it last ran, or why the last run failed.

:::tip
The scheduled wipe sets the server name and description at every wipe. If you change the name or description on the **Configuration** tab later, update your scheduled wipes too, or the next wipe sets them back.
:::

### Edit or delete a scheduled wipe

1. On the **Wipes** tab, open the ⋯ menu on the wipe's row.
2. Select **Edit** to change it, then **Save**. Or select **Delete** and confirm with **Delete**. Deleting a scheduled wipe changes nothing on the server.

A wipe can't be changed while it's running.

:::info
- Older wipes that were set up with a hand-picked list of files show the tag **Custom files**. When you edit one, you can keep its stored file list or switch it to one of the options above. New wipes always use one of the three options.
- If the **Scheduled wipes** card says that creating and editing wipes comes with an update, your existing scheduled wipes still run and you can delete them, but you can't create or edit wipes on that server yet.
:::

### Map size and custom maps

Wipes don't change the map size. To change it, or to switch to a custom map, use the **World** group on the **Configuration** tab. See [Load a custom map](./load-custom-map.md). A new map, size or seed starts a fresh world at the next restart.

## Wipe by hand in the Files tab

You can also delete the save files yourself.

1. Stop the server with **Shut down** at the top of the server page. See [Power controls](../../control-panel/basics.md#power-controls).
2. On the **Files** tab, open the `server/rust` folder. If you changed your server identity, open `server/<identity>` instead.
3. Delete the files for what you want to wipe:
   - **The world**: files ending in `.map` and files with `.sav` in their name. On a procedural map their names start with `proceduralmap`.
   - **Blueprints**: files whose names start with `player.blueprints.` and end in `.db`.
   - **Other player data**: the other files whose names start with `player.` and end in `.db`.

   To delete several files at once, tick them and select **Delete**. See [Select several items](../../control-panel/file-manager.md#select-several-items).
4. Start the server.

Don't delete the `cfg` folder. It holds `server.cfg`, `users.cfg` (owners and moderators) and `bans.cfg`.

:::warning
**Wipe server** in the **Danger zone** of the **Configuration** tab is not a Rust wipe. It deletes every file on the server, including your configs and plugins, and installs Rust fresh. See [Danger zone: wipe the server](../../control-panel/configuration.md#danger-zone-wipe-the-server).
:::
