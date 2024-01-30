// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Fragify',
      link: {
        type: 'generated-index',
        title: 'Getting Started With Fragify',
        description: 'Learn more about Fragify!',
        slug: '/fragify',
        keywords: ['getting started', 'fragify', 'fragify docs'],
      },
      items: [
        'fragify/intro',
        'fragify/basics',
        'fragify/changelog',
        'fragify/file-manager',
        {
          type: 'category',
          label: 'Scheduled Tasks',
          link: {
            type: 'doc',
            id: 'fragify/schedules/index',
          },
          items: [
            'fragify/schedules/creating-a-schedule',
            'fragify/schedules/creating-a-task',
            'fragify/schedules/editing-a-task',
            'fragify/schedules/editing-a-schedule',
            'fragify/schedules/running-a-schedule',
          ]
        },
        {
          type: 'category',
          label: 'Backups',
          link: {
            type: 'doc',
            id: 'fragify/backups/index',
          },
          items: [
            'fragify/backups/creating-a-backup',
            'fragify/backups/downloading-a-backup',
            'fragify/backups/locking-a-backup',
            'fragify/backups/restoring-a-backup',
            'fragify/backups/deleting-a-backup',
          ]
        },
        'fragify/subusers',
        'fragify/subdomains',
        'fragify/databases',
        'fragify/crash-alerts',
        'fragify/2fa'
      ],
    },
    {
      type: 'category',
      label: 'Discord Bots',
      link: {
        type: 'generated-index',
        title: 'Discord Bots',
        description: 'Learn more about our Discord Bots!',
        slug: '/discord-bots',
        keywords: ['discord bots', 'discord', 'discord bot'],
      },
      items: [
        {
          type: 'category',
          label: 'Corebot',
          link: {
            type: 'generated-index',
            slug: '/discord-bots/corebot',
          },
          items: [
            'discord-bots/corebot/setting-up-corebot'
          ]
        },
        {
          type: 'category',
          label: 'DiscordGSM',
          link: {
            type: 'generated-index',
            slug: '/discord-bots/discodgsm',
          },
          items: [
            'discord-bots/discordgsm/setting-up-discordgsm'
          ]
        }
      ]

    },
    {
      type: 'category',
      label: 'Games',
      link: {
        type: 'doc',
        id: 'games/index',
      },
      items: [
        {
          type: 'category',
          label: '7 Days To Die',
          link: {
            type: 'generated-index',
            slug: '/games/7dtd',
          },
          items: [
            'games/7dtd/adding-admins', 
            'games/7dtd/adding-mods', 
            'games/7dtd/change-name', 
            'games/7dtd/create-world', 
            'games/7dtd/edit-configuration', 
            'games/7dtd/upload-world',
            'games/7dtd/find-and-connect-to-server'
          ]
        },
        {
          type: 'category',
          label: 'ARK: Survival Evolved',
          link: {
            type: 'generated-index',
            slug: '/games/ark',
          },
          items: [
            'games/ark/become-admin', 
            'games/ark/change-map', 
            'games/ark/change-server-name'
          ]
        },
        {
          type: 'category',
          label: 'Arma Reforger',
          link: {
            type: 'generated-index',
            slug: '/games/arma-reforger',
          },
          items: [
            'games/arma-reforger/adding-mods', 
            'games/arma-reforger/change-server-name'
          ]
        },
        {
          type: 'category',
          label: 'Battlefield 3',
          link: {
            type: 'generated-index',
            slug: '/games/bf3',
          },
          items: [
            'games/battlefield3/bf3-admin-guide', 
            'games/battlefield3/how-to-add-back-to-karkand-maps',
            'games/battlefield3/maps-game-modes-and-slots-limitations'
          ]
        },
        {
          type: 'category',
          label: 'Battlefield 4',
          link: {
            type: 'generated-index',
            slug: '/games/bf4',
          },
          items: [
            'games/battlefield4/game-queue-VIP-reserved-slots', 
            'games/battlefield4/map-handling',
            'games/battlefield4/maps-and-game-modes',
            'games/battlefield4/player-slots',
            'games/battlefield4/warm-up-and-pre-round'
          ]
        },
        {
          type: 'category',
          label: 'DayZ',
          link: {
            type: 'generated-index',
            slug: '/games/dayz',
          },
          items: [
            'games/dayz/add-mods', 
            'games/dayz/adjust-basic-settings',
            'games/dayz/custom-commandline-dayz-server',
            'games/dayz/increase-item-spawns',
            'games/dayz/make-backup',
            'games/dayz/wipe-server'
          ]
        },
          {
            type: 'category',
            label: 'Don\'t Starve Together',
            link: {
              type: 'generated-index',
              slug: '/games/dontstarvetogether',
            },
            items: [
            'games/dontstarvetogether/adding-admins', 
            'games/dontstarvetogether/adding-mods', 
            'games/dontstarvetogether/ban-players', 
            'games/dontstarvetogether/console-commands', 
            'games/dontstarvetogether/configure-pvp', 
            'games/dontstarvetogether/reserved-slots', 
            'games/dontstarvetogether/setting-password',
            'games/dontstarvetogether/find-connect-to-server',
            'games/dontstarvetogether/generate-cluster-token'
          ]
        },
        {
          type: 'category',
          label: 'Farming Simulator 22',
          link: {
            type: 'generated-index',
            slug: '/games/fs22',
          },
          items: [
            'games/fs22/become-admin', 
            'games/fs22/find-server',
            'games/fs22/overview-of-common-issues',
            'games/fs22/fs22-faq',
            'games/fs22/manage-files-via-ftp',
            'games/fs22/installing-mods',
            'games/fs22/upload-savegame',
            'games/fs22/upgrade-server'
          ]
        },
        {
          type: 'category',
          label: 'Left 4 Dead 2',
          link: {
            type: 'generated-index',
            slug: '/games/l4d2',
          },
          items: [
            'games/l4d2/add-sourcemod-plugins', 
            'games/l4d2/become-admin',
            'games/l4d2/change-motd',
            'games/l4d2/find-steamid',
            'games/l4d2/install-metamod',
            'games/l4d2/kick-players',
            'games/l4d2/enable-matchmaking',
            'games/l4d2/set-rcon-password'
          ]
        },
        {
          type: 'category',
          label: 'Minecraft',
          link: {
            type: 'generated-index',
            slug: '/games/minecraft',
          },
          items: [
            'games/minecraft/become-admin', 
            'games/minecraft/create-whitelist',
            'games/minecraft/install-modpack',
            'games/minecraft/join-server',
            'games/minecraft/switch-server-version',
            'games/minecraft/upload-world'
          ]
        },
        {
          type: 'category',
          label: 'Path of Titans',
          link: {
            type: 'generated-index',
            slug: '/games/pathoftitans',
          },
          items: [
            'games/pathoftitans/add-admins-find-agid', 
            'games/pathoftitans/add-player-role',
            'games/pathoftitans/admin-chat-commands',
            'games/pathoftitans/ban-player',
            'games/pathoftitans/create-whitelist',
            'games/pathoftitans/generate-auth-token',
            'games/pathoftitans/server-config-options',
            'games/pathoftitans/setup-mods'
          ]
        },
        {
          type: 'category',
          label: 'Procon Layer',
          link: {
            type: 'generated-index',
            slug: '/games/proconlayer',
          },
          items: [
            'games/proconlayer/add-user', 
            'games/proconlayer/set-maps-via-procon',
            'games/proconlayer/troubleshoot-insane-limits',
            'games/proconlayer/troubleshoot-procon'
          ]
        },
        {
          type: 'category',
          label: 'Project Zomboid',
          link: {
            type: 'generated-index',
            slug: '/games/pz',
          },
          items: [
            'games/pz/add-admin', 
            'games/pz/add-enable-mods',
            'games/pz/create-whitelist',
            'games/pz/upload-world',
            'games/pz/connect-to-server'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Billing',
      link: {
        type: 'generated-index',
        title: 'Billing',
        description: 'Guides around our billing system!',
        slug: '/billing',
        keywords: ['billing', 'client area', 'payments'],
      },
      items: [
        'billing/accepted-payment-methods',
        'billing/affiliate-custom-url',
        'billing/affiliate-signup',
        'billing/cancel-service',
        'billing/order-additional-services',
        'billing/renew-service',
        'billing/subscription-period',
        'billing/why-invoice-was-generated',
        'billing/you-charged-me-even-after-I-cancelled',
        'billing/group-pay'
      ]
    },
    {
      type: 'category',
      label: 'FAQ',
      link: {
        type: 'generated-index',
        title: 'FAQ',
        description: 'Frequently Asked Questions!',
        slug: '/faq',
        keywords: ['faq', 'frequently asked questions'],
      },
      items: [
        'FAQ/change-server-location',
        'FAQ/manage-server-files-via-ftp',
        'FAQ/setup-time',
        'FAQ/upgrade-downgrade-server'		
      ]
    },
  ]
};

module.exports = sidebars;
