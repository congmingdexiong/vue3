<template>
  <Person a="哈哈" :list="personList" />
</template>

<script lang="ts" setup name="App">
import { reactive } from 'vue'
import Person from './components/Person.vue'
import { type Persons } from './types'

const personList = reactive<Persons>([
  { id: '1', name: '张三', age: 12 },
  { id: '2', name: '李四', age: 23 },
])
</script>
