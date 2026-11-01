---
title: Primitive Game Mode
keywords: ['rust server primitive', 'rust server primitive setup', 'rust server primitive gamemode', 'rust server era', 'rust game mode', 'rust medieval era', 'rust frontier era', 'fragnet dashboard']
---


## What is the Primitive Game Mode?

The **Primitive Game Mode** is an officially supported game mode in RUST that allows server owners to create a more survival-focused experience. Similar to Hardcore and Softcore modes, it removes many modern and late-game elements, keeping players in a "primitive" state with limited access to technology, weapons, and structures.

This mode restricts advanced weapons, removes certain monuments and NPCs, and enforces simpler building tiers, shifting gameplay towards more strategic base building and primitive raiding tactics. Additionally, server owners can adjust the level of "primitiveness" by selecting different **Eras**, each unlocking specific technologies and crafting recipes.

The **Primitive Game Mode** was officially introduced in the **February 2025 Primitive Update**.

---

## Enabling Primitive Game Mode on your server

The game mode and era are startup settings on the **Configuration** tab of your server.

1. Open the [Fragnet dashboard](VAR::PANEL_URL), go to **My servers** and select your Rust server.
2. Select the **Configuration** tab and select **General** in the list on the left.
3. In the **Gameplay** group, set **Game mode** to **Primitive**.
4. In the **World** group, pick a **Server era** (see the table below) and switch **Enforce era limits** on or off.
5. Select **Save** in the bar at the bottom of the page. See [Under General](../../control-panel/configuration.md#under-general).
6. Restart the server. These settings apply on the next restart.

---

## Understanding Eras in Primitive Mode

The **Eras** system in Primitive Game Mode allows you to control technological progress over time. Each Era introduces specific restrictions on weapons, building materials, and tools.

### Available Eras

Pick the era under **Configuration** > **General** > **World** > **Server era**.

| Server era | Effect |
| --- | --- |
| **Any era** | No era restrictions (vanilla gameplay). |
| **Primitive** | Most restrictive, removing modern weapons, tools, and structures. |
| **Medieval** | Adds basic firearms like the Revolver, Blunderbuss, and Double Barrel Shotgun. |
| **Frontier** | Similar to Medieval but may introduce additional items. |
| **Full Rust** | Restores full vanilla gameplay. |

### Additional Options

These settings on the **Configuration** tab, under **General**, fine-tune your Primitive server:

| Option | Group | Description |
| --- | --- | --- |
| **Scientists at junk piles** | **Gameplay** | Allows scientist NPCs to spawn near roadside junk piles. Overridden by **Scientist spawners**. |
| **Scientist spawners** | **Gameplay** | Turns scientist NPC spawns at their usual places on the map on or off. |
| **Enforce era limits** | **World** | Also removes items from outside the era, including restricted items that got past the era's restrictions. |

### Era-Specific Restrictions

Each Era applies a unique set of restrictions, primarily on weapons, construction materials, and NPC presence. Below is a summary of the restrictions in Primitive mode.

#### **Items Disabled in Primitive Mode**

##### **Weapons**

- Assault Rifles (AK, LR-300, M249, etc.)
- Bolt Action & Sniper Rifles (L96, M39, etc.)
- SMGs (MP5, Thompson, etc.)
- Shotguns (Spas-12, Pump Shotgun, etc.)
- High-tech attachments (8x Scope, Laser Sight, Silencer, etc.)
- Prototype and experimental weapons (Prototype 17, Minigun, etc.)

**Exceptions:** Some weapons become available in **Medieval and Frontier Eras**, including:

- **Revolver** (Enabled in Medieval & Frontier)
- **Blunderbuss** (Enabled in Medieval & Frontier)
- **Double Barrel Shotgun** (Enabled in Medieval & Frontier)

##### **Construction & Structures**

- **Armored doors and double doors**
- **High-tier workbenches (Level 3)**
- **Advanced metal armor (Metal Chestplate, Facemask, etc.)**

##### **Tools & Equipment**

- **Chainsaw & Jackhammer** (Can still be looted but not purchased)
- **Timed Explosive Charges (C4) & Satchel Charges**
- **Workbench Level 3**

##### **Ammunition & Explosives**

- **Most firearm ammunition** (5.56, HV, Incendiary, etc.)
- **Rocket Launcher & Explosive Rounds**
- **MLRS Rockets & Aiming Modules**
- **High-tech explosive devices (Homing Missiles, MLRS Aiming Modules, etc.)**

##### **Traps & Defenses**

- **SAM Sites** (No automatic anti-air defenses)
- **High-tech security measures** (Turrets, advanced traps, etc.)

##### **Components**

- **Rifle Body, SMG Body, Semi-Auto Body, Metal Spring** (Cannot be crafted or looted)

---

## Customizing Your Primitive Mode Server

As a server owner, you have full control over how **Primitive Mode** plays out. You can:

- **Switch eras** to progress gameplay: change **Server era** under **Configuration** > **General** > **World** and restart the server.
- **Restrict specific items further** by disabling crafting or changing loot tables, for example with [plugins](./install-oxide-and-umod-plugins.md).
- **Allow limited NPC spawns** with **Scientists at junk piles** and **Scientist spawners** under **Configuration** > **General** > **Gameplay**.

This allows you to fine-tune the experience for your community, whether you want a fully primitive survival mode or a more structured, era-based progression system.
