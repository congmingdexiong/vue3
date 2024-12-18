<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Person',
  //   data() {
  //     return {
  //       name: '张三',
  //       age: 18,
  //       tel: '138888888',
  //     }
  //   },
  //   methods: {
  //     changeName() {
  //       this.name = 'zhang-san'
  //     },
  //     changeAge() {
  //       this.age += 1
  //     },
  //     showTel() {
  //       alert(this.tel)
  //     },
  //   },
  setup() {
    console.log('this', this)

    // 数据
    let name = '张三' 
    let age = 19
    let tel = '138888888'

    // 方法
    function changeName() {
      name = 'zhang-san'
    }
    function changeAge() {
      age += 1
    }
    function showTel() {
      alert(tel)
    }

    return {
      name,
      age,
      tel,
      changeName,
      changeAge,
      showTel,
    }
  },
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
