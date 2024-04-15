import { createI18n } from "vue-i18n";

const messages = {
    en: {
        message: {
            hello: 'hello world'
        },
        test: {
            mojo: 'test'
        }
    },
    jp: {
        message: {
            hello: 'こんにちは、世界'
        },
        test: {
            mojo: 'テスト'
        }
    },
    zh_tw: {
        message: {
            hello: '你好，世界'
        },
        test: {
            mojo: '測試'
        }
    }
};

export const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages
});