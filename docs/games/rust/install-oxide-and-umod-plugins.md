---
title: Installing Oxide and uMod plugins for your Rust server
keywords: ['rust server oxide', 'rust server setup oxide', 'rust server install oxide', 'rust server umod plugins', 'rust server oxide plugins', 'rust server install plugins', 'rust server setup plugins', 'rust carbon', 'rust plugins tab', 'umod', 'fragnet dashboard']
---

# Installing Oxide (uMod) plugins on your Rust server

Plugins add features to your Rust server, such as kits, teleports, gather rates or admin tools. Most Rust plugins are published on [uMod](https://umod.org/plugins) and need a modding framework to run: Oxide (uMod) or Carbon. You manage both on the **Plugins** tab of your server.

## Step 1: Turn on Oxide

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your Rust server.
2. Select the **Plugins** tab. If you don't see it in the tab row, look under **More**.
3. In the **Modding framework** card, select the framework you want:
   - **Vanilla**: no plugins, the game as Facepunch ships it.
   - **Oxide (uMod)**: the classic loader for uMod plugins. It updates itself at every start.
   - **Carbon**: a faster loader that runs most uMod plugins. It also updates itself at every start.
4. Confirm with **Switch**.
5. If the server is running, select **Restart now** in the notice that appears. If it's offline, the framework is installed the next time the server starts. The first start with a new framework takes a little longer.

Only one framework can be on at a time. The one in use is marked **On**. A framework marked **Files present** was used before and its files are still on the server. If an option is greyed out, your server doesn't offer it.

When Oxide is on, your server has an `oxide` folder in its main folder, with the plugins in `oxide/plugins` and their configs in `oxide/config`. Carbon uses a `carbon` folder in the same way.

:::info Switching between Oxide and Carbon
Plugin files and configs stay in their own folder when you switch. Oxide plugins in the `oxide` folder aren't used by Carbon, so install them again after switching to Carbon. Switching to **Vanilla** turns plugins off at the next start without deleting them.
:::

## Step 2: Install plugins from uMod

1. On the **Plugins** tab, select **Browse uMod**.
2. Type in **Search uMod plugins** to find a plugin, or sort the list by **Most downloaded**, **Recently updated** or **Name**.
3. Select **Install** next to the plugin.

You see "Installing" followed by the plugin's name. While the server runs, the plugin loads within seconds; otherwise it loads the next time the server starts. Plugins you already have show **Installed**.

<!-- screenshot: rust-plugins-tab.png | Rust server with Oxide on, Plugins tab: the "Modding framework" card with "Oxide (uMod)" marked "On", and below it the "Browse uMod" view with a search term entered, a few results and their "Install" buttons (one showing "Installed") -->

If you see "Plugins need Oxide or Carbon. Choose one above, then restart the server.", go back to [Step 1](#step-1-turn-on-oxide).

## Install a plugin from another site

Plugins that aren't on uMod, for example paid plugins, are installed by uploading their `.cs` file.

1. On the **Files** tab, open the `oxide/plugins` folder (`carbon/plugins` if you use Carbon).
2. Select **Upload** and choose the plugin's `.cs` file. See [Upload files](../../control-panel/file-manager.md#upload-files).
3. Oxide loads new plugin files on its own while the server runs. If the plugin doesn't load, restart the server.

The plugin then also shows on the **Plugins** tab under **Installed**.

## Manage installed plugins

On the **Plugins** tab, the **Installed** view lists your plugins with their version, author and when they last changed.

- **Updates**: select **Check for updates**. A plugin with a newer version on uMod shows an **Update** tag with the version. Select **Update** next to it; the plugin reloads by itself.
- **⋯ menu** on a plugin's row:
  - **Edit config** opens the plugin's config file in an editor on the same tab.
  - **Reload** reloads the plugin, for example after you changed its config. Shown while the server runs.
  - **Open on uMod** opens the plugin's uMod page.
  - **Delete** unloads the plugin and deletes its file. Tick **Also delete its config file** to remove the config too. The plugin's data files stay.

## Edit plugin configs

Most plugins create a config file the first time they load, named after the plugin, in `oxide/config` (`carbon/configs` with Carbon). You can edit it in three places:

- **Plugins** tab: open the plugin's ⋯ menu and select **Edit config**.
- **Configuration** tab: the plugin configs are listed under the **Oxide configs** heading (**Carbon configs** with Carbon). See [Change a setting](../../control-panel/configuration.md#change-a-setting).
- **Files** tab: open the `oxide/config` folder. See [Edit a file](../../control-panel/file-manager.md#edit-a-file).

After you save a config, select **Reload** in the plugin's ⋯ menu on the **Plugins** tab so it reads the new settings. You can also send `oxide.reload PluginName` in the console.

Oxide's own settings are in `oxide/oxide.config.json`, listed as "Oxide settings" on the **Configuration** tab.
