<template>
  <p class="test">{{ t('test.mojo') }}</p>
</template>

<script setup>
const props = defineProps(['translate'])
const t = props.translate
</script>

<style scoped></style>
