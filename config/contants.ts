export enum LanguageLocale {
    'Hebrew' = 'he_IL',
    'English' = 'en-us'
}

const constants = {
    [LanguageLocale.Hebrew]: {
        navbar: {
            HOME: 'דף הבית',
            ARTICLES: 'כתבות',
            PROJECTS: 'פרוייקטים',
            ME: 'קצת עליי'
        },
    },
    [LanguageLocale.English]: {
        navbar: {
            HOME: 'Home',
            ARTICLES: 'Articles',
            PROJECTS: 'Projects',
            ME: 'About Me'
        },

    }
}

export default function CONSTANTS(locale: LanguageLocale ) {
    return constants[locale]
}