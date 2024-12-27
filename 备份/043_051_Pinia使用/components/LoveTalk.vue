<!-- vue template -->
<template>
  <div class="talk">
    <button @click="getLove">获取一句土味情话</button>
    <ul>
      <li v-for="item in talkList" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { useLoveTalkStore } from '@/store/loveTalk'
import { storeToRefs } from 'pinia'

const talkListStore = useLoveTalkStore()

const { talkList } = storeToRefs(talkListStore)

talkListStore.$subscribe((mutation, state) => {
  console.log('mutation', mutation)
  console.log('state', state.talkList[0].title)
  localStorage.setItem('talkList', JSON.stringify(state.talkList))
})

function getLove() {
  talkListStore.getTalk()
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
