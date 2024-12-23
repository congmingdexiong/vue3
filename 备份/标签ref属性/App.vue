<template>
  <h2 ref="title2">沈阳</h2>
  <button @click="showLog">Test</button>
  <Person ref="ren" />
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { ref } from 'vue'

const title2 = ref()

const ren = ref()
function showLog() {
  console.log(ren.value)
}
</script>
