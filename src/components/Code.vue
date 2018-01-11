<template>
	<div>
		<p @click="showName">this is show a demo : {{ name }}</p>
		<el-button>默认按钮</el-button>
		<el-button type="primary">主要按钮</el-button>
		<el-button type="success">成功按钮</el-button>
		<el-button type="info">信息按钮</el-button>
		<el-button type="warning">警告按钮</el-button>
		<el-button type="danger">危险按钮</el-button>
	</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
	computed: mapGetters([
		'name'
	]),
	methods: mapActions([
     'showName'
  ]),
}

</script>

<style scoped>
	p {
		font-size: 20px;
		color: blue;
	}
</style>