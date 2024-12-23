<template>
  <Person v-if="isShow" />
  <button @click="isShow = !isShow">{{ isShow ? '隐藏' : '显示' }}</button>
</template>

<script lang="ts" setup name="App">
import { onMounted, ref } from 'vue'
import Person from './components/Person.vue'
const isShow = ref(true)

onMounted(() => {
  console.log('父亲- mounted')
})
</script>
