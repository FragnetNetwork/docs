---
title: Adding admins to your Rust server
keywords: ['rust admin', 'rust server admin', 'rust admin setup', 'rust server setup admin', 'rust ownerid', 'rust moderatorid', 'rust users.cfg', 'rust players tab', 'rust ban player', 'fragnet dashboard']
---

# How to add admins to your Rust server

Admins on a Rust server can use admin commands in game: keep the server clean of players who break your rules, but also teleport, spawn items and more. A full list of Rust server commands is on the [Rust wiki](https://rust.fandom.com/wiki/Server_Commands).

## Admin roles

Rust has two admin roles:

- **Owner** (`ownerid`): full admin rights in game, including every console command and adding other admins.
- **Moderator** (`moderatorid`): can kick, ban and use admin tools in game, but not every console command. Moderators can't add other admins.

You add an admin by their SteamID64: a 17-digit number that starts with `7656119`. It's in the address of their Steam profile when it looks like `https://steamcommunity.com/profiles/76561198000000000`. If their profile address uses a custom name (`/id/...`), look up the SteamID64 with a site such as [steamid.io](https://steamid.io/).

## Method 1: The Players tab

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your Rust server.
2. Select the **Players** tab. If you don't see it in the tab row, look under **More**.
3. In the **Owners and moderators** card, paste the SteamID64 or the `steamcommunity.com/profiles/` link into **SteamID64 or profile link**.
4. Next to it, pick **Moderator** or **Owner**.
5. Select **Add**.
6. Optionally fill in **Player name (optional)** and **Reason (optional)**, then select **Make owner** or **Make moderator**.
7. Ask the player to reconnect to the server to get the new role.

<!-- screenshot: rust-players-admins.png | Rust server, Players tab: the "Owners and moderators" card with one owner and one moderator listed (role tags visible), and the add row at the bottom with a SteamID64 typed into "SteamID64 or profile link", the role dropdown and the "Add" button -->

If the server is running, the change is made right away through the console. If it's offline, it's saved to the server's files and applies when the server starts.

Players who are online are listed under **Online now**. Open the ⋯ menu on their row and select **Make owner** or **Make moderator** to give them a role directly. To take a role away, open the ⋯ menu on the player in **Owners and moderators** and select **Remove admin rights**.

The **Bans** card on the same tab works the same way: paste a SteamID64 and select **Ban player**, or use **Ban**, **Kick** and **Unban** in the ⋯ menus.

:::info
The **Players** tab talks to your server over Web RCON. If it says that Web RCON is off, turn on **Web RCON** on the **Configuration** tab, under **General** > **RCON and Rust+**, and restart the server.
:::

## Method 2: The console

1. Start the server and open the **Console** on the **Overview** tab. See [Send a command](../../control-panel/basics.md#send-a-command).
2. To add an owner, send these two commands:

   ```
   ownerid 76561198000000000 "optional username" "optional reason"
   server.writecfg
   ```

   To add a moderator:

   ```
   moderatorid 76561198000000000 "optional username" "optional reason"
   server.writecfg
   ```

   `server.writecfg` saves the change to `users.cfg`, so it's kept after a restart.
3. Ask the player to reconnect to get the new role.

You can send the same commands from RCON tools such as [RustAdmin](https://www.rustadmin.com/). They need your server's address, the **RCON port** and the **RCON password**, all on the **Configuration** tab under **General** > **RCON and Rust+**.

## Method 3: Edit users.cfg

Owners and moderators are stored in `users.cfg`, in the folder `server/rust/cfg/`. If you changed your server identity, the file is in `server/<identity>/cfg/` instead.

1. Stop the server with **Shut down** at the top of the server page. Rust writes this file itself, so changes made while it runs can be overwritten.
2. On the **Files** tab, open `server/rust/cfg/` and select `users.cfg` to edit it. If the file isn't there, create it with **New file**. See [Edit a file](../../control-panel/file-manager.md#edit-a-file).
3. Add one line per admin:

   ```
   ownerid SteamID64 "optional username" "optional reason"
   moderatorid SteamID64 "optional username" "optional reason"
   ```

   For example:

   ```
   ownerid 76561198000000001 "Fragnet" "Server owner"
   ownerid 76561198000000002 "Fragnet2"
   moderatorid 76561198000000003 "Fragnet3" "Great helper"
   moderatorid 76561198000000004 "Fragnet4"
   ```

4. Select **Save file**, then start the server.

`users.cfg` also appears on the **Configuration** tab as "Owners and moderators", with a link to the **Players** tab, where the list is easier to manage.
