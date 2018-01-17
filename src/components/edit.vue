<template>
	<el-row>
		<el-col :span="6">
			<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			  <el-form-item label="日期" prop="date">
			    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm2.date" style="width: 100%;"></el-date-picker>
			  </el-form-item>
        <el-form-item label="省份" prop="province">
          <el-input v-model.number="ruleForm2.province"></el-input>
        </el-form-item>
        <el-form-item 
        label="姓名" 
        prop="name"
        >
          <el-input v-model.number="ruleForm2.name"></el-input>
        </el-form-item>
        <el-form-item label="市区" prop="city">
          <el-input v-model.number="ruleForm2.city"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address"
        :rules="[
          { required: true, message: '地址不能为空'}
        ]"
        >
          <el-input v-model.number="ruleForm2.address"></el-input>
        </el-form-item>
        <el-form-item label="邮编" prop="zip"
        :rules="[
          { required: true, message: '邮编不能为空'},
          { type: 'number', message: '邮编必须为数字值'}
        ]"
        >
          <el-input v-model.number="ruleForm2.zip"></el-input>
        </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
			    <el-button @click="resetForm('ruleForm2')">重置</el-button>
			  </el-form-item>
			</el-form>
		</el-col> 
	</el-row>
</template>
<script>
  export default {
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //思路：1、组装修改的数据
                  //2、数据传给后端 
                  //3、跳转回原来界面
            alert('修改成功！请查看console');
            let edited_data = {
              date: this.ruleForm2.date,
              province: this.ruleForm2.province,
              name: this.ruleForm2.name,
              city: this.ruleForm2.city,
              address: this.ruleForm2.address,
              zip: this.ruleForm2.zip
            }
            console.log(edited_data);
            this.$router.push({ name: 'elTable'})
          } else {
            alert('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted:function(){
      //思路: 1、拿到id，
            //2、请求数据
            //3、填充form表单。
      var select_row_id = this.$route.params.selectRowId;
      for(let i of this.tableData4){
        if(i.id == select_row_id){
            this.ruleForm2.date = i.date;
            this.ruleForm2.province = i.province;
            this.ruleForm2.name = i.name;
            this.ruleForm2.city = i.city;
            this.ruleForm2.address = i.address;
            this.ruleForm2.zip = i.zip;
        }
      }
    },
    data() {
      var checkProvince = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('省份不能为空'));
        } else {
          callback();
        }
      };
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('名字不能为空'));
        } else {
          if(value.length > 2){
            return callback(new Error('姓名2个汉字以内'));
          } else {
            callback();
          }
        }
      };
      return {
        ruleForm2: {
          date: '',
          province: '',
          name: '',
          city: '',
          address: '',
          zip: ''
        },
        rules2: {
          province: [
            { validator: checkProvince, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        },
        tableData4: [{
          id: 111,
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id: 222,
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id: 333,
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id: 444,
          date: '2016-05-01',
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