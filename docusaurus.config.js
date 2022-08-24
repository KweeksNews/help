// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
          customCss: require.resolve('./src/styles/global.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} KweeksNews Network. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
