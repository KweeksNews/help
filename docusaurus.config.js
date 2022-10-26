// @ts-check

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'KweeksHelp',
  tagline: 'Pusat Bantuan',
  titleDelimiter: '-',
  favicon: 'favicon.ico',
  url: 'https://help.kweeksnews.com',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'id-ID',
    locales: ['id-ID'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/KweeksNews/help/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/styles/globals.css'),
        },
        gtag: {
          trackingID: 'G-1H2GEREG4Z',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          alt: 'KweeksHelp',
          src: 'assets/images/kweekshelp.svg',
          href: '/',
        },
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} KweeksNews Network. All rights reserved.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
      },
    }),
};
