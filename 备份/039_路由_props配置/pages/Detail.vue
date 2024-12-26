<!-- Vue3 template -->
<template>
  <ul>
    <li>编号:{{ id }}</li>
    <li>标题:{{ title }}</li>
    <li>内容:{{ content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
defineProps({
  id: Number,
  title: String,
  content: String,
})
</script>

<style scoped></style>
