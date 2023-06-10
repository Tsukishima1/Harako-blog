import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: '',
  lang: 'zh-CN',
  title: '小川原の部屋',
  author: {
    name: 'Hara Ogawa',
    email: 'Akaashi1owo@qq.com',
    avatar: 'https://avatars.githubusercontent.com/u/116432998?v=4',
    status: {
      emoji:'😷'
    }
  },
  favicon: "https://harako.oss-rg-china-mainland.aliyuncs.com/favcoffee.png",
  subtitle: 'harako-blog',
  description: '祝你快乐 我的朋友^^_',
  lastUpdated: true,
  social: [
    {
      name: 'Telegram Channel',
      link: 'https://t.me/rebelxayah1',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Tsukishima1',
      icon: 'i-ri-github-line',
      color: 'var(--va-c-text)',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/33411044',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/Assia56130971',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },
  ],
  search: {
    enable: false,
  },
  statistics: {
    enable: true,
    readTime: {
      speed: {
        cn:300,
        en:200
      }
    }
  },
  comment: {
    enable: true
  }

})
