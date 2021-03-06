import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 全局变量
  state: {
    username: undefined,
    userrole:undefined,
  },
  // 修改全局变量必须通过mutations中的方法
  // mutations只能采用同步方法
  mutations: {
    login (state, para) {
      state.username = para.username,
        state.userrole = para.userrole
    },
    logout (state) {
      state.username = undefined,
        state.userrole = undefined
    }
  },
  // 异步方法用actions
  // actions不能直接修改全局变量，需要调用commit方法来触发mutation中的方法
  actions: {
    login (context, para) {
      context.commit('login', para)
    },
    logout (context) {
      context.commit('logout')
    }
  }
})

export default store
