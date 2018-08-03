
// slot 就是你在组件写slot  调用你的组件后 在组件标签内写的东西
// 如：你定义组件 demo   <demo>1、我就是组件标签内写的东西，如果组件不写slot 我就会被忽略 哇咔咔 2、我可以指定哦 不管你位置在哪 都在会slot处展示呦</demo>
<template>
	<div>
		<p @click="showName">this is show a demo : {{ name }}</p>
		<el-button>默认按钮</el-button>
		<el-button type="primary">主要按钮</el-button>
		<el-button type="success">成功按钮</el-button>
		<el-button type="info">信息按钮</el-button>
		<el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <!-- <demo :title="show_msg" url="/user">
            测试slot
            <demo :title="show_msg" url="/person">
            测试slot
        </demo>
        </demo> -->

        <!-- <demo>
            <template slot="header">
                <h1>我是header</h1>
            </template>
            <div>
                我是main
            </div>
            <template slot="footer">
                <h2>我是footer</h2>
            </template>
            <div>
                我是footer 下的 main
            </div>
        </demo> -->
        <demo :todos="todos">
            <div slot-scope="slotProps">
                {{ slotProps.list.age }}
                {{ slotProps.list.name }}
            </div>
        </demo>
         <demo :todos="todos">
            <div slot-scope="{ list }">
                {{ list.age }}
                {{ list.name }}
            </div>
        </demo>
	</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import demo from './slot-demo.vue'

export default {
    data() {
        return {
            searchText : '1111',
            show_msg: 'ASD',
            todos: [
                {
                    "name": "ding",
                    "age": 26
                },{
                    "name": "yong",
                    "age": 25
                },{
                    "name": "liang",
                    "age": 24
                }
            ]
        }
    },
    components: {
        demo
    },
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