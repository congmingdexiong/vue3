import { ref, reactive, computed } from 'vue'
import axios from 'axios'

export default function () {
  const sum = ref(0)

  const bigSum = computed(() => {
    return sum.value * 1000
  })

  function add() {
    sum.value += 1
  }

  return {
    sum,
    add,
    bigSum,
  }
}
