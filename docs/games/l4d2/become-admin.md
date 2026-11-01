---
title: Becoming an admin on Left 4 Dead 2 server
keywords: ['left 4 dead 2 admin', 'left 4 dead 2 admin setup', 'left 4 dead 2 admin setup guide', 'left 4 dead 2 admin guide', 'left 4 dead 2 admin installation', 'left 4 dead 2 admin installation guide', 'l4d2 admins.cfg', 'fragnet dashboard']
---

You become an admin with SourceMod. You need:

- SourceMod installed on your server. See [Installing Metamod and Sourcemod](install-metamod.md).
- Your SteamID. See [Finding your Steam64ID](find-steamid.md).

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server. Open the **Files** tab.

2. Go to `left4dead2` → `addons` → `sourcemod` → `configs` and select `admins.cfg` to open it in the editor. See [Edit a file](../../control-panel/file-manager.md#edit-a-file).

3. Scroll down to the end of the file until you find:
```
Admins
{

}
```

4. Now you need to input your info in this format:

```
  "PlayerNickname"
  {

   "auth"  "steam"

   "identity"  "insert_players_steamID"

    "flags"  "z"

    "immunity"  "99"

  }
```

In the end, it should look something like this:
```
Admins
{

  "PlayerNickname" 
  { 

   "auth"  "steam" 

   "identity"  "insert_players_steamID" 

    "flags"  "z" 

    "immunity"  "99" 

  }

}
```

5. Once done, select **Save file** and start or restart your server. See [Power controls](../../control-panel/basics.md#power-controls).

:::tip
If the server is already running, you can also load the new admin list without a restart: type `sm_reloadadmins` in the **Console** on the **Overview** tab. See [Send a command](../../control-panel/basics.md#send-a-command).
:::
