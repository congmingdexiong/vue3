<template>
  <div class="person">
    <h2>一辆{{ car.brand }} 车，价值{{ car.price }}</h2>
    <button @click="changePrice">修改汽车价格</button>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏名字</button>
    <h2>测试 : {{ obj.a.b.c }}</h2>
    <button @click="changeObj">修改第一个游戏名字</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { reactive } from 'vue'
const car = reactive({
  brand: '奔驰',
  price: 100,
})

const games = reactive([
  { id: 'ayxxxdd1', name: '王者荣耀' },
  { id: 'ayxxxdd2', name: '原神' },
  { id: 'ayxxxdd4', name: '三国志' },
])

const obj = reactive({
  a: {
    b: {
      c: 666,
    },
  },
})

function changePrice() {
  car.price += 10
}

function changeFirstGame() {
  games[0].name = '流星蝴蝶剑'
}
function changeObj() {
  obj.a.b.c = '777'
}
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
