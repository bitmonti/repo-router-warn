export default defineEventHandler((event) => {
  type Locale = 'en' | 'de';

  const locale: Locale = getQuery(event).locale as Locale;

  const data = {
    en: {
      title: 'My blog title',
      localizations: {
        en: { slug: 'slug-english' },
        de: { slug: 'slug-german' },
      },
    },
    de: {
      title: 'Mein Blog Titel',
      localizations: {
        en: { slug: 'slug-english' },
        de: { slug: 'slug-german' },
      },
    },
  };
  return data[locale];
});
