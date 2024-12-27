<!-- vue template -->
<template>
  <div>
    <Count />

    <LoveTalk />
  </div>
</template>

<script setup lang="ts" name="App">
import Count from './components/Count.vue'

import LoveTalk from './components/LoveTalk.vue'
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
