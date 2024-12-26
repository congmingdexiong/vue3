<template>
  <div class="home">
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="" />
  </div>
</template>

<script setup lang="ts" name="Home">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// onMounted(() => {
//   //route 跳转到detail页面
//   setTimeout(() => {
//     router.push('/news/detail')
//   }, 2000)
// })
//
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
