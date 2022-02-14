const { description, repository } = require('./../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'M153',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'timokluser-dev/GBS_M153',
    editLinks: true,
    docsDir: 'docs/',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Glossary',
        link: '/docs/glossary',
      },
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'M153',
          collapsable: false,
          children: [
            '/docs/',
            '/docs/glossary',
            '/docs/tools'
          ]
        },
      ],
      // fallback
      '/': [
        ''
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
