export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  i18n: {
    skipSettingLocaleOnNavigate: true,
    langDir: './lang',
    locales: [
      { name: 'Deutsch', code: 'de', iso: 'de', file: 'de.json' },
      { name: 'English', code: 'en', iso: 'en', file: 'en.json' },
    ],
    lazy: true,
    defaultLocale: 'en',
  },
});
