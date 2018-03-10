<template>
  <div class="box" v-if="isLogin">
    <h2>
      购物车
    </h2>
    <div class="goods" v-for="item in 9">
      <ul>
        <li><img src="/static/image/apple.jpg" alt=""></li>
        <li>苹果</li>
        <li>17.00</li>
        <li><input type="number" v-model="num"></li>
        <li>删除</li>
      </ul>
    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default{
        name:"car",
      data(){
            return{
                num:1
            }
      },
      computed: {
        ...mapState({
          isLogin: (state) => state.isLogin
        })
      },
    }
</script>

<style scoped lang="scss">
.box{
  background: white;
  width: 300px;
  height: 300px;
  border: 1px solid;
  position: fixed;
  right: 50px;
  bottom: 50px;
  overflow-y: scroll;
  h2{
    text-align: center;
  }
  ul{
    overflow: hidden;
    padding: 0;
    li{
      float: left;
      list-style: none;
      width: 18%;
      height: 50px;
      line-height: 50px;
      margin-left: 2%;
      input{
        width: 100%;
      }
      img{
        width: 100%;
      }
    }
  }
}
</style>
