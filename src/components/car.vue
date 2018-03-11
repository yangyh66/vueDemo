<template>
  <div class="box" v-if="isLogin">
    <h2>
      购物车
    </h2>
    <div v-if="goods.length>0">
      <div class="goods" v-for="(item,index) in goods" :key="index" >
        <ul>
          <li><img :src="item.imgSrc" alt=""></li>
          <li>{{item.name}}</li>
          <li>{{item.price}}</li>
          <li><input type="number" :value="item.num" @input="handleChange($event, index)"></li>
          <li @click="nowDeleteGoods(index)">删除</li>
        </ul>
      </div>
    </div>
    <p v-else>暂无数据</p>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default{
    name: "car",
    data(){
      return {

      }
    },
    computed: {
      ...mapState({
        isLogin: (state) => state.isLogin,
        goods: (state) => state.goods
      })
    },

    methods: {
      ...mapMutations(['changeGoodsListNumber','deleteGoods']),
      handleChange(el, index) {
          this.changeGoodsListNumber({ number: el.target.value, index})
      },
      nowDeleteGoods(index){
          this.deleteGoods(index)
      }
    }
  }
</script>

<style scoped lang="scss">
  .box {
    background: white;
    width: 300px;
    height: 300px;
    border: 1px solid;
    position: fixed;
    right: 50px;
    bottom: 50px;
    overflow-y: scroll;
    h2 {
      text-align: center;
    }
    ul {
      overflow: hidden;
      padding: 0;
      li {
        float: left;
        list-style: none;
        width: 18%;
        height: 50px;
        line-height: 50px;
        margin-left: 2%;
        input {
          width: 100%;
        }
        img {
          width: 100%;
        }
      }
    }
  }
</style>
