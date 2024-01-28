---
title: Admin chat commands and permissions for Path of Titans server
keywords: ['pot admin chat commands', 'pot server admin chat commands', 'path of titans server admin chat commands', 'path of titans server admin commands', path of titans admin commands, 'pot admin commands', 'pot server admin commands', 'path of titans server admin commands', 'path of titans permissions', 'pot server permissions', 'path of titans server permissions' ]
---

# List of Admin Chat Commands:

To use these commands, simply log into your server and open the text chat in-game. Type your command and hit "Enter" to execute the command. Text commands can also be used when in Spectator Mode.

Optional parameters can be added anywhere inside the command and will change the way the command works. One Example is `/teleport` - By default, it teleports safely, making sure the player is on ground and not inside anything. But the keyword `unsafe` will stop the teleport from checking for a safe location.

When creating player roles, the permission to allow any command is the name of the command unless otherwise stated, for example, `/bring` relies on the "teleport" permission, so you must allow that permission in order for a role to use `/bring`.

## Everyone's Commands:
Commands in this section do not require permission to use.

Command | Example | Description | RCON Support
--- | --- | --- | ---
`/rules` | `/rules` | Lists the server's rules. | ❌
`/motd`  | `/motd` | Displays the server's Message of The Day. | ❌
`/help`  | `/help` | Lists all the commands that player has access to with a short description of each. | ✔️
`/clear`  | `/clear` | Clears the current chat channel. | ❌
`/mapbug`  | `/mapbug` | Copies the current player position to the clip board. | ❌
`/bugsnap`  | `/bugsnap` | Loads a dialogue for submitting a bug snapshot. | ❌
`/respawn`  |  `/respawn` | Kills your character and respawns them at a standard spawn point. Useful if players somehow get stuck. | ❌
`/mute <user>`  | `/mute Jiggy` |  Mutes the specified user. This only mutes them for the player, not the entire server. | ❌
`/unmute <user>`  | `/unmute Jiggy` | Unmutes the specified user. This only unmutes them for the player, not the entire server. | ❌
`/listplayers`  | `/listplayers` | Shows all players on the server. | ✔️
`/whisper [Username] [Message]`  | `/whisper Jiggy Hello there` | Whispers a message to the specified player. If no player is specified, it will whisper to the last player you whispered to. | ✔️
`/w [Username] [Message]`  | `/w Jiggy Hello there` | Shortcut for /whisper. | ❌

## Teleports:

Command | Example | Description | Permission | RCON Support
--- | --- | --- | --- | ---
`/teleport (coordinates)`  | `/teleport (X=-91112,Y=-176182,Z=13156)` | Teleports yourself to the specified coordinates. `unsafe` Optional parameter, use to change from a safe teleport to an unsafe teleport | `+Permission=teleport` | ✔️
`/teleport <user> (coordinates)`  | `/teleport Jiggy (X=-91112,Y=-176182,Z=13156)`| Teleports the user to the specified coordinates. `unsafe` Optional parameter, use to change from a safe teleport to an unsafe teleport | `+Permission=teleport`  | ✔️
`/teleport <user> <user>`  | `/teleport Bob Steve` | Teleports the first user to the second user. `unsafe` Optional parameter, use to change from a safe teleport to an unsafe teleport | `+Permission=teleport`  | ✔️
`/teleport <POIname>` | `/teleport talonspoint` | Teleports yourself to a point within the specified POI. `unsafe` Optional parameter, use to change from a safe teleport to an unsafe teleport | `+Permission=teleport`  | ✔️
`/teleport <user> <POIname>`  | `/teleport Jiggy talonspoint` | Teleports the user to a point within the specified POI. `unsafe` Optional parameter, use to change from a safe teleport to an unsafe teleport | `+Permission=teleport`  | ✔️
`/bring <user>` | `/bring Jiggy` | Brings the user to your location. `unsafe` Optional parameter, use to change from a safe teleport to an unsafe teleport  | `+Permission=teleport`  | ❌
`/goto <location>` | `/goto talonspoint` | Teleports you to the target location. The location can be either a username, a POI, or coordinates. `unsafe` Optional parameter, use to change from a safe teleport to an unsafe teleport | `+Permission=teleport` | ❌
`/teleportall <POIname>` | `/teleportall talonspoint` | Teleports all users on the server to a point within the specified POI. | `+Permission=teleportall`  | ✔️
`/teleportall (coordinates)`  | `/teleportall (X=-91112,Y=-176182,Z=13156)` | Teleports all users on the server to the specified coordinates. | `+Permission=teleportall` | ✔️
`/bringall` | `/bringall` | Teleports all players to your location. |   `+Permission=teleportall` | ❌

## Change Stats:

