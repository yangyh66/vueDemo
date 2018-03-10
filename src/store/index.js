/**
 * Created by PC on 2018/3/10.
 */
export default {
  state: {
    isLogin: false,
    lastRoute: null
  },
  mutations: {
    changeLoginStatus(state, isLogin) {
      state.isLogin = isLogin;
    },
    rememberLastRouter(state, name) {
      state.lastRoute = name
    }
  }
}
