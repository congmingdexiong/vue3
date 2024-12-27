import { defineStore } from 'pinia'

const useCountStore = defineStore('count', {
  state: () => ({
    sum: 6,
    school: '北京大学',
    address: '北京市海淀区 ',
  }),
  actions: {
    increment(value: number) {
      console.log(value)

      this.sum = this.sum + value
    },
    decrement(value: number) {
      this.sum = this.sum - value
    },
  },
  getters: {
    bigSum: (state) => state.sum * 10,
    upperSchool: (state): string => state.school.toUpperCase(),
  },
})

export { useCountStore }
