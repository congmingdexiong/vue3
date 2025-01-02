<template>
  <div class="father">
    <h3>父组件</h3>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
		<!-- 给子组件Child绑定事件 -->
    <Child @send-toy="saveToy"/>
  </div>
</template>

<!-- 区别和使用场景
通过 props 传递函数：

父组件可以直接控制子组件的行为。
适用于父组件需要对子组件的操作进行控制的场景。

通过自定义事件：

子组件可以独立地通知父组件某些状态变化。
适用于子组件需要向父组件传递数据或通知父组件某些状态变化的场景。 -->
自定义事件提供了一种更松耦合的方式来实现组件之间的通信，使得子组件可以更独立地工作，而不需要直接依赖父组件的实现。
<script setup lang="ts" name="Father">
  import Child from './Child.vue'
	import { ref } from "vue";
	// 数据
	let toy = ref('')
	// 用于保存传递过来的玩具
	function saveToy(value:string){
		console.log('saveToy',value)
		toy.value = value
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
	.father button{
		margin-right: 5px;
	}
</style>