<template>
	<div>
		<p>this is show a demo : {{ t }}</p>
        <el-button type="danger" @click="changeIs">危险按钮</el-button>
        <custom-input v-model="searchText"></custom-input>
        <div :is="tmp" v-model="searchText"></div>
	</div>
</template>

<script>
    'use strict'
export default {
	name: 'slide',
	data() {
		return {
            t: "yong",
            searchText: "11111",
            tmp: "custom-input"
		}
    },
    methods: {
        changeIs(){
            this.tmp='custom-input1'
        }
    }
}
</script>