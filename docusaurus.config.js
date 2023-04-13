// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Учебные материалы по школьной математике',
  tagline: 'Математика - это больше умение, чем знание',
  url: 'https://edututor.ru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  plugins: [
    ['@docusaurus/plugin-ideal-image', {}],
    [
      'docusaurus-plugin-yandex-metrica',
      {
        counterID: '92029994',
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-X8F94FPYBQ',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Мои статьи',

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Главная страница',
        logo: {
          alt: 'Логотип сайта',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'arifmet',
            label: 'Арифметика',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Алгебра',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'geo',
            label: 'Геометрия',
          },

          // {
          //   type: 'docSidebar',
          //   position: 'left',
          //   sidebarId: 'latin',
          //   label: 'Латинский язык',
          // },

          { to: '/blog', label: 'Блог', position: 'left' },
          {
            href: 'https://www.youtube.com/channel/UCbkT-RPOSasvKDOxjz2UhFw',
            label: 'youtube',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Материалы',
            items: [
              {
                label: 'Алгебра',
                to: '/docs/intro',
              },
              {
                label: 'Геометрия',
                to: '/docs/geometry/inscribed-quadrilateral/doc1',
              },
            ],
          },
          {
            title: 'Сообщества',
            items: [
              {
                label: 'vk',
                href: 'https://vk.com/club219357210',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Блог',
                to: '/blog',
              },
              {
                label: 'Канал на youtube',
                href: 'https://www.youtube.com/channel/UCbkT-RPOSasvKDOxjz2UhFw',
              },
            ],
          },
        ],
        copyright: `Разработано © ${new Date().getFullYear()} Лебедев А. В.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
