<template>
  <div class="person">
    <h1>情况三：监视[reactive]定义的对象类型数据</h1>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <hr />
    {{ obj.a.b.c }}
    <button @click="changeObj">change obj value</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { watch, reactive } from 'vue'
const person = reactive({
  name: '张三',
  age: 18,
})
function changeName() {
  person.name += '~'
}
function changeAge() {
  person.age += 1
}
function changePerson() {
  Object.assign(person, {
    name: '李四',
    age: 24,
  })
}

function changeObj() {
  obj.a.b.c += 1
}

const obj = reactive({
  a: {
    b: {
      c: 1,
    },
  },
})
// 情况三，监视[reactive]定义的对象类型数据，默认开启深度监视,无法关闭的
watch(person, (newValue, oldValue) => {
  console.log('person changed', newValue, oldValue)
})
watch(obj, (newValue, oldValue) => {
  console.log('obj changed', newValue, oldValue)
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
