<template>
	<div>
		<el-row>
			<el-button type="primary" @click="add()">增加行</el-button>
			<el-button type="primary" @click="add(2)">指定行增加</el-button>
			<el-button type="primary" @click="deleteFun">删除行</el-button>
			<el-button type="primary" @click="deleteFun(2)">删除指定行</el-button>
			<el-button type="primary">编辑行</el-button>
			<el-row>
			  <el-col :span="8"><el-input v-model="userInput" placeholder="请输入内容" ></el-input></el-col>
			  <el-col :span="4"><el-button type="primary" @click="search">查询</el-button></el-col>
			</el-row>
		</el-row>
		<el-row>
			<table border="1">
			  <tr>
			    <th v-for="i in heads">
			    	{{ i }}
			    </th>
			  </tr>
			  <tr v-for="j in bodys">
			    <td>{{ j.name }}</td>
			    <td>{{ j.id }}</td>
			    <td>{{ j.age }}</td>
			  </tr>
			</table>
		</el-row>
	</div>
</template>
<script>
	// Array.prototype.appointRemove = function(dx){ 
	// 	if(isNaN(dx)||dx>this.length){return false;}
	// 	this.splice(dx,1);
	// }
	// Array.prototype.insert = function (index, item) {
	//   	this.splice(index, 0, item);
	// };
	export default {
		data: function() {
			return {
				userInput:'',
				keys: {
						name: "dingyle",
						id: "20",
						age: "20"
					},
				heads: ['name','id','age'],
				bodys: [
					{
						name: "ding",
						id: "1",
						age: "15"
					},
					{
						name: "yong",
						id: "2",
						age: "16"
					},
					{
						name: "liang",
						id: "3",
						age: "17"
					}
				]
			}
		},
		methods: {
			add: function(pos,data){
				var new_data = {
					name: "daDing",
					id: "4",
					age: "18"
				}
				var position = pos || 0;
				this.bodys.splice(position,0,new_data);
			},
			deleteFun: function(num){
				var nums = num || 0;
				this.bodys.splice(nums,1);;
			},
			search: function(){
				for( let i = 0; i < this.bodys.length; i++ ){
					for( let item in this.bodys[i]){
						if( this.bodys[i][item] == this.userInput ){
							this.bodys[i][item] = `<span class="hight">${this.bodys[i][item]}</span>`
						}
					}
				}
			}
		}
	}
</script>
<style>
	.hight {
		color: red;
	}
</style>