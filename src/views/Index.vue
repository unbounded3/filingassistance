<template>
  <div class="index">
    <Header></Header>
    <side-bar></side-bar>
    <MainContent></MainContent>
  </div>
</template>

<script>
import Header from "@/views/Header.vue";
import SideBar from "@/views/SideBar.vue";
import MainContent from "@/views/MainContent.vue";

export default {
  name: "IndexPage",
  components: {
    Header,
    SideBar,
    MainContent
  }
}
</script>

<style scoped>
 .index{
   width: 100%;
   height: 680px;
 }
</style>