<template>
  <div class="person">
    <h1>情况二：监视[ref]定义的对象类型数据</h1>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { watch, ref } from 'vue'
const person = ref({
  name: '张三',
  age: 18,
})
function changeName() {
  person.value.name += '~'
}
function changeAge() {
  person.value.age += 1
}
function changePerson() {
  person.value = {
    name: '李四',
    age: 24,
  }
}

//监视，情况一，监视【ref】定义的【对象类型】数据，监视的是对象地址值，弱项监视对象内部属性的变化，需要手动开始深度监视
//只改名字或者age的时候，已经改了person所以发现属性已经被改了所以oldValue和newValue都是改后的值
//如果改的是person,oldvalue和newvalue是不同的


//person相当房子，如果改age或者name 房子还在所以oldvalue和newvalue都是一样的
//如果房子换了，则newvalue和oldvalue不一样
watch(
  person,
  (newValue, oldValue) => {
    console.log('person changed')
    console.log(newValue)
    console.log(oldValue)
  },
  { deep: true },
  //immediate: true,立即执行一次
  //deep: true,深度监视
)
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
