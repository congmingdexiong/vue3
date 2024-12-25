import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

export default function () {
  const dogList = reactive(['https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1673.jpg'])
  const bearList = reactive(['https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1673.jpg'])

  async function getDog() {
    try {
      const result = await axios.get('https://dog.ceo/api/breeds/image/random')
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }

  onMounted(() => {
    console.log(123)
  })

  return {
    dogList,
    bearList,
    getDog,
  }
}
