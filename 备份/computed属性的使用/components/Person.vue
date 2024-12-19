<template>
  <div class="person">
    姓：<input type="text" v-model="firstName" /><br />名：<input
      type="text"
      v-model="lastName"
    /><br />
    <!-- 全名：<span
      >{{ firstName.slice(0, 1).toLocaleUpperCase() + firstName.slice(1) }}-{{ lastName }}</span
    >-->
    <button @click="changeFullName">修改全名</button>
    全名：<span>{{ fullName }}</span
    ><br />
  </div>
</template>
<!-- reactive -> proxy 不可以直接改，必须object assign ref->ref impl .value可以直接改 -->
<script setup lang="ts" name="Person">
import { computed, ref } from 'vue'
const firstName = ref('zhang')
const lastName = ref('san')

// const fullName = computed(() => {
//   return (
//     firstName.value.slice(0, 1).toLocaleUpperCase() +
//     firstName.value.slice(1) +
//     '-' +
//     lastName.value
//   )
// })
const fullName = computed({
  get() {
    return (
      firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    )
  },
  set(val) {
    const [str1, str2] = val.split('-')
    firstName.value = str1
    lastName.value = str2
  },
})

function changeFullName() {
  fullName.value = 'li-si'
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
