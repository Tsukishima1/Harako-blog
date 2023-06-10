import { defineValaxyConfig } from 'valaxy'
import { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '北川原の部屋',
      cloud: {
        enable: true,
      },
    },
    colors: {
      primary: '#A7BF92',
    },

    pages: [

    ],
    outlineTitle: '目录',
    footer: {
      since: 2022,
      beian: {
        enable: false,
        icp: '',
      },
    },
    fireworks: {
      enable: true,
      colors: ["#83B583", "#A7BF92", "#F2F2F2"],
    },
    say: {
      enable: true,
      api: "https://el-bot-api.vercel.app/api/words/aoligei",
      hitokoto: {
        enable: false,
        api: "https://v1.hitokoto.cn",
      },
    },
  },

  unocss: { safelist },

  // Add Waline comments addon
  addons: [
    addonWaline({
      serverURL: 'https://test-waline-4jtj6cmm6-tsukishima1.vercel.app/',
    }),
  ],
})
