// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
//使用mockjs模拟数据
Mock.mock('/api/data','get', (req, res) => {
	console.log(req);
	console.log(res);
    return {
        initData:[{
          id: 111,
          date: '2016-05-03',
          name: '王小虎',
          province: '北京',
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
          province: '河北',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          id: 444,
          date: '2016-05-01',
          name: '王小虎',
          province: '山东',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
        ],
        childData:{
          111 : [
              {
                "id": 11111111,
                "name": "ding",
                "age": 21
              },{
                "id": 11111111,
                "name": "liu",
                "age": 21
              }
          ],
          222 : [
              {
                "id": 2222222,
                "name": "yong",
                "age": 22
              },{
                "id": 222222222,
                "name": "yue",
                "age": 22
              }
          ],
          333 : [
              {
                "id": 333333,
                "name": "liang",
                "age": 23
              },{
                "id": 33333,
                "name": "kai",
                "age": 23
              }
          ],
          444 : [
              {
                "id": 4444444,
                "name": "cool",
                "age": 24
              },{
                "id": 4444444,
                "name": "cool",
                "age": 24
              }
          ]       
        }
    }
})