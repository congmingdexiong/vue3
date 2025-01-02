<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
  </div>
</template>

<script setup lang="ts" name="App">
import useMsgRef from './useMsgRef'

//使用vue默认提供的ref，数据一变化，视图就会更新
// const msg = ref('hello')

const { msg } = useMsgRef('hello', 2000)
</script>

<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
