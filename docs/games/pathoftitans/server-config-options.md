# Configuration options for your Path of Titans server

**Important Note:** The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.

To change the configuration options, you must edit your `Game.ini` file.

The file is located in following directory: `PathOfTitans/Saved/Config/LinuxServer/` which can be accessed via **File Manager** on the [Fragify panel](VAR::FRAGIFY_URL).

**Note:** Each option must be on its own line or else they will not work.

## IGameSession Options
Inside the **Game.ini** file, add a header called `[/Script/PathOfTitans.IGameSession]` and put any of the following settings underneath. Each line must be listed under this header or else they will not work.

Config Name | Description
--- | ---
`ServerName=My_Server` | Specifies the public name of the server. Note: To have a space in your server name, you must use underscores `_` as spaces.
`MaxPlayers=100` | Sets the max number of players on a server.
`ServerPassword=Password123` | Sets a password to enter the server.
`bServerPaidUsersOnly=false` | Specifies if the server allows free-to-play users to join.
`bServerAllowChat=true` | Enables or disables text chat for the entire server.
`bServerGlobalChat=true` | Enables or disables the global chat channel on the server.
`bServerFish=true` | Enables or disables fish spawning.
`bServerWaterQualitySystem=true` | Enables or disables the water quality system.
`bOverrideWaterRegeneration=false` | Enabled or disables overriding water regeneration. If set to false, it will use the default values.
`bEnableWaterRegeneration=true` | Sets whether water will naturally regenerate over time. If this is disabled, please ensure you have water restoration quests on the map you are hosting, otherwise you will eventually run out of water.
`WaterRegenerationRateMultiplierUpdate=180` | The water regeneration rate multiplier update.
`WaterRegenerationRate=60` | Amount of time in seconds before water applies a regeneration amount. Setting this value too low makes the server update water more frequently and can cause lag.
`WaterRegenerationValue=10` | Amount of water regenerated every cycle. This scales depending on how large the body of water is.
`WaterRainRegenerationIncrement=20.0` | Multiplier that increases the amount of water restored when it rains.
`bServerWaystoneCooldownRemoval=true` | Enables or disables the ability for players to spend marks to insta-cooldown Waystones.
`OverrideWaystoneCooldown=-1` | Overrides the cooldown timer for Waystones in seconds. -1 will use the default cooldown timer.
`MaxCompleteQuestsInLocation=3` | Determines how many quests must be completed within a POI before it is 'completed'. Default `3`
`bServerFallDamage=true` | Enables or disables fall damage for all users on the server.
`ServerDiscord=aY5CzgZk` | Specifies the connected community Discord server. This must be only the letters/numbers after the discord.gg part of the server invite link. Example: `https://discord.gg/aY5CzgZk` should only use `aY5CzgZk` Be sure to use a permanent invite link, or else it will expire.
`ServerDeadBodyTime=0` | Specifies how long a dead body will persist for in seconds. A value of 0 means it will persist forever.
`bServerAllowMap=true` | Enables or disables the full map for the entire server.
`bServerAllowMinimap=true` | Enables or disables the minimap for the entire server.
`bServerHomeCaves=true` | Enables or disables home caves on your server.
`bServerEditAbilitiesInHomeCaves=true` | If true, players can only edit abilities in their home caves. If false, players can edit their abilities anywhere so long as they are sleeping. Recommended to be set to `true` if you also enable home caves on your server.
`bServerHatchlingCaves=true` | Enables/Disables the tutorial Hatchling Caves. If this is enabled, players will spawn in a tutorial area at `0` growth, and completing quests will bring them to `0.3` growth by the time they exit. If this is disabled, players will spawn in the world at `0.3` growth and completely skip the tutorial.
`bServerHungerThirstInCaves=false` | Enables/Disables Hunger and Thirst in caves. If disabled, Dinosaurs will not lose hunger or thirst in caves and will take no damage if they have no food or water.
`bServerGrowth=true` | Enables/Disables Growth on your server. If disabled, all dinosaurs will spawn as Adults, and all existing characters will be bumped up to Adult.
`GlobalPassiveGrowthPerMinute=0` | Adds additional passive growth per second to all dinosaurs. Remember, full growth = `1` so a good value for this might be `0.005`, which means a player would take 200 minutes (3.3 hours) to reach adulthood. Growth amount currently applies equally across all dinosaurs. Setting this to `0` disables passive growth.
`QuestGrowthMultiplier=1` | Allows you to adjust the rate of growth earned by players when they complete quests. If you want to disable growth from quests, set this value to `0`.
`QuestMarksMultiplier=1.0` | Specifies the multiplier used when rewarding marks for quest completion.
`bOverrideLocalQuestCooldown=false` | If set to `true` will allow you to override the time it takes for a local quest to cooldown after completion.
`LocalQuestCooldown=3600` | Time it takes in seconds for a quest to cooldown before it can be completed again. Default `3600` (1 hour)
`bOverrideLocationQuestCooldown=false` |  If set to `true` will allow you to override the time it takes for the POI completion reward to reset after reaching 100%. Default `false`
`LocationQuestCooldown=3600` | Time it takes in seconds for a the POI Completion reward to reset before it can be completed again. Default `3600` (1 hour)
`bLoseGrowthPastGrowthStages=true` | Allows players to lose growth past Juvenile/Adolescent/Sub-Adult/Adult growth states when they die.
`CombatDeathMarksPenaltyPercent=25` | Percent of total marks a player will lose when they die from combat. Default `25`
`CombatDeathGrowthPenaltyPercent=10` | Percent of growth a player will lose when they die from combat. Default `10`
`FallDeathMarksPenaltyPercent=5` | Percent of total marks a player will lose when they die from fall damage. Default `5`
`FallDeathGrowthPenaltyPercent=2` | Percent of growth a player will lose when they die from fall damage. Default `2`
`SurvivalDeathMarksPenaltyPercent=10` | Percent of total marks a player will lose when they die from starving/thirst/drowning. Default `10`
`SurvivalDeathGrowthPenaltyPercent=5` | Percent of growth a player will lose when they die from starving/thirst/drowning. Default `5`
`AFKDisconnectTime=600` | Specifies the amount of time in seconds before a player will be automatically disconnected from the server if they are idle/AFK. Useful to prevent idle players from filling your server. Default `600` seconds (10 minutes). If set to `0`, no players will ever be kicked for being idle.
`MaxClientPingMs=0` | Specifies the maximum ms ping before auto-disconnecting the player. `0` will disable this option. Use to prevent high-ping players causing issues for your server.
`MaxClientPingDuration=0` | Specifies the duration of time in seconds the player's ms ping must be above the `MaxClientPingMs` before being disconnected.
`ServerLogoutTime=60` | The amount of time required to be on the logout menu before a player safe logs. Set to `0` if you want instant logouts. Default is `120` seconds.
`bServerAntiRevengeKill=true` | Will only work when a Database is set to remote, for hived servers. It is planned to work for all servers in the future. When set to `true`, when a player is killed, any of their other characters within a certain radius are flagged with a 10 minute timer, which prevents those specific characters from logging back in right away. Characters that are further away are unaffected by the login timer.
`RevengeKillDistance=100000` | Will only work when a Database is set to remote, for hived servers. It is planned to work for all servers in the future. Specifies the radius of the Anti-Revenge Kill distance. Defaults to `100000` which is 1 km.
`MaxCharactersPerPlayer=30` | Specifies the maximum number of characters a user can have in total.
`MaxCharactersPerSpecies=1` | Specified the maximum number of characters a user can have per species.
`bLoseQuestsOnDeath=true` | Specifies whether quests will automatically fail when a player dies. Defaults to `true`
`SpeedhackDetection=1` | Setting for action taken when speed hacks are detected. 0 = `none`, 1 = `log`, 2 = `kick`, 3 = `ban`. From settings 1-3, a PlayerHack webhook will also be sent.
`SpeedhackThreshold=10` | The amount of speedhack detections that will be allowed per minute before the `SpeedhackDetection` action is taken. A value of 0 will disable detection. This value helps to minimize false positives due to packet loss or lag.

