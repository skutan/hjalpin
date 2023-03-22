import { defineConfig } from 'vitepress'

export default ({
  base: '/hjalpin/',
  title: 'Hjálpin',
  description: "Skútan - hjálpin",
  themeConfig: {
    outlineTitle: 'Í þessum kafla',
    logo: '/sam-logo.svg',
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
    sidebar: [
      {
        text: 'Almennt',
        collapsed: true,
        items: [
          { text: 'Innskráning', link: '/almennt/almennt'},
          { text: 'Forsíða', link: '' },
          { text: 'Leit að skipi', link: '' },
          { text: 'Leit og síur', link: '' },
          { text: 'Skýrslur', link: '' }
        ]
      },
      {
        text: 'Skráning skipa',
        collapsed: true,
        items: [
          { text: 'Skráning', link: '/skraning/skraning'},
          { text: 'Kennimerki', link: '/skraning/skraning#kennimerki' },
          { text: 'Eigendur og útgerðir', link: '/skraning/skraning#eigendur' },
          { text: 'Tryggingar', link: '/skraning/skraning#tryggingar' },
          { text: 'Stöðuskipti', link: '/skraning/skraning#stoduskipti' }
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
        collapsed: false,
        items: [
          { text: 'Skoðunarhringur á skipum', link: '/skodanir/skodunarhringur' },
          { text: 'Tækni- og aukaskoðun', link: '/skirteini/taekniskodun' },
          { text: 'Heildarlisti skoðana', link: '/skirteini/heildarlisti' },
          { text: 'Skrá skoðun', link: '/skirteini/skra-skodun' },
          { text: 'Eldri skoðanir', link: '/skirteini/eldri-skodanir' },
          { text: 'Frestir til lagfæringar', link: '/skirteini/frestir' }
        ]
      },
      // {
      //   text: 'Annað',
      //   collapsed: true,
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://www.samgongustofa.is' }
    ]
  }
})
