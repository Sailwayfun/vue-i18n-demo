import './assets/main.css';
import { i18n } from './i18n-messages';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(i18n).mount('#app');
