<template>
	<view class="container">
		{{msg}}
	</view>
</template>

<script>
import { defineComponent, ref } from "vue"
export default defineComponent({
	setup(){
		const msg = ref('haha')
		return {msg}
	}
})
</script>

<style lang="less">
	.container {
		padding: 20px;
		font-size: 24px;
		line-height: 24px;
	}
</style>
