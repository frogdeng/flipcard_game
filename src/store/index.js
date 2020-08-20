import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUserLoggedIn: false, // 是否登入
    userPicture: '', // 會員照片
    userName: '', // 會員名稱
    userUid: '', // 會員 firebase 的 uid
  },
  mutations: {
    setUserLoggedIn: (state, payload) => {
      state.isUserLoggedIn = true;
      state.userPicture = payload.userPicture || "https://bulma.io/images/placeholders/128x128.png";
      state.userName =payload.userName;
      state.userUid = payload.userUid;
  },
  },
  actions: {
  },
  modules: {
  }
})