Command | Example | Description | Permission | RCON Support
--- | --- | --- | --- | ---
`/setmarks <number>` | `/setmarks 900` | Sets your marks to the specified number. | `+Permission=setmarks`  | ✔️
`/setmarks <user> <number>` | `/setmarks Jiggy 900` | Sets a players marks to the specified number. | `+Permission=setmarks`   | ✔️
`/setmarksall <number>` | `/setmarksall 900` | Sets all users' marks to the specified amount. | `+Permission=setmarksall`   | ✔️
`/addmarks <user> <number>` | `/addmarks Jiggy 200 ` | Add a number of marks to the player. | `+Permission=setmarks`   | ✔️
`/removemarks <user> <number>` | `/removemarks Jiggy 400` | Removes a number of marks from the player. | `+Permission=setmarks`   | ✔️
`/heal` | `/heal` | Heals yourself. | `+Permission=heal`   | ✔️
`/heal <user>` | `/heal Jiggy` | Heals the specified player | `+Permission=heal`   | ✔️
`/healall` | `/healall`| Heals everyone. | `+Permission=healall` | ✔️
`/godmode` | `/godmode` | Apply godmode to yourself. Use this command again to toggle it on/off. | `+Permission=godmode`  | ❌
`/godmode <user>` | `/godmode Jiggy` | Apply godmode to a user. Use this command again to toggle it on/off. | `+Permission=godmode`  | ❌
`/<attribute> <number>` | `/hunger 100` | Sets your hunger to 100. Use `/hunger <user> 100` to set a user's stats. Other examples: `/thirst 300`  `/stamina Jiggy 50` `/oxygen 20` | `+Permission=modify attribute` | ✔️
`/modattr <user> <attribute> <value>` | `/modattr Jiggy Stamina -100` | Modifies the user's attribute by the value specified. This is additive, rather than `/setattr`, which overrides the value. Some common attributes are `Health` `MaxHealth` `Stamina` `Hunger` `MaxHunger` | `+Permission=modify attribute` | ✔️
`/setattr <user> <attribute> <value>` | `/setattr Jiggy Stamina 20` | Sets the user's attribute to the value specified.  | `+Permission=set attribute` | ✔️
`/setattrall <attribute> <value>` | `/setattrall Stamina 20` | Sets the attribute for all players.  | `+Permission=set attribute all` | ✔️
`/getattr <user> <attribute>` | `/getattr Jiggy Stamina` | Gets Value for specified Attribute.  | `+Permission=get attribute` | ✔️
`/getallattr <user>` | `/getallattr Jiggy` | Lists all attribute names and their values.  | `+Permission=get attribute` | ✔️
`/rewardgrowth <user> <value>` | `/rewardgrowth Jiggy 0.1` | Rewards growth over time to the specified player.  | `+Permission=reward growth` | ❌
`/rewardwellrested <user> <value>` | `/rewardwellrested Jiggy 0.1` | Rewards Well Rested buff till the specified growth value is hit.  | `+Permission=reward well rested` | ❌

## Admin Tools:

