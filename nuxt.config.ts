// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app:{
    rootId: 'gosnami',
    head: {
      title: "GoSnami",
      meta: [
        {charset: 'utf-8'},
        {
          name: 'viewport',
          content: 'width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no, user-scalable=0, viewport-fit=cover'
        },
        {name: 'msapplication-TileColor', content: '#da532c'},
        {name: 'theme-color', content: '#1E1E1E'},
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png'},
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png'},
        {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png'},
        {rel: 'manifest', href: '/favicons/site.webmanifest'},
        {rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#5bbad5'},
      ],
    },
  },
  sourcemap: {
    server: false,
    client: false,
  },
  experimental: {
    // inlineSSRStyles: false,
    viewTransition: true,
    renderJsonPayloads: true,
  },
})
