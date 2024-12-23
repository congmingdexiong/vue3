<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>大连</h3>
    <button @click="showLog">点我输出h2这个元素</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, defineExpose } from 'vue'

const title2 = ref()

const a = ref(0)
const b = ref(0)
const c = ref(0)

function showLog() {
  console.log(title2.value)
}
defineExpose({ a, b, c })
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
