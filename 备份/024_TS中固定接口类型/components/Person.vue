<template>
  <div class="person">？？？？</div>
</template>

<script setup lang="ts" name="Person">
import { type PersonInter, type Persons } from '@/types'
const person: PersonInter = { id: 'assdfasdf', name: 'zhangsan', age: 18 }
const personList: Persons = [{ id: 'assdfasdf', name: 'zhangsan', age: 18 }]
</script>
<style>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}

li {
  font-size: 20px;
}
</style>
