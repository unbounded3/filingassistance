<template>
  <div id="xitongguanli"  @click.stop="f1">
    <div id="content">
      <my-icons :name="hostIcon"></my-icons>
      &nbsp;
      {{ msg }}
    </div>
    <div id="down_icon"><font-awesome-icon  :icon="icon" /></div>
  </div>
  <slot v-if="show"></slot>
</template>


<script>
import myIcons from "@/views/MyIcons.vue";
export default {
  name: "MenuItem",
  props:{
    msg:String,
    hostIcon:String
  },
  components:{
    myIcons
  },
  methods: {
    f1(){
      this.show=!this.show
    }
  },
  data(){
    return{
      oldMenu:null,
      show:false,
      icon:'fa-solid fa-angle-down',
    }
  }
}
</script>



<style scoped>
#xitongguanli{
  height: 60px;
  width: 100%;
  line-height: 60px;
  font-size: 14px;
  color: rgb(191,191,191);
  cursor: pointer;
}
#xitongguanli:hover{
  background-color: rgb(45,61,81);
}
#content{
  float: left;
  margin-left: 10%;
}
#down_icon{
  margin-right: 10%;
  float: right;
}
</style>