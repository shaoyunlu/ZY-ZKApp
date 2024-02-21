<template>
	<view class="">
		<uni-forms ref="formRef" :modelValue="formData" :rules="rules">
			<uni-forms-item label="账号" name="account">
				<uni-easyinput type="text" v-model="formData.account" placeholder="请输入账号" />
			</uni-forms-item>
			<uni-forms-item label="密码" name="password">
				<uni-easyinput type="text" v-model="formData.password" placeholder="请输入账号" />
			</uni-forms-item>
		</uni-forms>
		<button @click="handleSubmit">提交</button>
	</view>
</template>

<script>
import { defineComponent, reactive, ref } from "vue"
	export default defineComponent({
		setup(){
			const formRef = ref(null)
			const formData = reactive({
				account : '',
				password : ''
			})
			const handleSubmit = ()=>{
				formRef.value.validate().then(()=>{
					console.log(formData)
				}).catch(()=>{
					
				})
			}
			const rules = reactive({
				account : {
					rules:[{required:true,errorMessage:'请输入姓名'}]
				},
				password : {
					rules:[{required:true,errorMessage:'请输入密码'}]
				}
			})
			return {formRef,formData,handleSubmit,rules}
		}
	})
</script>

<style lang="less">
	
</style>
