<template>
  <div id="con">
    <div id="icon">
      <el-icon>
        <Fold/>
      </el-icon>
    </div>
    <router-link id="shouYe-a" to="/backView/shouYe">首页</router-link>
    <span id="foam" v-for="route in $route.matched" :key="route.path">{{route.meta.name}}</span>
    <el-avatar id="TouXiang" shape="square" :size="45" fit="fill" :src="url" />
    <div class="seg"></div>
  </div>

</template>

<script setup>
import {  Fold } from '@element-plus/icons-vue'
</script>

<script>
export default {
  name: "RightHeader",
  data(){
    return{
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
}
</script>

<style scoped>
#shouYe-a{
  text-decoration-line: none;
}
#icon{
  margin-left: 1%;
  display: inline-block;
  margin-right: 2%;
  cursor: pointer;
}
#con{
  width: 87%;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 0 5px black;
}
.seg{
  height: 2px;
  width: 100%;
  background-color: rgb(243,244,244);

}
#foam{
  color: rgb(178,168,190);
}
#TouXiang{
  position: absolute;
  right: 15px;
  top: 3px;
  cursor: pointer;
  transition: .35s ease;
}
#TouXiang:hover{
  transform: scale(1.1);
}

</style>