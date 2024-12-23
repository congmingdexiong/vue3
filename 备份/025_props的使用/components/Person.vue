<template>
  <div class="person">
    <ul>
      <li v-for="p in list" :key="p.id">{{ p.name }} -- {{ p.age }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Person">
import { type Persons } from '@/types'
import { withDefaults, defineProps } from 'vue'
//接受a
// defineProps(['a'])

//接受list和限制类型
// const x = defineProps<{ list: Persons; a: string }>()

//接受list 和 限制类型 和 限制必要性 和 指定默认值
withDefaults(defineProps<{ list?: Persons; a: string }>(), {
  list: () => [{ id: '1', name: '张三', age: 12 }],
})

//接受a同事将props保存起来
// const x = defineProps(['a', 'list'])
// console.log(x.a)
// console.log(x.list[0].id)
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
