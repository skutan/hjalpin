// import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from 'vitepress'

//default options
// var options = {
//   ...flexSearchIndexOptions,
//   previewLength: 62,
//   buttonLabel: "Search",
//   placeholder: "Search docs",
// };

export default ({
  // plugins: [SearchPlugin(options)],
  base: '/hjalpin/',
  title: 'Hjálpin',
  description: "Skútan - hjálpin",
  themeConfig: {
    outlineTitle: 'Í þessum kafla',
    logo: 'https://images.ctfassets.net/8k0h54kbe6bj/3EumKpWqbPFygVWxWteoW/2961b0d9c162e8528e5771ab1707a368/Samgongustofa-stakt-400-400.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Forsíða', link: '/' },
      // { text: 'Skip', link: '/skirteini' },
      { text: 'Skip', 
        items: [
          { text: 'Skráningar', link: '/skraning/skraning' },
          { text: 'Skírteini', link: '/skirteini' },
          { text: 'Skoðanir', link: '/skodanir' },
          { text: 'Fjarskiptaskoðun', link: '/skodanir/fjarskipta' }
        ] 
      },
      { text: 'Lögskráningar', 
        items: [
          { text: 'Almennt', link: '/logskraning' },
          { text: 'Mönnunarreglur', link: '/logskraning/log-ytri' },
          { text: 'Farþegaskip', link: '/logskraning' }
        ]
       }
      ,
      // { text: 'Vefþjónustur', link: '/markdown-examples' },
      { text: 'Spurt & svarað', link: '/faq' },
      
    ],
    sidebar: [
      {
        text: 'Almennt',
        collapsed: true,
        items: [
          { text: 'Innskráning', link: '/almennt/almennt'},
          { text: 'Forsíða', link: '' },
          { text: 'Leit að skipi', link: '/almennt/leit' },
          { text: 'Leit og síur', link: '/almennt/leit-siur' },
          { text: 'Tímavélin', link: '/almennt/timavel' }
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
          { text: 'Útgáfa skírteina ', link: '/skirteini/utgafa' },
          { text: 'Útgáfa og gildistími ', link: '/skirteini/utgafa-gildistimi' },
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
          { text: 'Tækni- og aukaskoðun', link: '/skodanir/taekniskodun' },
          { text: 'Heildarlisti skoðana', link: '/skodanir/heildarlisti' },
          { text: 'Skrá skoðun', link: '/skodanir/skra-skodun' },
          { text: 'Eldri skoðanir', link: '/skodanir/eldri' },
          { text: 'Frestir til lagfæringar', link: '/skodanir/frestir' }
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

    // socialLinks: [
    //   { icon: '', link: 'https://www.samgongustofa.is' }
    // ]
  }
})
