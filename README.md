```html
<template>
<jw-cascader :checkStrictly="true" ref="scroll" @change='chooseSuccess'></jw-cascader>
</template>
export default {
		data() {
			return {
				
			}
		},
		components: {
			// CaptchaJigsaw
			jwCascader
		},
		methods: {
			//打开地址选择器
			openAddress() {
				this.$refs.scroll.open()
			},
			//地址选择成功
			chooseSuccess(e) {
				
			},
    }
}
```