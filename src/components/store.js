import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        owner:'lzl'
    },
    mutations:{
        newOwner(state,msg){
            state.owner=msg
        }
    }
});
export default store;