import vuexAlong from 'vuex-along';

export default {
    state: {
        //全局属性
        navTree:[]
    },
    mutations: {
        //同步：当调用同步方法时，只能等同步方法执行完毕才能执行其他代码
        //赋值
        setNavTree(state,navTree){
            state.navTree = navTree;
            console.log("给navTree赋值",navTree);
        }
    },
    actions: {
        //异步：调用异步方法不需要等待它的返回值，可以同时执行其他代码
        setNavTree(ctx,payload){
            //调用mutations的setNavTree
            ctx.commit(payload.type,payload.data);
        }
    },
    getters: {
        getNavTree(state){
            return state.navTree
        }
    },
    plugins: [vuexAlong({
        name: 'test',
        local: {
            navTree: ["navTree"]//这里双引号的navTree是state里的属性
        }
    })]
}