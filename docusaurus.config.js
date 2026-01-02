// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// Custom variable injector for remark
const variableInjector = require('./src/remark/variable-injector');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fragnet Wiki',
  tagline: 'Frag, not lag!',
  favicon: 'img/favicon.ico',
  url: 'https://docs.fragnet.net',
  baseUrl: '/',
  organizationName: 'FragnetNetwork',
  projectName: 'docs',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  plugins: [
    'docusaurus-plugin-zooming'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/FragnetNetwork/docs/tree/main/',
          remarkPlugins: [
            [variableInjector, {
              replacements: {
                'PANEL_URL': 'https://beta.fragify.net',
                'OLD_PANEL_URL': 'https://gamepanel.fragnet.net',
                'BILLING_URL': 'https://clients.fragnet.net',
                'CDN_URL': 'https://cdn.fragify.net',
              }
            }],
          ]
        },
        blog: {
          showReadingTime: false
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['docusaurus-theme-search-typesense'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'contribute',
        content:
          'Help improve our docs and earn platform credits! <a href="/contributing">Learn how to contribute</a>',
        backgroundColor: '#E53600',
        textColor: '#ffffff',
        isCloseable: true,
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Fragnet Logo',
          src: 'https://b-cdn.fragnet.net/images/logo.png',
          target: '_self',
          style: {backgroundColor: '#242526'}
        },
        items: [
          // Discord Bots hidden - service not currently offered
          // {
          //   type: 'doc',
          //   docId: '/discord-bots',
          //   position: 'left',
          //   label: 'Discord Bots',
          // },
          {
            type: 'doc',
            docId: 'control-panel/intro',
            position: 'left',
            label: 'Control Panel',
            activeBaseRegex: '^/control-panel(/|$)',
          },
          {
            type: 'doc',
            docId: 'games/index',
            position: 'left',
            label: 'Games',
            activeBaseRegex: '^/games(/|$)',
          },
          {
            to: '/billing',
            label: 'Billing',
          },
          {
            to: '/faq',
            label: 'FAQ',
          },
          {
            href: 'https://clients.fragnet.net',
            label: 'Billing/Support',
            position: 'right',
          },
          {
            href: 'https://github.com/FragnetNetwork/docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/contributing',
            label: 'Contribute',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Popular Game Docs',
            items: [
              {
                label: 'Farming Simulator 2022',
                to: '/games/fs22',
              },
              {
                label: 'Rust',
                to: '/games/rust',
              },
              {
                label: 'Minecraft',
                to: '/games/minecraft',
              }
            ],
          },
          {
            title: 'Useful Links',
            items: [
              {
                label: 'Game Control Panel',
                href: 'https://beta.fragify.net',
              },
              {
                label: 'Old Game Panel',
                href: 'https://gamepanel.fragnet.net',
              },
              {
                label: 'Billing/Support Panel',
                href: 'https://clients.fragnet.net',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Discord',
                href: 'https://fragnet.net/discord',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fragnet Networks International AB. 🛠️ with Docusaurus.`,
      },
      zooming: {
        selector: '.markdown img',
        options: {
          margin: 24,
          background: '#1b1b1d',
          scrollOffset: 0,
        },
      },
      typesense: {
        typesenseCollectionName: 'fragdocs_1696698708',
  
        typesenseServerConfig: {
          nodes: [
            {
              host: 'o2axq4nc6frlv7e5p-1.a1.typesense.net',
              port: 443,
              protocol: 'https',
            }
          ],
          apiKey: 'gOHkxWmkq9s5Jd9EW5HMWIpXf2fJW082',
        },
  
        // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
        typesenseSearchParameters: {},
  
        // Optional
        contextualSearch: true,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
