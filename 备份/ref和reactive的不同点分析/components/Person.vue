<!-- 若基本类型响应式数据 必须使用ref
若需要响应式对象 层级不深 ref,reactive都可以
若需要响应式对象 层级深 ref,reactive都可以  reactive包括的对象每个节点都是响应式的 -->

<template>
  <div class="person">
    <h2>一辆{{ car.brand }} 车，价值{{ car.price }}</h2>
    <button @click="changeBrand">修改汽车品牌</button>
    <button @click="changePrice">修改汽车价格</button>
    <button @click="changeCar">修改汽车</button>
    <hr />
    <h2>当前求和为:{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
    <hr />
    {{ fruit.category.name }}
    <button @click="changeFruit">change fruit name</button>
  </div>
</template>
<!-- reactive -> proxy 不可以直接改，必须object assign ref->ref impl .value可以直接改 -->
<script setup lang="ts" name="Person">
import { reactive, ref } from 'vue'
const car = reactive({
  brand: '奔驰',
  price: 100,
})
const fruit = reactive({
  name: '苹果',
  category: {
    id: 1,
    name: '青苹果',
  },
})

const sum = ref(0)

function changePrice() {
  car.price += 10
}
function changeBrand() {
  car.brand = '宝马'
}

function changeCar() {
  Object.assign(car, { brand: '奥拓', price: 1100 })
}

function changeSum() {
  sum.value += 1
}
function changeFruit() {
  fruit.category.name = '红苹果'
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
