<template>
  <button @click="isShow = true">展示弹窗</button>
  <teleport to="body">
    <div class="modal" v-show="isShow">
      我是弹窗的标题
      <h2>提示弹窗</h2>
      <p>我是弹窗内容</p>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </teleport>
</template>

<script setup lang="ts" name="modal">
import { ref } from 'vue'

const isShow = ref(false)
</script>

<style scoped>
.modal {
  position: fixed;
  /* margin: 0 auto; */
  width: 200px;
  height: 200px;
  background-color: skyblue;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 5px;
  text-align: center;
  left: 50%;
  margin-left: -100px;
}
</style>
