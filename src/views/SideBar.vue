<template>
  <div class="sidebar">
    <ul class="menu" v-for="menu in navTree" :key="menu.id">
      <tree-menu :menu="menu"></tree-menu>
    </ul>
  </div>
</template>

<script>
import TreeMenu from "@/views/TreeMenu.vue";

export default {
  name: "SideBar",
  components: {TreeMenu},
  computed:{
    navTree(){
      return this.$store.getters.getNavTree;
    }
  }
}
</script>

<style scoped>
 .sidebar{
   width: 15%;
   height: 90%;
   background-color: firebrick;
   float: left;
 }
</style>