<!-- Vue3 template -->
<template>
  <ul>
    <li>编号:{{ query.id }}</li>
    <li>标题:{{ query.title }}</li>
    <li>内容:{{ query.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const { query } = toRefs(route)
console.log(route.query)
</script>

<style scoped></style>
