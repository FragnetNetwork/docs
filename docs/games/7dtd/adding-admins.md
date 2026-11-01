---
title: Adding admins
keywords: ['adding admins to 7dtd', 'adding admins to 7 days to die', 'adding admins to 7 days to die server', 'adding admins to 7dtd server', '7dtd admin', '7 days to die admin', '7 days to die server admin', '7dtd server admin', 'serveradmin.xml', 'fragnet dashboard']
---

This guide shows how to make a player an admin on your [7 Days To Die](https://fragnet.net/games/7d2d) server. Admins are listed in the `serveradmin.xml` file, which you edit in the **Files** tab of the dashboard.

## Add an admin in serveradmin.xml

1. Find the player's Steam64 ID. You can use a lookup site such as [steamid.xyz](https://steamid.xyz/): enter the player's Steam profile URL and copy the **Steam64 ID**.
2. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your 7 Days To Die server.
3. Stop the server with **Shut down** (see [Power controls](../../control-panel/basics.md#power-controls)). Changes made to the file while the server runs can be overwritten.
4. Open the **Files** tab and go to the `.local/share/7DaysToDie/Saves` folder.
5. Select `serveradmin.xml` to open it in the editor (see [Edit a file](../../control-panel/file-manager.md#edit-a-file)).
6. Find the users section:

   ```xml
   <adminTools>
     <users>
     </users>
   ```

7. Add this line between `<users>` and `</users>`. Put the player's Steam64 ID in `userid` and their name in `name`:

   ```xml
   <user platform="Steam" userid="76561198021925107" name="yourNickname" permission_level="0" />
   ```

   The result looks like this:

   ```xml
   <adminTools>
     <users>
       <user platform="Steam" userid="76561198021925107" name="yourNickname" permission_level="0" />
     </users>
   ```

8. Select **Save file**.
9. Start the server with **Start**.

`permission_level="0"` is the highest level and gives full admin rights. Add one `<user ... />` line for each admin.
