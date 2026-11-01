// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = require('./src/prism/arena');

// Custom variable injector for remark
const variableInjector = require('./src/remark/variable-injector');
const tableMarks = require('./src/remark/table-marks');
const retinaImages = require('./src/remark/retina-images');

// Pages removed when the docs moved to the new dashboard: old path -> replacement
const retiredPages = {
  '/control-panel/api': '/control-panel',
  '/control-panel/api/generating-an-api-key': '/control-panel',
  '/control-panel/api/server/power-actions': '/control-panel',
  '/control-panel/api/server/retrieving-server-resources': '/control-panel',
  '/control-panel/api/server/sending-a-command': '/control-panel',
  '/control-panel/api/server/websocket': '/control-panel',
  '/api/server': '/control-panel',
  '/control-panel/changelog': '/control-panel',
  '/control-panel/databases': '/control-panel',
  '/control-panel/subusers': '/control-panel/team-access',
  '/control-panel/schedules/editing-a-task': '/control-panel/schedules/editing-a-schedule',
};

// Each retired path also had /docs/* and /docs/fragify/* aliases (see createRedirects)
const retiredRedirects = Object.entries(retiredPages).map(([from, to]) => ({
  to,
  from: [
    from,
    `/docs${from}`,
    ...(from.startsWith('/control-panel') ? [`/docs${from.replace('/control-panel', '/fragify')}`] : []),
  ],
}));

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
    'docusaurus-plugin-zooming',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: retiredRedirects,
        createRedirects(existingPath) {
          // Skip root path and paths ending with / to avoid duplicates
          // (both /games/ark and /games/ark/ create the same redirect file)
          if (existingPath === '/' || existingPath.endsWith('/')) {
            return undefined;
          }
          const redirects = [`/docs${existingPath}`];
          // Also redirect old /docs/fragify/* to /control-panel/*
          if (existingPath.startsWith('/control-panel')) {
            const fragifyPath = existingPath.replace('/control-panel', '/fragify');
            redirects.push(`/docs${fragifyPath}`);
          }
          return redirects;
        },
      },
    ],
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
          beforeDefaultRemarkPlugins: [
            [variableInjector, {
              replacements: {
                'PANEL_URL': 'https://fragnet.net/account',
                'BILLING_URL': 'https://fragnet.net/account/billing',
                'SUPPORT_URL': 'https://fragnet.net/account/support',
                'CDN_URL': 'https://cdn.fragify.net',
              }
            }],
          ],
          remarkPlugins: [tableMarks, retinaImages],
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
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'Fragnet',
          src: 'img/fragnet-logo-on-light.svg',
          srcDark: 'img/fragnet-logo-on-dark.svg',
          target: '_self',
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
            to: '/control-panel/intro',
            position: 'left',
            label: 'Dashboard',
            activeBasePath: '/control-panel',
          },
          {
            to: '/games',
            position: 'left',
            label: 'Games',
            activeBasePath: '/games',
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
            href: 'https://fragnet.net/account',
            label: 'My account',
            position: 'right',
          },
          {
            to: '/contributing',
            label: 'Contribute',
            position: 'right',
          },
          {
            href: 'https://github.com/FragnetNetwork/docs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Fragnet',
          src: 'img/fragnet-logo-on-light.svg',
          srcDark: 'img/fragnet-logo-on-dark.svg',
          href: 'https://fragnet.net',
          height: 16,
        },
        links: [
          {
            title: 'Popular Game Docs',
            items: [
              {
                label: 'Farming Simulator 2025',
                to: '/games/fs25',
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
                label: 'Fragnet Dashboard',
                href: 'https://fragnet.net/account',
              },
              {
                label: 'Billing',
                href: 'https://fragnet.net/account/billing',
              },
              {
                label: 'Support',
                href: 'https://fragnet.net/account/support',
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
        selector: '.markdown img:not(.no-zoom)',
        options: {
          margin: 24,
          background: 'rgba(11, 12, 16, 0.92)',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
