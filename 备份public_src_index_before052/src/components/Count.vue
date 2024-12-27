<!-- vue template -->
<template>
  <div class="count">
    <h2>当前求和为: {{ sum }},放大是背后 :{{ bigSum }}</h2>
    <h3>欢迎来到: {{ upperSchool }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from 'vue'
// use counter store
import { useCountStore } from '@/store/count'
import { storeToRefs } from 'pinia'
const countStore = useCountStore()
console.log(countStore)

const { sum, bigSum, upperSchool } = storeToRefs(countStore)

// 以下两种方式都可以拿到state中的数据
console.log('@@', countStore.sum)
console.log('@@', countStore.$state.sum)

const n = ref(1)

function add() {
  //   第一种方式
  //   countStore.sum += 1
  //   第二种方式
  //   countStore.$patch({
  //     sum: 88,
  //   })
  //   第三种
  countStore.increment(n.value)
}

function minus() {
  countStore.decrement(n.value)
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>
