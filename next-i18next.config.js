/** @type {import('next-i18next').UserConfig} */

module.exports = {
  i18n: {
    // locales: ['es', 'eus', 'cat', 'ga', 'it', 'ro', 'ru', 'uk', 'es-CO', 'es-PE', 'ar', 'hi', 'en', 'fr', 'en-HI', 'zh', 'el', 'sv', 'ko'],
    locales: ['es', 'es-poliza', 'ca', 'eu', 'ro', 'es-PE', 'es-CO', 'it', 'gl', 'sv', 'el', 'ru', 'ar', 'hi', 'ko', 'fil', 'zh'],
    defaultLocale: 'es',
    localeDetection: false,
    domains: [
      {
        domain: 'segurodedecesos.com',
        defaultLocale: 'es',
      },
    ],
  },
}