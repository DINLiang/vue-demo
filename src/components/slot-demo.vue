<template>
    <div>
        <!-- <p>{{ title }}</p>
        <p>{{ normalizedSize }}</p>
        <a :href="url">测试url</a> -->
        <!-- <slot></slot> -->

<!-- <div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div> -->

<ul>
    <li v-for=" item in todos">
        <slot :list="item">
            {{ item.name }}
        </slot>
    </li>
</ul>


    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    url: {
        type: String,
      default: ""
    },
    todos: {
        type: Array,
        default(){
            return []
        }
    }
  },
  computed: {
    // normalizedSize: function() {
    //   return this.title.trim().toLowerCase();
    // }
  }
};
</script>

<style>
</style>
