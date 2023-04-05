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
      title: '你好',
      cloud: {
        enable: true,
      },
    },

    pages: [

    ],

    footer: {
      since: 2022,
      beian: {
        enable: false,
        icp: '',
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
