<template>
  <div>
    <ul>
      <li>
        <router-link to="/index">首页</router-link>
      </li>
      <li>
        <router-link to="/list">商品</router-link>
      </li>
      <li>
        <router-link to="/news">测试</router-link>
      </li>
      <li v-if="isLogin">
        <router-link to="/car">购物车</router-link>
      </li>
      <li v-if="!isLogin">
        <router-link to="/login">登陆</router-link>
      </li>
      <li @click="logout" v-if="isLogin">注销</li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default{
    name: "mymenu",
    data() {
      return {}
    },
    computed: {
      ...mapState({
        isLogin: (state) => state.isLogin
      })
    },
    methods: {
      ...mapMutations({
        change: 'changeLoginStatus'
      }),
      logout(){
        localStorage.removeItem("token");
        this.$router.push("/login");
        this.change(false)
      }
    }
  }
</script>

<style scoped lang="scss">
  ul {
    padding: 0 10%;
    overflow: hidden;
    li {
      float: left;
      width: 25%;
      height: 40px;
      text-align: center;
      list-style: none;
      line-height: 40px;
      a {
        color: black;
        text-decoration: none;
        &:hover {
          color: green;
        }
      }
      &:last-child {
        cursor: pointer;
        &:hover {
          color: red;
        }
      }

    }
  }
</style>
