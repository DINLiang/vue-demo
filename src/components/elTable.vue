<template>
  <div>
    <el-row>
      <el-col :span="14">
        <el-button type="primary" @click="selectFun()">选中</el-button>
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
     @current-change="handleCurrentChange"
      style="width: 100%"
      show-summary="true"
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
<!--       <el-table-column
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
 -->    </el-table>
  </div>  
    
    
</template>

<script>
  export default {
    methods: {
      selectFun(){
        this.$refs.singleTable.setCurrentRow(this.tableData4[1]);
      },
      deleteFun(index) {
        let delIndex = index || 1;
        let rows = this.tableData4;
        rows.splice(delIndex, 1);
      },
      editFun(){

      },
      addFun(){
        for(var k = 0; k < 1200; k++){
          var data = {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          };
          this.tableData4.push(data);
        }
      }
    },
    data() {
      return {
        tableData4: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>