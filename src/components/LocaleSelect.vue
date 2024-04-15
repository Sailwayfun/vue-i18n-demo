<template>
  <div>
    <select v-model="model">
      <option value="en">English</option>
      <option value="jp">Japanese</option>
      <option value="zh_tw">Chinese</option>
    </select>
  </div>
</template>

<script setup>
const model = defineModel()
</script>

<style scoped></style>
