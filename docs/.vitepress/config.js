import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default ({
  lang: 'is',
  base: '/hjalpin/',
  title: 'Hjálpin',
  description: "Skútan - hjálpin",
  lastUpdated: true,
  themeConfig: {
    // footer: {
    //   message: 'Samgöngustofa',
    //   copyright: ' © 2023'
    // },
    outlineTitle: 'Efnisyfirlit',
    // logo: 'sam-logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Forsíða', link: '/' },
      { text: 'Skip', link: '/skirteini' },
      { text: 'Lögskráningar', 
      items: [
        { text: 'Almennt', link: '/logskraning' },
        { text: 'Mönnunarreglur', link: '/item-2' },
        { text: 'Farþegaskip', link: '/item-3' }
      ]
       }
      ,
      { text: 'Vefþjónustur', link: '/markdown-examples' },
      
    ],

    guideSidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Configuration', link: '/guide/configuration' }
        ]
      }
    ],
    
  

    sidebar: [
      {
        text: 'Almennt',
        collapsed: false,
        items: [
          { text: 'Innskráning', link: '/almennt/almennt'},
          { text: 'Forsíða', link: '/skirteini/utgafa' },
          { text: 'Leit að skipi', link: '/skirteini/yfirlit' },
          { text: 'Leit og síur', link: '/skirteini/undantagur' },
          { text: 'Skýrslur', link: '/skirteini/fartegaleyfi' }
        ]
      },
      {
        text: 'Skráning skipa',
        collapsed: true,
        items: [
          { text: 'Skráning', link: '/almennt/innskraning'},
          { text: 'Kennimerki', link: '/skirteini/utgafa' },
          { text: 'Eigendur og útgerðir', link: '/skirteini/yfirlit' },
          { text: 'Tryggingar', link: '/skirteini/undantagur' },
          { text: 'Systurskip', link: '/skirteini/fartegaleyfi' }
        ]
      },
      {
        text: 'Skips skírteini',
        collapsed: false,
        items: [
          { text: 'Regluvörðurinn', link: '/skirteini/regluvordur'},
          { text: 'Útgáfa skírteina', link: '/skirteini/utgafa' },
          { text: 'Yfirlit yfir útgefin skírteini', link: '/skirteini/yfirlit' },
          { text: 'Undanþágur', link: '/skirteini/undantagur' },
          { text: 'Farþegaleyfi', link: '/skirteini/fartegaleyfi' }
        ]
      },
      {
        text: 'Skoðanir skipa',
        collapsed: true,
        items: [
          { text: 'Skoðunarhringur á skipum', link: '/skodanir/skodunarhringur' },
          { text: 'Tækni- og aukaskoðun', link: '/skirteini/taekniskodun' },
          { text: 'Heildarlisti skoðana', link: '/skirteini/heildarlisti' },
          { text: 'Skrá skoðun', link: '/skirteini/skra-skodun' },
          { text: 'Eldri skoðanir', link: '/skirteini/eldri-skodanir' },
          { text: 'Frestir til lagfæringar', link: '/skirteini/frestir' }
        ]
      },
      {
        text: 'Annað',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://www.samgongustofa.is' }
    ]
  }
})
