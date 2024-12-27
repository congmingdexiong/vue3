import axios from 'axios'
import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'

import { reactive } from 'vue'
const useLoveTalkStore = defineStore('loveTalk', () => {
  const talkList = reactive(JSON.parse(localStorage.getItem('talkList') || '[]'))
  async function getTalk() {
    const {
      data: { content: title },
    } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    const obj = { id: nanoid(), title }
    talkList.unshift(obj)
  }

  return {
    talkList,
    getTalk,
  }
})
//const useLoveTalkStore = defineStore('loveTalk', {
//   state: () => ({
//     talkList: JSON.parse(localStorage.getItem('talkList') || ''),
//     // talkList: [
//     //   { id: '1', title: '你是我见过最可爱的傻瓜1' },
//     //   { id: '2', title: '你是我见过最可爱的傻瓜2' },
//     //   { id: '3', title: '你是我见过最可爱的傻瓜3' },
//     //   { id: '4', title: '你是我见过最可爱的傻瓜4' },
//     //   { id: '5', title: '你是我见过最可爱的傻瓜5' },
//     // ],
//   }),
//   actions: {
//     async getTalk() {
//       const {
//         data: { content: title },
//       } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//       const obj = { id: nanoid(), title }
//       this.talkList.unshift(obj)
//     },
//   },
// })

export { useLoveTalkStore }
