import {createStore} from "vuex";
import menu from '@/stroe/modules/menu'

const store = createStore({
    modules:{
        menu
    }
})

export default store