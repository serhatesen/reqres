import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import login from "@/store/login/login";
import users from "@/store/userData/users";
export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
    users
  }
})
