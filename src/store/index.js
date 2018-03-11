/**
 * Created by PC on 2018/3/10.
 */
export default {
  state: {
    isLogin: false,
    lastRoute: null,
    goods: []
  },
  mutations: {
    changeLoginStatus(state, isLogin) {
      state.isLogin = isLogin;
    },
    rememberLastRouter(state, name) {
      state.lastRoute = name
    },
    changeGoodsList(state, goods){
      state.goods.push(goods)
    },
    changeGoodsListNumber(state, {number, index}) {
      state.goods[index].num = number
    },
    deleteGoods(statet, index){
      statet.goods.splice(index,1)
    }
  }
}
