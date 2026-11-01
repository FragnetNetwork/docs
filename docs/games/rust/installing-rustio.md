---
description: "Install the Rust:IO live map extension on your Rust server from the Files tab."
title: Installing RustIO on your RUST server
keywords: ['rust server rustio', 'rust server setup rustio', 'rust server install rustio', 'rust live map', 'oxide extension', 'fragnet dashboard']
---

# Installing Rust\:IO on your Rust server

Rust\:IO is an Oxide extension that adds a live, interactive browser map of your Rust world. The map shows player locations, buildings and more.

:::warning
Rust\:IO is a third-party extension. Before you install it, check on [playrust.io](http://playrust.io/) that it's still available for the current version of Rust. An extension that doesn't match the game can stop your server from starting. If that happens, [remove Rust\:IO](#remove-rustio) again.
:::

## Install Rust\:IO

1. Make sure Oxide is on: open the **Plugins** tab of your server in the [Fragnet dashboard](VAR::PANEL_URL) and check that **Oxide (uMod)** is marked **On** in the **Modding framework** card. If it isn't, follow [Installing Oxide plugins](install-oxide-and-umod-plugins.md) and start the server once so Oxide installs.
2. Stop the server with **Shut down** at the top of the server page. The server must be stopped while you install Rust\:IO.
3. Download `Oxide.Ext.RustIO.dll` from http://playrust.io/latest.
4. On the **Files** tab, open the `RustDedicated_Data/Managed` folder.
5. Select **Upload** and choose `Oxide.Ext.RustIO.dll`, or drag the file onto the list. See [Upload files](../../control-panel/file-manager.md#upload-files).
6. Start the server. The extension loads with Oxide.

Rust\:IO is now installed. Search for your server name on [playrust.io](http://playrust.io/) to find its map.

## Remove Rust\:IO

Stop the server, delete `Oxide.Ext.RustIO.dll` from `RustDedicated_Data/Managed` on the **Files** tab and start the server again.

## Edit the Rust\:IO settings

Rust\:IO creates its config file, `RustIO.json`, in the `oxide/config` folder the first time it loads. You can edit it on the **Configuration** tab, where it's listed under **Oxide configs**, or on the **Files** tab. Restart the server after you change it.
