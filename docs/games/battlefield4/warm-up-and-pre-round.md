---
title: Warm-up and pre-round
keywords: ['bf4 warm-up', 'bf4 warm-up', 'bf4 warm-up', 'bf4 warm-up', 'bf4 warm-up', 'bf4 warm-up']
---

When a server first starts up, there are no players on it and the server is in warm-up state. 

Warm-up is a state where players can move around, complete objectives and so on, but scoring is disabled. Once the required number of players is reached, the game will reset the level and transition into pre-round. In pre-round, a timer counts down to the round start; players cannot move, shoot or take objectives during pre-round. When the timer has run out, the actual round begins. Players can move freely, take objectives and scoring is enabled during the round.

:::info
If the number of players drops beneath the minimum threshold during the round, the round will be aborted and the server switches back to warm-up.
:::

You can change the number of players required to go between warm-up and in-round using **vars.roundStartPlayerCount** and **vars.roundRestartPlayerCount** in the startup.txt.

The start player count must be higher than the restart player count – so if you set the starting player count below the restart player count, the engine will silently assume that the restart player count is one lower than the start player count.