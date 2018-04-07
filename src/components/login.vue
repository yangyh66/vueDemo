<template>
  <div class="loginBox">
    <h1>登陆</h1>
    <div class="form">
      <div class="input">
        <input type="text" v-model="user">
      </div>
      <div class="input">
        <input type="password" v-model="password" @keyup.enter="login">
      </div>
      <div class="input">
        <button @click.stop="login">登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex';

  export default{
    name: "login",
    data(){
      return {
        user: "",
        password: ""
      }
    },
    computed: {
      ...mapState({
        lastRoute: (state) => state.lastRoute
      })
    },
    methods: {
      ...mapMutations({
        change: 'changeLoginStatus',
      }),
      login(){
        let self = this;
        $.ajax({
          type: "GET",
          url: "/static/login.json",
          success: function (data) {
            let token = data.token;
            if (self.user == data.user && self.password == data.password) {
              self.change(true);
              localStorage.setItem('token', data.token)
              self.$router.push({name: self.lastRoute})
            }
          }
        });
      }
    },
    mounted: function () {
//      var obj = {a:{b:10},n:2};
//      function deepCopy(obj){
//        if(typeof obj != 'object'){
//          return obj;
//        }
//        var newobj = {};
//        for ( var attr in obj) {
//          newobj[attr] = deepCopy(obj[attr]);
//        }
//        return newobj;
//      }
//      var obj2 = deepCopy(obj);
//      console.log(obj2)
      console.log(0.1+0.2)
    }
  }
</script>

<style scoped lang="scss">
  .loginBox {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    .input {
      margin-top: 20px;
    }
  }
</style>
