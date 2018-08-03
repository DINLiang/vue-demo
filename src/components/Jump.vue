<template>
  <div>
    <input ref="add" type="text" v-model='componentName'>
    <button @click='add'>click me to add a component</button>
    <show-select selectWidth="1000" :subject="selectData" v-on:changeSelect="getUserSelect"></show-select>
    <input type="text"> {{ userSelect }}
    <draggable v-model="myArray" :options="{group:'people'}" @start="drag=true" @end="drag=false">
   <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
</draggable>
  </div>
</template>

<script>
    'use strict'
    // 引入要添加的所有组件
    import selectM from './select.vue'
import draggable from 'vuedraggable'

    export default {
        data: function() {
            return {
                userSelect: '',
                allComponents: [],
                componentName: '',
                selectData:[{value:1,text:"ding"},{value:2,text:"liang"}],
                myArray: [
                    {
                        "name": "111111"
                    },{
                        "name": "22222"
                    },{
                        "name": "333333"
                    }
                ]
            }
        },
        components: {
                // 注册所有组件
                "showSelect": selectM,
    draggable

        },
        methods: {
            add: function() {
                this.allComponents.push(this.componentName)
                // 重置输入框
                this.componentName = ''
                    console.log("11111");

                console.log(this.$refs.add.value);
                this.$nextTick(function(){
                    console.log("tick");
                console.log(this.$refs.add.value);

                });
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