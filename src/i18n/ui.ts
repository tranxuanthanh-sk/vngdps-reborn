// https://docs.astro.build/en/recipes/i18n/#translate-ui-strings
export const languages = {
  en: 'English',
  vi: 'Tiếng Việt',
}

export const defaultLang = 'en'
export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.download': 'Download',
    'nav.faq': 'FaQ',
  },
  vi: {
    'nav.home': 'Trang chủ',
    'nav.download': 'Tải xuống',
  },
} as const