## IGameMode Options
Inside the **Game.ini** file, add a header called `[/Script/PathOfTitans.IGameMode]` and put any of the following settings underneath. Each line must be listed under this header or else they will not work.

Config Name | Description
--- | ---
`ServerStartingTime=1350` | Specifies the time of day the server begins at after a restart. Time is scaled between 0-2400. Example: `100` = 1:00 AM, `1200` = 12:00 PM, and `1800` = 6:00 PM
`bServerDynamicTimeOfDay=1` | Specifies if the server uses a fixed or dynamic time of day.
`ServerDayLength=240` | Specified the length (in minutes) of a full day cycle.
`ServerNightLength=240` | Specified the length (in minutes) of a full night cycle. (Revision 29073)
`bServerRestrictCarnivoreGrouping=false` | Specifies if the server restricts carnivore grouping to the same species. (Revision 13324)
`bServerRestrictHerbivoreGrouping=false` | Specifies if the server restricts carnivore grouping to the same species. (Revision 16231)
`MaxGroupSize=10` | Sets the maximum number of slots allowed for player groups.
`MaxGroupLeaderCommunicationDistance=50000` | Sets the distance (in meters) for players to be able to see their other group members.

## BattlEye Options
`bEnabled=true` - Enables or disables BattlEye anti-cheat.

## Example Contents of **Game.ini**
TIP: You can use in-line comments (using a semicolon) to add notes about commands for better organization.

```
[/Script/PathOfTitans.IGameSession]
ServerName=Server
MaxPlayers=100
ServerPassword=Password123
bServerPaidUsersOnly=false
bServerAllowChat=true
bServerGlobalChat=true
bServerFish=true
bServerWaterQualitySystem=true
bServerWaystoneCooldownRemoval=true
bServerFallDamage=true
ServerDiscord=
bServerAutoRestart=false
RestartLengthInSeconds=10800
ServerDeadBodyTime=0

[/Script/PathOfTitans.IGameMode]
; Time of Day that the game starts with 0-2400
ServerStartingTime=1350
; Use Dynamic Time Of Day (Animated Day Night Cycle)
bServerDynamicTimeOfDay=1
; Length in Minutes of a Full Day Cycle
ServerDayLength=240
MaxGroupSize=10
MaxGroupLeaderCommunicationDistance=50000

[BattlEye]
bEnabled=true
```
