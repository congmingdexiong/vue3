<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我加1</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue'

const sum = ref(0)
function add() {
  sum.value += 1
}

// setup就是create钩子函数的简写，只能在单文件组件中使用，不能在普通的.vue文件中使用。
console.log('created')

//挂载

onBeforeMount(() => {
  console.log('beforeMount')
})

onMounted(() => {
  console.log('子- mounted')
})

//更新
onBeforeUpdate(() => {
  console.log('beforeUpdate')
})

onUpdated(() => {
  console.log('updated')
})

//卸载
onBeforeUnmount(() => {
  console.log('beforeUnmount')
})
onUnmounted(() => {
  console.log('unmounted')
})
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
