import {post} from "@/http/axios";

export function signUp(url,params){
    return post(url,params);
}