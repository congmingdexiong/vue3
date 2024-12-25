<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <a href="#">
          <RouterLink to="/news/detail" href="#">{{ news.title }}</RouterLink>
        </a>
      </li>
    </ul>
    <!-- 展示区 -->
    <RouterView />
  </div>
</template>

<script setup lang="ts" name="News">
import { onUnmounted, reactive } from 'vue'

const newsList = reactive([
  { id: 1, title: '新闻001', content: '烤串' },
  { id: 2, title: '新闻002', content: '烤鱼' },
  { id: 3, title: '新闻003', content: '烤肉' },
  { id: 4, title: '新闻004', content: '烤鸭' },
])

onUnmounted(() => {
  console.log('News组件卸载了')
})
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}
.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967e;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
