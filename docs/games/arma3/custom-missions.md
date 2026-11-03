---
title: Add a custom mission
keywords: ['arma 3 mission', 'arma 3 custom mission', 'arma 3 mpmissions', 'arma 3 pbo', 'arma 3 upload mission', 'arma 3 server mission', 'arma 3 class missions', 'arma 3 antistasi', 'fragnet dashboard']
---

# Add a custom mission to your Arma 3 server

An Arma 3 mission is a `.pbo` file, for example `MyMission.Altis.pbo`. The part after the first dot is the map the mission runs on, here Altis.

If the mission needs mods, install them first on the **Workshop** tab. See [Install Workshop mods](./workshop-mods.md).

## Upload the mission

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your server.
2. Select the **Files** tab and open the `mpmissions` folder.
3. Select **Upload** and choose the `.pbo` file.

Files over 100 MB are easier to upload over SFTP. See [Files and SFTP](../../control-panel/file-manager.md#upload-files) and [How to access your server files using FTP](../../FAQ/manage-server-files-via-ftp.md).

### Missions that come with a mod

Some mods, such as Antistasi, bring their mission with them. You don't upload anything: install the mod on the **Workshop** tab. The mission's name comes from the mod, so check the mod's Workshop page for it.

## Make the server load the mission

1. Open the **Configuration** tab and select **server.cfg**.
2. In the **Missions** card at the top, type the mission name in the empty box, or pick it from the list. The list shows the missions in your `mpmissions` folder. The name is the file name without `.pbo`, for example `MyMission.Altis`.
3. Select **Add mission**. The server plays the missions in the list in order.
4. Select **Save and restart**, or **Save** and restart the server later.

To stop a mission from loading, select the bin icon next to it. See [Change your server's settings](./configuration.md) for the rest of the page.

In the `server.cfg` file itself, the mission list looks like this:

```cpp
class Missions
{
    class Mission1
    {
        template = "MyMission.Altis";
        difficulty = "Regular";
        class Params {};
    };
};
```

## Pick a mission in game

An admin can also pick the mission in game. [Log in as admin](./become-admin.md) and type `#missions` in the chat to choose from the missions on the server.
