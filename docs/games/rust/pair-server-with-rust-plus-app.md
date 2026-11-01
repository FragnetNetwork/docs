---
title: Pairing your Rust server with Rust+ app
keywords: ['rust server rust+', 'rust server rust+ setup', 'rust server pair rust+', 'rust+ companion app', 'rust+ port', 'fragnet dashboard']
---

# Pair your Rust server with the Rust+ app

Rust+ is Facepunch's companion app. Once paired, your phone shows the map, team chat and alarms of your Rust server. Your server needs no setup for it: players pair it in game.

1. Download the Rust+ app on your phone:
   - Google Play: https://play.google.com/store/apps/details?id=com.facepunch.rust.companion
   - App Store: https://apps.apple.com/us/app/rust/id1487691681
2. Open Rust and join your server. If you can't find it, see [Connecting to your Rust server](connecting-to-server.md).
3. Press **ESC** and select **Rust+** in the menu.
4. Select **Pair with server**.

   ![Rust+ Pair Window](images/rust%2B-server.png)

5. Open the Rust+ app on your phone and select **Pair a server**.

   ![Rust+ Companion App](images/rust%2B-companion.png)

Your server is now paired with the Rust+ app on your phone.

## If pairing doesn't work

The app connects to your server on its Rust+ port. You can see it in the [Fragnet dashboard](VAR::PANEL_URL): on the **Configuration** tab, select **General** and look under **RCON and Rust+** > **Rust+ port**. If no port is shown there, or the Rust+ window in game says Rust+ isn't enabled for the server, [open a support ticket](VAR::SUPPORT_URL).

A **Full wipe** on the **Wipes** tab keeps Rust+ pairings, so players don't need to pair again after a wipe. See [Wiping your Rust server](./rust-wipe.md).
