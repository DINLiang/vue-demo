
// slot 就是你在组件写slot  调用你的组件后 在组件标签内写的东西
// 如：你定义组件 demo   <demo>1、我就是组件标签内写的东西，如果组件不写slot 我就会被忽略 哇咔咔 2、我可以指定哦 不管你位置在哪 都在会slot处展示呦</demo>
<template>
	<div>
        <div class="center-s">
            <!-- <p @click="showName">this is show a demo : {{ name }}</p> -->
            <el-button>默认按钮</el-button>
            <el-button type="primary" @click="goToP('primary')">主要按钮</el-button>
            <el-button type="success" @click="goToP('success')">成功按钮</el-button>
            <el-button type="info" @click="goToP('info')">信息按钮</el-button>
            <el-button type="warning" @click="goToP('warning')">警告按钮</el-button>
            <el-button type="danger" @click="show = !show">危险按钮</el-button>
            <transition name="slide-fide">
                <div v-show="show">
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
            </transition>
        </div>
		
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
        
        <div id="primary" style="height: 2000px; width:100%;background-color:blue;"></div>
        <div id="success" style="height: 2000px; width:100%;background-color:red;"></div>
        <div id="info" style="height: 2000px; width:100%;background-color:yellow;"></div>
        <div id="warning" style="height: 2000px; width:100%;background-color:black;"></div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import demo from "./slot-demo.vue";

export default {
  data() {
    return {
      searchText: "1111",
      show_msg: "ASD",
      todos: [
        {
          name: "ding",
          age: 26
        },
        {
          name: "yong",
          age: 25
        },
        {
          name: "liang",
          age: 24
        }
      ],
      show: true
    };
  },
  components: {
    demo
  },
  computed: mapGetters(["name"]),

  //   methods: mapActions(["showName"]),
  methods: {
    goToP(flag) {
      let dom = document.getElementById(flag);
      dom.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};
</script>

<style>
.center-s {
  padding: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
}
p {
  font-size: 20px;
  color: blue;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>