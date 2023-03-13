<template>
  <div id="yonghuguanli" >
    <div id="sub_content">
      <router-link :to="path" class="aaa">
        <my-icons :name="icon"></my-icons>
        &nbsp;
        {{ msg }}
      </router-link>
    </div>
  </div>
</template>

<script>
import myIcons from "@/views/MyIcons.vue";
export default {
  name: "SubItem",
  components:{
    myIcons
  },
  data(){
    return{
    }
  },
  props:{
    msg:String,
    path:String,
    icon:String
  },
  methods:{

  }
}
</script>

<style scoped>
#yonghuguanli{
  height: 50px;
  width: 100%;
  background-color: rgb(31,45,61);
  line-height: 50px;
  font-size: 13px;
  color:  rgb(191,191,191);
  cursor: pointer;
  transition: 0.5s;
}
#yonghuguanli:hover{
  color: rgb(60,145,233);
  background-color: rgb(0,21,40);
}
#sub_content{
  margin-left: 20%;
}
.aaa{
  color:  rgb(191,191,191);
  text-decoration-line: none;
  display: block;
}
</style>