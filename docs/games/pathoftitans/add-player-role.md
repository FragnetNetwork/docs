---
title: Create and modify player roles for your Path Of Titans server
keywords: ['pot add player role', 'pot server add player role', 'path of titans server add player role', 'path of titans server player role']
---

# Create and modify player roles for your Path Of Titans server

You have to edit the `Commands.ini` file in `PathOfTitans/Saved/Config/LinuxServer/` directory which can be accessed via **File Manager** and save the changes with **Save Content** button on top-right side. 

1. Add some player roles. For each player role you must create a section with the title `[Role:RoleName]` where `RoleName` is the name of the role you want to create.

2. Add some command permissions to your player role so that someone with this role can execute those commands. In order to add a permission, you must add a line underneath your role: `+Permission=PermissionName`, where `PermissionName` is the name of the command permission to allow. You can find a list of commands [here](admin-chat-commands.md).

3. Add a custom color to your new role. Adding a color is similar to adding a command permission: `ChatColor={R=255,G=255,B=255,A=255}` where the R,G,B values range from 0 - 255 and combine to make up the color. Changing the `A` value will do nothing as it controls transparency and is locked to 255. The default color if left undefined is white.

4. Assign your new role to a player. You can do this by creating a new section `[PlayerRoles]`, and underneath, you can enter the Alderon Games ID (AGID) of the player, followed by `=`, followed by the role name. Alternatively, as a server admin, you can use the command `/promote (playername) (rolename)` and `/demote (playername)` in-game to assign or unassign player roles.
> If you don't know how to find your Alderon Games ID (AGID), you can check [this article](add-admins-find-agid.md).

![Commands](images/commands-role.png)

5. There is additional customization you can add to your player role. To use them, add any of following lines under your player role section and set their value:

`OverrideAdminChatColor=True/False` - Set to True to allow the specific player role chat color to override the default whitelisted admin chat color. Default value = `False`

`AllowSpectatorAccess=True/False` - Set to True to allow the specific player role to access the "Spectator" mode and the admin panel. Default value = `False`

`ReservedSlot=True/False` - Set to True to allow the specific player role to have a reserved slot in the server. Default value = `False`

`CreatorModeAccess=True/False` - Set to `True` to allow creator mode access for a player. Default value = `False`

`Hierarchy=0` - Determines the hierarchy of player roles. A lower role cannot do specific commands on a higher role. Default value = `0`

### Commands That Use Hierarchy:
`ban`
`kick`
`promote`
`demote`

## Example Commands.ini:
```
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