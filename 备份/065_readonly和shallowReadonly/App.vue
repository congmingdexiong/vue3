<template>
  <div class="app">
    <h2>当前求sum1和为:{{ sum1 }}</h2>
    <h2>当前求sym2和为:{{ sum2 }}</h2>
    <h2>当前car1汽车为和为:{{ car1 }}</h2>
    <h2>当前car2汽车为和为:{{ car2 }}</h2>
    <button @click="changeSum1">点我sum1+1</button>
    <button @click="changeSum2">点我sum2+1</button>
    <button @click="changeBrand">car1修改品牌</button>
    <button @click="changeColor">car1修改颜色</button>
    <button @click="changeEngine">car1修改发动机</button>
    <button @click="changeBrand2">car2修改品牌</button>
    <button @click="changeColor2">car2修改颜色</button>
    <button @click="changeEngine2">car2修改发动机</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { ref, readonly, reactive, shallowReadonly } from 'vue'
const sum1 = ref(0)
const sum2 = readonly(sum1)
const car1 = reactive({
  brand: 'BMW',
  options: {
    color: 'black',
    engine: 'v6',
  },
})

// shallowReadonly 修饰完 只让第一层不能改 第二层就可以改了

const car2 = readonly(car1)

function changeSum1() {
  sum1.value += 1
}

function changeSum2() {
  sum2.value += 1
}

function changeBrand() {
  car1.brand = 'Benz'
}

function changeColor() {
  car1.options.color = 'red'
}

function changeEngine() {
  car1.options.engine = 'v8'
}

function changeBrand2() {
  car2.brand = 'Benz'
}

function changeColor2() {
  car2.options.color = 'red'
}

function changeEngine2() {
  car2.options.engine = 'v8'
}
</script>

<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
