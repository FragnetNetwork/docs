# Troubleshooting Procon layer

If you cannot connect to your Procon layer, go through these checks. You find everything on the **PRoCon** tab of your Battlefield server: open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers**, select your server and open **PRoCon** (if it's not in the tab row, look under **More**).

<!-- screenshot: procon-tab-connect.png | BF4 server, PRoCon tab with the layer Running: the PRoCon layer card with its status, Restart / Stop and the ⋯ More PRoCon actions menu open (Sync to my server, Reset password, Force stop, Remove layer), plus the Connect with PRoCon card (Host, Port, Username, Password with Show and Reset password) -->

## 1. Check that the layer is running

The status under **PRoCon layer** at the top of the tab should be **Running**.

- **Offline**: select **Start**.
- **Installing**: wait a minute or two until it's done.
- **Install failed**: open the ⋯ menu (**More PRoCon actions**), select **Remove layer** and confirm, then select **Create PRoCon layer** again. Removing deletes the layer with its plugins, plugin settings, accounts and logs. Your game server is not affected.
- **Suspended**: the layer is suspended together with your server. Check the **Billing** tab of your server.
- **Status unavailable**: we can't reach the layer right now. Try again in a minute.

## 2. Check that the layer can reach your server

The layer logs in to your Battlefield server with the server's address, RCON port and RCON password. If one of them changed, the tab shows a notice such as "The layer still uses your old RCON password, so it can't log in to your server." or "The layer still points at your server's old address or RCON port."

Select **Sync to my server** in the notice. You can also find **Sync to my server** in the ⋯ menu at any time.

## 3. Connect to the layer, not to the game server

In the PRoCon client, use the **Host** and **Port** from the **Connect with PRoCon** card. Don't use your Battlefield server's RCON port. You find that one on the **Overview** tab, in the **Connection** card, and under **Advanced: connect straight to the game server** on the **PRoCon** tab, but it's only meant for other tools that speak Battlefield RCON.

:::warning
Changes you make while connected straight to your Battlefield server's RCON port can be lost after you close your Procon client or the server restarts. Plugins only run on the layer, so make your changes while you are connected to the Procon layer.
:::

## 4. Check the username and password

Use the **Username** and **Password** from the **Connect with PRoCon** card. Select **Show** to see the password. If it says "Not set yet. Start the layer once, then show it again.", start the layer first.

If you lost the password or think someone else has it:

1. Select **Reset password** on the card, or in the ⋯ menu.
2. Confirm with **Reset password**. The layer restarts with a new admin password. Anyone connected is disconnected, and the old password stops working.
3. Select **Show** to see the new password and update it in your Procon client.

## 5. Check the permissions of the account

If you connect with an account you created yourself (see [Adding users to your Procon layer](add-user.md)), check that it has permissions. The permissions are in the layer's config named after your server's IP address and RCON port. Procon rewrites its configs when it stops, so stop the layer before you edit them:

1. On the **PRoCon** tab, select **Stop** and wait until the status is **Offline**.
2. Below the cards, select **Files** and open the **Configs** folder.
3. Open the config named after your server's IP and RCON port (`yourServersIP_yourServersRCONPort.cfg`).
4. Full permissions can be given to an account by entering **4185975** next to the account's username. It should look like this:

   ```
   procon.protected.layer.setPrivileges "admin" 4185975
   ```

5. Select **Save**, then **Start** the layer.
