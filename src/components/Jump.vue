<template>
  <div>
    <input type="text" v-model='componentName'>
    <button @click='add'>click me to add a component</button>
    <show-select selectWidth="1000" :subject="selectData"></show-select>
  </div>
</template>

<script>
    // 引入要添加的所有组件
    import selectM from './select.vue'
    export default {
        data: function() {
            return {
                allComponents: [],
                componentName: '',
                selectData:[{value:1,text:"ding"},{value:2,text:"liang"}]
            }
        },
        components: {
                // 注册所有组件
                "showSelect": selectM
        },
        methods: {
            add: function() {
                this.allComponents.push(this.componentName)
                // 重置输入框
                this.componentName = ''
            },
            render: function(h) { // h 为 createElement 函数，接受三个参数
                // tag 
                // data
                // children 具体看文档吧
                return h('div',{},this.allComponents.map(function(componentName) {
                    return h(componentName)
                }))
            }
        }
    }
</script>