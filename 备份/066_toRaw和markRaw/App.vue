<template>
  <div class="app">
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <button @click="person.age += 1">修改年龄</button>
  </div>
  <h2>{{ car2 }}</h2>
  <button @click="car2.price += 10">点我price +10</button>
</template>

<script setup lang="ts" name="App">
import { markRaw, reactive, toRaw } from 'vue'
import mockjs from 'mockjs'

const person = reactive({
  name: 'John',
  age: 30,
})

const person2 = toRaw(person)

console.log('响应式数据', person)
console.log('原始数据', person2)

function showPerson(p) {
  p.age += 10
  p.name += '~'
  console.log(p)
}

// markRaw 用来标记一个对象，使其永远不会再转换为响应式对象
const car = markRaw({ brand: 'BMW', price: 100 })
car.price += 1
car.price += 1
car.price += 1

const car2 = reactive(car)
console.log(car2)

console.log(mockjs)
</script>

<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
