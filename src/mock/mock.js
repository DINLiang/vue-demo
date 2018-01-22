// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
import { init } from './initData.js'
import { child } from './childData.js'
//使用mockjs模拟数据
Mock.mock('/api/data','get', (req, res) => {
	console.log(req);
	console.log(res);
    return {
        initData: init.initData,
        childData: child.child_data
    }
})