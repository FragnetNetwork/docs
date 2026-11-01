---
title: Setup Authentication Token for your Path of Titans server
keywords: ['pot authentication token', 'pot server authentication token', 'path of titans server authentication token', 'path of titans authentication token', 'pot server token', 'path of titans server token', 'alderon token', 'alderon hosting token', 'fragnet dashboard']
---

# Setup Authentication Token for your Path of Titans server

Your Path of Titans server needs an Alderon hosting token to start and to appear in the server browser. Alderon Games checks the token every time the server starts. It ties the server to the Alderon account that created it.

## Generate a token

1. Go to https://alderongames.com/oauth/hosting-token. Sign in with an Alderon account **that owns the game**. Keep this account secure: it becomes the host account of your server.
2. Select **Generate New Token** and copy the token right away.

:::warning
The page shows the token only once. If you leave or refresh the page, you can't see it again. If you lose your token, generate a new one and add it to your server.

A new token cancels your previous one. Other servers that still use the old token stop working until they get the new one.
:::

## Add the token to your server

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your Path of Titans server.
2. On the **Overview** tab, find the **Alderon token** card. If no token is set, it says "No Alderon token yet. The server cannot start without one."
3. Select **Add token**, or **Replace token** if the server already has one.
4. In the **New Alderon token** window, paste the token into the **Token** field. Paste the whole token without spaces.
5. Select **Save and start** if the server is stopped, or **Save and restart** if it's running. The server starts with the new token.

<!-- screenshot: pot-alderon-token-card.png | Path of Titans server, Overview tab: the "Alderon token" card with the token set (masked) and the "Replace token" button; optionally the "New Alderon token" window open with its three steps and the Token field (leave the field empty) -->

You can also add or replace the token on the **Configuration** tab: select **General**, then the **Server** group, and use **Add token** or **Replace token** under **Alderon token**.

If the token is correct and not expired, the server starts normally.

## If the server doesn't start

When Alderon refuses the token, the console on the **Overview** tab shows "Alderon refused the server's token: it is missing, expired or was replaced. Paste a new one to start the server." Generate a new token as described above, select **Paste new token** and save it.

## Share characters between servers

By default, characters are stored on the server itself. To share characters between several of your servers, set **Player database** to **Remote (Alderon account)** on each server: **Configuration** tab > **General** > **Advanced** group (see [Under General](../../control-panel/configuration.md#under-general)). Characters are then kept with Alderon under the token's account, so all these servers must use tokens from the same Alderon account. Switching the database doesn't move existing characters.
