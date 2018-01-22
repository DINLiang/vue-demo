<template>
  <div>
    <el-row>
      <el-col :span="14">
        <el-button type="primary" @click="setSelectFun()">选中</el-button>
        <el-button type="primary" @click="getSelectFun()">获取选中</el-button>
        <el-button type="primary" @click="addFun()">增加行</el-button>
        <el-button type="primary" @click="addFun(2,keys)">指定行增加</el-button>
        <el-button type="primary" @click="deleteFun">删除行</el-button>
        <el-button type="primary" @click="deleteFun(2)">删除指定行</el-button>
        <el-button type="primary" @click="editFun">编辑行</el-button>
      </el-col>
      <el-col :span="10">
        <el-col :span="15">
          <el-input v-model="userInput" placeholder="请输入内容" ></el-input>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" @click="search">查询</el-button>
        </el-col>
      </el-col>
    </el-row>
    <el-table
      :data="tableData4"
      ref="singleTable"
      highlight-current-row
     @cell-click="onRowSelected"
     @select="onCheckRows"
      :summary-method="getSummaries"
      show-summary
      style="width: 100%"
      max-height="250">
      <el-table-column
        label="列数"
        type="index">
      </el-table-column>
      <el-table-column
      type="selection"
      width="55">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-table
      :data="childTableData"
      ref="singleTable"
      highlight-current-row
      style="width: 100%"
      max-height="250">
      <el-table-column
        label="列数"
        type="index">
      </el-table-column>
      <el-table-column
      type="selection"
      width="55">
      </el-table-column>
      <el-table-column
        prop="id"
        label="编号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="120">
      </el-table-column>
    </el-table>
  </div>  
</template>
<script>
import Axios from 'axios'
  export default {
    methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = '';
          }
        });
        return sums;
      },
      setSelectFun(){
        this.$refs.singleTable.setCurrentRow(this.tableData4[1]);
      },
      getSelectFun(){
        alert(this.selectRow.name);
      },
      onCheckRows(selection, row){
        this.checkRows = selection;
      },
      //用于子主表展示 check也会触发
      onRowSelected(row, column, cell, event) {
        //存储
        this.selectRow = row;
        this.setChildGridData(row);
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      deleteFun(index) {
        //思路：拿到数据id 传给后端 返回数据后 设置给tableData4
        let delIndex = index || 1;
        this.tableData4.splice(delIndex, 1);
      },
      editFun(){
        this.$router.push({ name: 'edit', params: { selectRowId: this.selectRow.id }})
      },
      addFun(){
        for(var k = 0; k < 1200; k++){
          var data = {
            id: 9999999,
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          };
          this.tableData4.push(data);
        }
      },
      setChildGridData(row){
        this.childTableData = this.childGridData[row.id];
      },
      search(){
        alert("看源码思路，已实现");
        Axios.get('/api/data')
        .then(function(response){
          console.log(response);
        })
        .catch(function(err){
          console.log(err);
        });
        // 思路:1、仅限当前页查询
        //           for当前页数据查找匹配数据，保留原来数据，重新set数据
        //      2、全局查询
        //           传给后端，set返回的数据
        //      3、细节
        //           选中高亮，处理数字包含的多种情况，已实现
        // if(this.userInput !== ""){
        //   for( let m = 0; m < this.tableData4.length; m++){
        //     for( let n in this.tableData4[m]){
        //       if( this.tableData4[m][n] == this.userInput){
        //         this.tableData4[m][n] = `span${ this.userInput }`;
        //       }
        //     }
        //   }
        // }
      }
    },
    mounted:function(){
      let that = this;
      //思路: 1、页面初始化请求数据 
            //2、编辑完成会提交到后端,跳回来
            //3、赋值tableData4
      Axios.get('/api/data')
      .then(function(res){
          console.log(res);
          that.tableData4 = res.data.initData;
          that.childGridData = res.data.childData;
      })
    },
    data() {
      return {
        userInput:'',
        selectRow:[],
        checkRows:[],
        childTableData:[],
        tableData4: [],
        childGridData:{}
      }
    }
  }
</script>