---
title: Creating whitelist for your Path Of Titans server
keywords: ['pot server whitelist', 'pot whitelist', 'path of titans server whitelist', 'path of titans whitelist', 'path of titans access tab', 'fragnet dashboard']
---

# Creating whitelist for your Path Of Titans server

With the whitelist on, only the players on the list can join your server. You turn it on and manage the list on the **Access** tab of the dashboard. Players are added by their Alderon Games ID (AGID). See [Find your Alderon Games ID](add-admins-find-agid.md#find-your-alderon-games-id-agid).

## Turn on the whitelist and add players

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your Path of Titans server.
2. Stop the server (see [Power controls](../../control-panel/basics.md#power-controls)). The whitelist switch is saved in `Game.ini`, which can only be changed while the server is stopped.
3. Select the **Access** tab, then **Whitelist**. If you don't see the **Access** tab, look under **More**.
4. Turn on **Only whitelisted players can join**.
5. In **Alderon IDs (one or more)**, enter the AGIDs of the players you want to allow. Separate several IDs with spaces or commas.
6. Select **Add**.
7. Start the server. Whitelist changes apply the next time the server starts.

You can add and remove players while the server is running. The changes apply at the next start. To remove a player, select the bin icon next to their ID.

:::info
The list only takes effect while **Only whitelisted players can join** is on. If the switch is off, the dashboard shows "The whitelist is off, so anyone can join."
:::

## Where the whitelist is stored

- The list is saved in `PathOfTitans/Saved/whitelist.txt`, with one AGID per line. You can also edit it on the **Files** tab (see [Edit a file](../../control-panel/file-manager.md#edit-a-file)).
- The switch is the `bEnforceWhitelist` setting in `Game.ini`. On the **Configuration** tab it's **Whitelist** in the **Chat and players** group of `Game.ini`.

### Example whitelist.txt

```
525-053-709
525-123-709
123-456-789
```
