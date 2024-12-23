<template>
  <div class="person">
    <h2>需求：当水温达到60度，或水位达到80cm的时候，给服务器发请求</h2>
    <h2>当前水温: {{ temp }}</h2>
    <h2>当前水位: {{ height }}</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, watch, watchEffect } from 'vue'
const temp = ref(0)
const height = ref(0)
function changeTemp() {
  temp.value += 10
}

function changeHeight() {
  height.value += 10
}

// watch([temp, height], (value) => {
//   const [newTemp, newHeight] = value
//   if (newTemp >= 60 || newHeight >= 80) {
//     console.log('请求服务器')
//   }
// })

watchEffect(() => {
  const shouldSendRequest = temp.value >= 60 || height.value >= 80
  //一开始就执行一下
  // console.log(height.value)

  if (shouldSendRequest) {
    // if (temp.value >= 60 || height.value >= 80) {
    console.log('请求服务器')
  }
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
