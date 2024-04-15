import { createI18n } from "vue-i18n";

const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    jp: {
        message: {
            hello: 'こんにちは、世界'
        }
    },
    zh_tw: {
        message: {
            hello: '你好，世界'
        }
    }
};

export const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages
});