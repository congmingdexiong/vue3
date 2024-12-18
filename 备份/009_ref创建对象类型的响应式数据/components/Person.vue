<template>
  <div class="person">
    <h2>一辆{{ car.brand }} 车，价值{{ car.price }}</h2>
    <button @click="changePrice">修改汽车价格</button>
    <h2>游戏列表</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏名字</button>
  </div>
</template>
<!-- reactive -> proxy ref->ref impl -->
<script setup lang="ts" name="Person">
import { ref } from 'vue'
const car = ref({
  brand: '奔驰',
  price: 100,
})

const games = ref([
  { id: 'ayxxxdd1', name: '王者荣耀' },
  { id: 'ayxxxdd2', name: '原神' },
  { id: 'ayxxxdd4', name: '三国志' },
])

function changePrice() {
  car.value.price += 10
}

function changeFirstGame() {
  games.value[0].name = '流星蝴蝶剑'
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
