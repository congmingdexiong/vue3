<!-- Vue3 template -->
<template>
  <ul>
    <li>编号:{{ params.id }}</li>
    <li>标题:{{ params.title }}</li>
    <li>内容:{{ params.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
//get params from router
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const { params } = toRefs(route)
console.log(params)
</script>

<style scoped></style>
