export default {
	props: {
		//是否点击阴影关闭
		isMask: {
			type: Boolean,
			default: true,
		},
		//是否开启动画
		animation: {
			type: Boolean,
			default: true,
		},
		//是否开启安全条
		safeArea: {
			type: Boolean,
			default: true,
		},
		//是否严格的遵守父子节点不互相关联
		checkStrictly: {
			type: Boolean,
			default: false
		},
		//是否可搜索选项
		filterable: {
			type: Boolean,
			default: true
		}
	}
}