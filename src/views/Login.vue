<template>
  <div id="bg">
    <div id="login_div">
      <div id="login_div_head">请登录</div>
      <div id="login_div_choose">
        <div id="login_div_sign_up" :class="{sign_choosed:isSign,sign_normal:!isSign}" @click="choosed_sign">注册</div>
        <div id="login_div_login" :class="{login_choosed:isLogin,login_normal:!isLogin}" @click="choosed_login">登录</div>
      </div>
      <div id="login_div_content" :class="{login_show:show_login}">
        <div id="seg"></div>
        <label for="username">用户名:</label><br> <input type="text" id="username" v-model="loginForm.username"><br>
        <label for="password">密码:</label><br> <input type="text" id="password" v-model="loginForm.password"><br>
        <button @click="login">登录</button>
      </div>
      <div id="sign_div_content" :class="{sign_show:show_sign}">
        <div id="seg"></div>
        <label for="sign_username">*用户名:</label><br> <input type="text" id="sign_username" v-model="signUpForm.username"><br>
        <label for="sign_idcard">*身份证号:</label><br> <input type="text" id="sign_idcard" v-model="signUpForm.idcard"><br>
        <label for="sign_password">*密码:</label><br> <input type="text" id="sign_password" v-model="signUpForm.password"><br>
        <label for="confpassword">*确认密码:</label><br> <input type="text" id="confpassword" v-model="signUpForm.confPassWord"><br>
        <button  @click="sign_up">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import {ElNotification} from "element-plus";

export default {
  name: "LoginPage",
  data() {
    return {
      loginForm: {
        username: 'pje',
        password: 'lw1234'
      },
      signUpForm:{
        username:'',
        idcard: '',
        password:'',
        confPassWord:'',
      },
      isLogin:true,
      isSign:false,
      show_sign:true,
      show_login:false
    }
  },
  methods: {
    login() {
      this.$api.login.login("/login", this.loginForm)
          .then(res => {
            sessionStorage.setItem("token",res.token);
            this.$api.menu.findNavTree("/menu/findNavTree",{userName:this.loginForm.username})
                .then(res => {
                  console.log("当前用户的菜单：",res);

                  //commit是调mutations的方法
                  // this.$store.commit('setNavTree',res);

                  //dispatch调的是actions的方法
                  // this.$store.dispatch('setNavTree',res);//载荷形式的分发
                  this.$store.dispatch({
                    type: 'setNavTree',
                    data: res
                  })//对象形式的分发
                })
            //跳转页面之前要获取当前用户可以访问的菜单
            this.$router.push("/index");
          }).catch(err => {
        console.log(err);
        this.$router.push("/");
      })
    },
    choosed_sign(){
      this.isSign=true;
      this.isLogin=false;
      this.show_login=true;
      this.show_sign=false
    },
    choosed_login(){
      this.isSign=false;
      this.isLogin=true;
      this.show_login=false;
      this.show_sign=true
    },
    sign_up(){
      if (this.signUpForm.password!==this.signUpForm.confPassWord){
        ElNotification.warning({
          title: '警告',
          message: '两次输入的密码不一致，请重新输入',
          showClose: true,
        })
      }else {
        this.loginForm.username=this.signUpForm.username;
        this.loginForm.password=this.signUpForm.password;
        this.$api.signUp.signUp('/signUp',this.loginForm);
      }
    },
  }
}
</script>

<style scoped>
#bg{
  position: absolute;
  top: 0;
  background-image: url("../resources/loginbg.jpg") ;
  background-size: 100%;
  height: 100%;
  width: 100%;
}
#login_div{
  margin-top: 100px;
  margin-left: 65%;
  width: 32%;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  opacity: 0.95;
}
#login_div_head{
  height: 55px;
  background-color: black;
  border-radius: 10px 10px 0 0;
  color: white;
  font-size: 17px;
  font-weight: bolder;
  text-align: center;
  line-height: 60px;
}
#login_div_choose{
  background-color: white;
  height: 60px;
  width: 100%;
}
.sign_normal{
  position: absolute;
  height: 40px;
  width: 7%;
  margin-top: 10px;
  background-color: white;
  margin-left: 8%;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  font-weight: bold;
}
.login_normal{
  position: absolute;
  height: 40px;
  width: 7%;
  margin-top: 10px;
  background-color: white;
  margin-left: 17%;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  font-weight: bold;
}
#login_div_login:hover{
  position: absolute;
  height: 40px;
  width: 7%;
  margin-top: 10px;
  background-color: rgb(247,247,247);
  margin-left: 17%;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  font-weight: bold;
}
#login_div_sign_up:hover{
  position: absolute;
  height: 40px;
  width: 7%;
  margin-top: 10px;
  background-color: rgb(247,247,247);
  margin-left: 8%;
  text-align: center;
  line-height: 40px;
  cursor: pointer ;
  font-weight: bold;
}
#seg{
  background-color: rgb(206,206,210);
  width: 52%;
  height: 1px;
  margin-left: 25%;
  margin-bottom: 5px;
}
label{
  margin-left: 27%;
  font-weight: bold;
}
input{
  margin-left: 27%;
  margin-top: 5px;
  width: 45%;
  height: 25px;
  border-radius: 7px;
  border: 1px solid rgb(206,206,210);
  margin-bottom: 5px;
}
button{
  margin-left: 27%;
  width: 46%;
  height: 40px;
  background-color: rgb(0,171,107);
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
}
.login_choosed{
  position: absolute;
  height: 40px;
  width: 7%;
  margin-top: 10px;
  margin-left: 17%;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  color: rgb(0,171,107);
  border-bottom: 4px solid rgb(0, 171, 107);
  font-weight: bold;
}
.sign_choosed{
  position: absolute;
  height: 40px;
  width: 7%;
  margin-top: 10px;
  margin-left: 8%;
  text-align: center;
  line-height: 40px;
  cursor: pointer ;
  color: rgb(0,171,107);
  border-bottom: 4px solid rgb(0, 171, 107);
  font-weight: bold;
}
.sign_show{
  display: none;
}
.login_show{
  display: none;
}
</style>