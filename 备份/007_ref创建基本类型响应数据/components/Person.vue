﻿<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref } from 'vue'
const name = ref('张三')
const age = ref(19)
const tel = '138888888'

function changeName() {
  name.value = 'zhang-san'
}
function changeAge() {
  age.value += 1
}
function showTel() {
  alert(tel)
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
</style>
