<template>
  <div>
    <input type="text" v-model='componentName'>
    <button @click='add'>click me to add a component</button>
    <show-select selectWidth="1000" :subject="selectData" v-on:changeSelect="getUserSelect"></show-select>
    <input type="text"> {{ userSelect }}
  </div>
</template>

<script>
    'use strict'
    // 引入要添加的所有组件
    import selectM from './select.vue'
    export default {
        data: function() {
            return {
                userSelect: '',
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
            },
            getUserSelect: function(data){
                this.userSelect = data;
            }
        }
    }
</script>

<!--   <component-a  v-on:child-say="listenToMyBoy"></component-a>
<p>Do you like me? {{childWords}}</p>
 methods: {
            listenToMyBoy: function (somedata){
              this.childWords = somedata
            }
            b
        <button v-on:click="onClickMe">like!</button>

methods: {
      onClickMe: function(){
        this.$emit('child-say',this.somedata);
      }
    } -->