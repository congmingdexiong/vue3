<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}，放大1000倍后：{{ bigSum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr />
    <img :src="dog" v-for="(dog, index) in dogList" :key="index" alt="" />
    <br />
    <button @click="getDog">再来一只一小狗</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import useDog from '@/hook/useDog'
import useSum from '@/hook/useSum'

const { sum, add, bigSum } = useSum()
const { dogList, getDog } = useDog()
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
img {
  height: 100px;
  margin-right: 10px;
}
</style>
