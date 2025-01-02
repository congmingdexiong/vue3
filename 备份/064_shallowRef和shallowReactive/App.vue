<template>
  <div class="app">
    <h2>求和为 :{{ sum }}</h2>
    <h2>名字为: {{ person.name }}</h2>
    <h2>年龄为: {{ person.age }}</h2>
    <button @click="changeSum">sum+1</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <span>|</span>
    <h2>汽车为 :{{ car }}</h2>
    <button @click="changeBrand">修改品牌</button>
    <button @click="changeColor">修改颜色</button>
    <button @click="changeEngine">修改发动机</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { ref, reactive, shallowReactive, shallowRef } from 'vue'
const sum = shallowRef(0)
const person = shallowRef({
  name: 'zhangsan',
  age: 18,
})

const car = shallowReactive({
  brand: 'BMW',
  options: {
    color: 'black',
    engine: 'v6',
  },
})

function changeSum() {
  sum.value += 1
}

function changeName() {
  person.value.name = 'lisi'
}

function changeAge() {
  person.value.age += 1
}

function changePerson() {
  person.value = {
    name: 'wangwu',
    age: 20,
  }
}

function changeBrand() {
  car.brand = 'Benz'
}

function changeColor() {
  car.options.color = 'red'
}

function changeEngine() {
  car.options.engine = 'v8'
}
</script>

<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}

button {
  margin-right: 0 8px;
}
</style>
