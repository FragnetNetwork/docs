---
title: Managing bans on your Path of Titans server
keywords: ['pot server ban player', 'pot server ban', 'path of titans server ban player', 'path of titans server ban', 'path of titans unban', 'path of titans bans.txt', 'fragnet dashboard']
---

# Managing bans on your Path of Titans server

You can ban and unban players on the **Access** tab of the dashboard, by editing the `bans.txt` file yourself, or with chat commands in game. Bans use the player's Alderon Games ID (AGID). See [Find your Alderon Games ID](add-admins-find-agid.md#find-your-alderon-games-id-agid).

## Ban a player in the dashboard

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your Path of Titans server.
2. Select the **Access** tab, then **Bans**. If you don't see the **Access** tab, look under **More**.
3. Enter the player's **Alderon ID**. You can ban one player at a time.
4. Choose the **Length**: **Permanent**, or 1, 3, 7 or 30 days.
5. Optionally, fill in:
   - **Message to the player**: shown when they try to join.
   - **Note for admins**: only admins see it.

   Messages can't contain a colon (`:`) or line breaks, and are up to 200 characters.
6. Select **Ban player**.

You don't need to restart the server. It reads the ban list again every minute, so bans and unbans take effect within a minute.

The list shows each ban with its length: **Permanent**, "Until" and the end date, or **Ended** once a temporary ban has run out.

### Unban a player

On **Access** > **Bans**, select the bin icon next to the player's ID. The unban takes effect within a minute.

## Edit bans.txt yourself

The dashboard saves bans in `PathOfTitans/Saved/bans.txt`. You can also edit this file on the **Files** tab (see [Edit a file](../../control-panel/file-manager.md#edit-a-file)), for example to set a ban that ends on a specific date. Select **Save file** when you're done.

Add each ban on a new line in this format:

`AGID:UnixTimestamp:AdminReason:UserReason`

Variable|Example|Description
---|---|---
AGID|`123-443-512`|The Alderon Games ID of the player.
UnixTimestamp|`1644464516`|For a temporary ban, the Unix timestamp of the date the player is unbanned. You can generate one at [https://www.epochconverter.com/](https://www.epochconverter.com/). For a permanent ban, use `0`.
AdminReason|`Admin message here!`|An internal note that only admins see. Can be left blank. You can't use a colon `:` in it, or your bans break.
UserReason|`Banned for spamming the chat.`|The message the player sees when they try to join. Make it clear so they understand why they were banned. You can't use a colon `:` in it, or your bans break.

### Example bans.txt

```
525-053-709:0:Reason for admins here:Stay out of my server
123-456-678:1645059401:I have banned them:Broke rule number three
543-226-532:1645059400:admin note here:You are banned because you were rude
766-980-003:0::Broke rule 12 so you are permabanned.
```

## Ban players in game

You need to be an admin, or have a role with the ban permission. See [Adding admins](add-admins-find-agid.md).

### Ban a player

Log into your server and type in chat: `/ban <playername> <reason>`. For example: `/ban Jiggy Breaking rule 12`

You can leave the reason blank.

### Unban a player

`/unban PlayerID` unbans the player.

### Reload the ban list

`/reloadbans` reloads the ban list right away. Otherwise it's reloaded every minute.
