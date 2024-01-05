// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '49team-docs',
  tagline: '这里是49team-wiki镜像站',
  favicon: 'https://mcheping520.gitee.io/graphic-bed/image/EH2vkuQABsNiwKg.png',

  // Set the production url of your site here
  url: 'https://docs.49team.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            '#',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            '#',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '49team-docs',
        logo: {
          alt: 'My Site Logo',
          src: 'https://mcheping520.gitee.io/graphic-bed/image/EH2vkuQABsNiwKg.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '主页',
          },
          {to: 'https://www.49team.org', label: '官网', position: 'left'},
          {
            href: 'https://github.com/MCheping8108',
            label: 'GitHub',
            position: 'right',
          }
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '主页',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'discord',
                href: 'https://discord.gg/upvSG2rJnV',
              },
              {
                label: 'QQ群',
                href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=J_XlXz1w46GuL9zTsylYlIQYUAVWZ6FI&authKey=ZRwdgyTZyn8AirjuC3Bxp7edLduBpkS0pupnvX6RUC3Am1YtfOPcpo90Ywt0dXkn&noverify=0&group_code=936091395',
              },
              {
                label: 'QQ频道',
                href: 'https://pd.qq.com/s/4akj5zc86',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '官网',
                to: 'https://www.49team.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/MCheping8108',
              },
              {
                label: 'Wiki',
                href: 'https://iam49.fandom.com/zh/wiki',
                // position: 'right',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 49team-docs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
