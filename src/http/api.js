/*
请求接口汇总模块，聚合所有模块API
 */

import * as login from "@/http/modules/login"
import * as role from "@/http/modules/role"
import * as menu from "@/http/modules/menu"
import * as signUp from "@/http/modules/signUp"

export default{
    login,
    role,
    menu,
    signUp
}