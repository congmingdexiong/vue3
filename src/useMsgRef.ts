import { customRef } from 'vue'

export default function useMsgRef(initValue, delay) {
  // 使用customRef，数据变化时，视图不会更新
  let timer
  const msg = customRef<string>((track, trigger) => {
    return {
      //msg读取时候触发
      get() {
        console.log('get')
        track() //你要对msg进行持续关注
        return initValue
      },
      // msg何时调用时候触发
      set(value) {
        clearTimeout(timer)
        setTimeout(() => {
          initValue = value
          trigger() //告诉VUE数据msg变化了，
        }, delay)
      },
    }
  })

  return { msg }
}
