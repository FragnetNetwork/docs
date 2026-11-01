---
title: Create and modify player roles for your Path Of Titans server
keywords: ['pot add player role', 'pot server add player role', 'path of titans server add player role', 'path of titans server player role', 'path of titans commands.ini', 'fragnet dashboard']
---

# Create and modify player roles for your Path Of Titans server

Player roles give players a set of admin command permissions, a chat color and other extras, without making them full admins. Roles are defined in the `Commands.ini` file, which you edit on the **Files** tab of the dashboard.

## Open Commands.ini

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your Path of Titans server.
2. Stop the server (see [Power controls](../../control-panel/basics.md#power-controls)).
3. Select the **Files** tab and open the folder `PathOfTitans/Saved/Config/LinuxServer`.
4. Select `Commands.ini` to open it in the editor. If the file isn't there, select **New file**, name it `Commands.ini` and select **Create** (see [Create a file or folder](../../control-panel/file-manager.md#create-a-file-or-folder)).
5. Make your changes as described below.
6. Select **Save file**, then start the server.

## Set up a role

1. Add a role. For each role, create a section titled `[Role:RoleName]`, where `RoleName` is the name of the role you want to create.

2. Add command permissions to the role so that players with this role can run those commands. Add a line `+Permission=PermissionName` under the role, where `PermissionName` is the name of the command permission to allow. You can find the list of commands and permissions in [Admin chat commands](admin-chat-commands.md).

3. Add a custom color to the role: `ChatColor=(R=255,G=255,B=255,A=255)`. The R, G and B values range from 0 to 255 and make up the color. The `A` value (transparency) is locked to 255, so changing it does nothing. If you leave the color out, it's white.

4. Assign the role to a player. Create a section `[PlayerRoles]` and, underneath it, add the player's Alderon Games ID (AGID), followed by `=`, followed by the role name. As a server admin you can also use `/promote (playername) (rolename)` and `/demote (playername)` in game to assign or remove roles.

:::tip
If you don't know how to find an Alderon Games ID (AGID), see [Find your Alderon Games ID](add-admins-find-agid.md#find-your-alderon-games-id-agid).
:::

5. You can customize the role further. Add any of these lines under the role section and set their value:

- `OverrideAdminChatColor=True/False`: set to `True` to let this role's chat color override the default admin chat color. Default: `False`.
- `AllowSpectatorAccess=True/False`: set to `True` to let this role use Spectator mode and the admin panel in game. Default: `False`.
- `ReservedSlot=True/False`: set to `True` to give this role a reserved slot on the server. Default: `False`.
- `CreatorModeAccess=True/False`: set to `True` to give this role Creator mode access. Default: `False`.
- `Hierarchy=0`: the rank of the role. A lower role can't use certain commands on a higher role. Default: `0`.

The number of slots kept free for roles with `ReservedSlot=True` is set with **Reserved slots** in `Game.ini`. Open the **Configuration** tab, select `Game.ini` and change **Reserved slots** in the **Session** group (see [Change a setting](../../control-panel/configuration.md#change-a-setting)).

### Commands that use Hierarchy

`ban`, `kick`, `promote`, `demote`

## Example Commands.ini

```ini
[Role:Admin]
+Permission=teleport
+Permission=teleportall
+Permission=setmarksall
+Permission=healall
ChatColor=(R=190,G=252,B=0,A=150)
OverrideAdminChatColor=True
ReservedSlot=True

[PlayerRoles]
123-456-789=Admin
```
