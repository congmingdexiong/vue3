<template>
  <div class="person">
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2>汽车:{{ person.car.c1 }}，{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { watch, reactive } from 'vue'
const person = reactive({
  name: '张三',
  age: 30,
  car: { c1: '宝马', c2: '奔驰' },
})

function changeName() {
  person.name += '~'
}
function changeAge() {
  person.age += 1
}
function changeC1() {
  person.car.c1 = '奥迪'
}
function changeC2() {
  person.car.c2 = '大众'
}
function changeCar() {
  person.car = { c1: '特斯拉', c2: '丰田' }
}

//情况五，监视上述多个属性
watch(
  [() => person.name, () => person.car.c1],
  (newValue, oldValue) => {
    console.log('person changed')
    console.log(newValue)
    console.log(oldValue)
  },
  { deep: true },
)
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
