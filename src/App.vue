<script setup>
import { useI18n } from 'vue-i18n'
import LocaleSelect from './components/LocaleSelect.vue'
import TestLocale from './components/TestLocale.vue'
const { t, locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <main>
    <h1>{{ t('message.hello') }}</h1>
    <test-locale :translate="t"/>
    <LocaleSelect v-model="locale" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.test {
  font-size: 1.5rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