Command | Example | Description | Permission | RCON Support
--- | --- | --- | --- | ---
`/save` | `/save` | Forces a server save. | `+Permission=save` | ✔️ 
`/load` | `/load` | Forces a server load. | `+Permission=load` | ✔️ 
`/promote <user> <adminrole>` | `/promote Jiggy dinomaster` | Promotes the player to the specified admin role. | `+Permission=promote` | ✔️
`/demote <user>` | `/demote Jiggy` | Removes all admin roles of that player. | `+Permission=promote` | ✔️
`/kick <user> <kickreason>` | `/kick Jiggy Spamming the chat.` | Kicks the user with a message. You can optionally leave the message blank. | `+Permission=kick` | ✔️ 
`/ban <user> <duration> <banreason> <userbanreason>`  | `/ban Jiggy 120 "Breaking rule number 12" "Don't break rule 12 next time!"` | Bans the user with for an amount of seconds with an optional message. To ban forever, set the duration to "0". The first ban reason is the reason shown to admins. The second ban reason is shown to the user who was banned. The messages must be surrounded in quotations. | `+Permission=ban` | ✔️ 
`/unban <user>`  | `/unban Jiggy` | Unbans the specified player. | `+Permission=unban` | ✔️ 
`/restart <seconds>` |  `/restart 120` | Restarts the server after the specified number of seconds. | `+Permission=restart` | ✔️
`/cancelrestart` | `/cancelrestart` | Cancels the server restart. | `+Permission=restart` | ✔️
`/announce <message>` | `/announce Everyone kill Jiggy for bonus points!` | Makes an announcement to everyone on the server. | `+Permission=announce` | ✔️
`/listpoi` | `/listpoi` | Lists all the POIs on the current map. | `+Permission=listpoi` | ✔️ 
`/listquests` | `/listquests` | Lists all quests currently available. | `+Permission=listquests` | ✔️ 
`/listroles` | `/listroles` |Lists all roles currently available. | `+Permission=listroles`  | ✔️ 
`/listwaters` | `/listwaters` | Lists all bodies of water on the map. | `+Permission=listwaters` | ✔️ 
`/listwaystones` | `/listwaystones`  | Lists all waystones on the map. | `+Permission=listwaystones` | ✔️ 
`/Weather <type>` | `/weather clearsky` | Sets the weather to the specified weather type. Types available are: `ClearSky` `Overcast` `Fog` `Cloudy` `Rain` and `Storm` | `+Permission=weather`  | ✔️ 
`/TimeOfDay <time>` | `/timeofday night` | Sets the time of day. Available times are `morning` `night` `day` and optionally you can specify a number for more precise time, example: `/timeofday 2000`. Midday is `1200` and midnight is `2400` or `0`. | `+Permission=time of day` | ✔️ 
`/Day` | `/night` | Shorthand for `/timeofday night`. Other shorthand time commands are `/day` and `/morning` | `+Permission=time of day`  | ✔️ 
`/ClearBodies` | `/clearbodies` | Clears all dead bodies from the map. | `+Permission=clearbodies` | ✔️ 
`/WaterQuality <tag> <0-100%>` | `/waterquality swampyreservoir 50` | Sets the water body of the tag specified to a percentage quality. |  `+Permission=waterquality` | ✔️  
`/WaystoneCooldown <tag> <0-100%>` | `/waystonecooldown centralwaystone 50` | Sets the waystone of the tag specified to a percentage cooldown remaining. | `+Permission=waystonecooldown`  | ✔️ 
`/PlayerInfo <username/AGID>` | `/playerinfo 123-456-789` | Shows player info. | `+Permission=playerinfo` | ✔️  
`/ServerMute <username/AGID> <time> <admin reason> <user reason>` | `/servermute 123-456-789 20m "reason for admin" "reason for muted player"` | Mutes a player server wide. Time is specified in minutes, hours or days. e.g. 20m, 4h or 1d. If 0 is given for time, it will be forever. | `+Permission=servermute`  | ✔️ 
`/ServerUnmute <username/AGID>` | `/serverunmute 123-456-789` | Removes a server wide mute for a player. | `+Permission=serverunmute`  | ✔️ 
`/Whitelist <username/AGID>` | `/whitelist 123-456-789` | Adds a player to the whitelist for the server. | `+Permission=whitelist`  | ✔️ 
`/DelWhitelist <username/AGID>` | `/delwhitelist 123-456-789` | Removes a player from the server whitelist. | `+Permission=delwhitelist`  | ✔️ 
`/ReloadBans` | `/reloadbans` | Reloads server bans from the ban file. | `+Permission=reloadbans` | ✔️ 
`/ReloadMutes` | `/reloadmutes` | Reloads server mutes from the mutes file. | `+Permission=reloadmutes`  | ✔️ 
`/ReloadWhitelist` | `/reloadwhitelist` | Reloads server whitelist. | `+Permission=reloadwhitelist`   | ✔️ 
`/ReloadRules` | `/reloadrules` | Reloads server rules. | `+Permission=reloadrules`   | ✔️ 
`/ReloadMOTD` | `/reloadmotd` | Reloads the server's MOTD. | `+Permission=reloadmotd`   | ✔️ 
`/ClearCreatorObjects` | `/clearcreatorobjects` | Removes and refunds all placed Creator Mode Objects on the server. | `+Permission=clearcreatorobjects` | ✔️  
`/LoadCreatorMode <SaveName>` | `/loadcreatormode rockworld` | Loads the saved Creator Mode data from the specified save slot. | `+Permission=loadcreatormode`  | ✔️  
`/SaveCreatorMode <SaveName>` | `/savecreatormode rockworld` | Saves the Creator Mode data to the specified save slot. | `+Permission=savecreatormode`  | ✔️ 
`/ResetCreatorMode` | `/resetcreatormode` | Resets Creator Mode Objects to their default, removing placed objects and changing map objects to their original state. | `+Permission=resetcreatormode`  | ✔️  
`/RemoveCreatorMode <SaveName>` | `/removecreatormode rockworld` | Removes the Creator Move data from the specified save slot. | `+Permission=removecreatormode` | ✔️   
`/ListCreatorMode` | `/listcreatormode` | Lists the saved Creator Mode saves. | `+Permission=listcreatormode` | ✔️  
`/SkipShed <Username>` | `/skipshed Jiggy` | Instantly completes yours or the specified player's shedding. | `+Permission=skipshed` | ❌  
`/GiveQuest <user> <questname>` | `/givequest Jiggy Collect Mushrooms` | Assigns the specified quest to that player. | `+Permission=givequest`  | ✔️
`/CompleteQuest <user> <questname>` | `/completequest Jiggy Collect Mushrooms` | Completes the user's current quest or the specified quest if name is provided. | `+Permission=completequest`  | ❌
`/EditQuests <user>` | `/editquests Jiggy` | Edit the player's quests. | `+Permission=editquests`  | ❌
`/SetWound <Username> [Category] [Value]` | `/setwound Jiggy headleft 1` | Sets a cosmetic wound. | `+Permission=setwound`  | ❌
`/SetPermaWound <Username> [Category] [Value]` | `/setpermawound Jiggy headleft 1` | Sets a permanent cosmetic wound. | `+Permission=setpermawound`  | ❌
`/ClearEffects` | `/cleareffects` | Clear all effects on the current character. | `+Permission=cleareffects`  | ❌
`/ClearCooldowns` | `/clearcooldowns` | Clear all ability cooldowns on the current character. | `+Permission=clearcooldowns`  | ❌