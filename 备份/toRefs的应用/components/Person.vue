<!-- 若基本类型响应式数据 必须使用ref
若需要响应式对象 层级不深 ref,reactive都可以
若需要响应式对象 层级深 ref,reactive都可以  reactive包括的对象每个节点都是响应式的 -->

<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄 {{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>
<!-- reactive -> proxy 不可以直接改，必须object assign ref->ref impl .value可以直接改 -->
<script setup lang="ts" name="Person">
// 本节重点，让结构的数据有响应式的能力
import { reactive, toRefs, toRef } from 'vue'

const person = reactive({
  name: '张三',
  age: 18,
})

const { name, age } = toRefs(person)
const nl = toRef(person, 'age')
console.log('nl', nl.value)

console.log(name, age)

function changeName() {
  //toRefs把每个节点变成了refs所以用.value
  console.log(person.name, name.value)

  name.value = '李四'
}
function changeAge() {
  age.value = 24
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

li {
  font-size: 20px;
}
</style>
