import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/routers";
import api from "@/http/index";
import store from "@/stroe/index"

//router作为全局插件使用
createApp(App).use(router).use(api).use(store).mount('#app')
