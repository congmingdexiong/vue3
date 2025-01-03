<template>
  <div class="child">
    <h2>我是Child组件</h2>
    <h3>当前求和为:{{ sum }}</h3>
  </div>
</template>

<script setup lang="ts" name="Child">
import { onMounted, ref } from 'vue'
import axios from 'axios'
const sum = ref(0)

onMounted(() => {
  axios.get('https://api.uomg.com/api/rand.qinghua?format=json').then((res) => {
    console.log(res.data.content)
  })
})

try {
  const {
    data: { content },
  } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  console.log(content)
} catch (error) {
  console.log(error)
}
</script>

<style scoped>
.child {
  border-color: #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}
</style>
