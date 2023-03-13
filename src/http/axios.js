/*
二次封装axios模块，包含拦截器等信息
 */

import axios from "axios";//这是官方的axios
import config from "@/http/config";

const instance = axios.create({
    baseURL: config.baseUrl,
    timeout: config.timeout,
    headers: config.headers,
})

/*
请求拦截器
 */
instance.interceptors.request.use(
    config => {
        //成功
        let token = sessionStorage.getItem("token");
        if (token){
            config.headers.token = token;
        }
        return config;
    }, err => {
        //失败
        return Promise.reject(err);
    }
)

/*
响应拦截器
 */
instance.interceptors.response.use(
    response => {
        return response.data.data;
    },
    err => {
        console.log(err);
    }
)

export function get(url,params){
    return instance.get(url, {params});
}

export function post(url,params){
    return instance.post(url,params);
}