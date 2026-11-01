---
title: Loading custom map on your Rust server
keywords: ['rust server custom map setup', 'rust server custom map install', 'rust server level url', 'rust custom map', 'rust world size', 'rust map seed', 'rustmaps', 'fragnet dashboard']
---

# How to load a custom map on your Rust server

Besides Rust's procedural maps, your server can run a custom map. You can find custom maps on sites such as [RustMaps](https://rustmaps.com/). The server downloads the map from a link when it starts, so the map file must be online first.

## Step 1: Put the map online

1. Upload your custom `.map` file to a file host that gives a direct download link, such as Dropbox.
2. Copy the file's share link. A Dropbox link looks like this:

   ```
   https://www.dropbox.com/s/<randomcharacters>/<mapname>.map?dl=0
   ```

3. Change `dl=0` at the end to `dl=1`, so the link downloads the file instead of opening a web page:

   ```
   https://www.dropbox.com/s/<randomcharacters>/<mapname>.map?dl=1
   ```

## Step 2: Set the map on your server

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your Rust server.
2. Select the **Configuration** tab and select **General** in the list on the left.
3. In the **World** group, next to **Map**, select **Custom map**.
4. Paste the download link into the field that appears. It must start with `https://`.
5. Select **Save** in the bar at the bottom of the page. See [Under General](../../control-panel/configuration.md#under-general).
6. Restart the server. The map loads when the server starts.

A new map starts a fresh world. If you want to keep your current world, make a [backup](../../control-panel/backups/index.md) first.

## Go back to a procedural map

1. On the **Configuration** tab, select **General**.
2. In the **World** group, next to **Map**, select **Procedural**.
3. Set the **World size** (1000 to 6000) and **Seed**. **Randomise** picks a random seed. The same seed and size always make the same map.
4. Select **Save** and restart the server.

**World size** and **Seed** are hidden while a custom map is selected, because a custom map has its own.

:::tip
[Scheduled wipes](./rust-wipe.md#schedule-a-wipe) keep your custom map. The **New random map seed** option only applies to procedural maps.
:::
