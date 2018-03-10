<template>
  <div>
    <ul>
      <li><img :src="imgsrc" alt=""></li>
      <li>{{name}}</li>
      <li>{{price}}</li>
      <li><input type="number" v-model="myNum" class="num"></li>
      <li>
        <el-button type="primary" plain @click="open">加入购物车</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    name: "row",
    data(){
      return {
        myNum: this.num
      }
    },
    props: {
      name: {
        required: true
      },
      price: {
        required: true
      },
      imgsrc: {
        required: true
      },
      num: {
        default: 1
      }
    },
    watch: {
      myNum(val, oldval){
        if (val < 1) {
          this.myNum = 1
        }
      }
    },
    methods: {
      open() {
        if (this.isLogin) {
          this.$confirm('加入购物车成功，是否立即去结算', '提示', {
            cancelButtonText: '取消',
            confirmButtonText: '确定',
            type: 'success'
          }).then(() => {
              this.$router.push("/car")
          }).catch(() => {

          });
        }else {
          this.$confirm('您尚未登录，是否前去登录', '提示', {
            cancelButtonText: '取消',
            confirmButtonText: '确定',
            type: 'success'
          }).then(() => {
            this.$router.push("/login")
          }).catch(() => {

          });
        }

      }
    },
    computed: {
      ...mapState({
        isLogin: (state) => state.isLogin
      })
    }
  }
</script>

<style scoped lang="scss">
  ul {
    overflow: hidden;
    padding: 0;
    margin: 0;
    li {
      float: left;
      width: 20%;
      text-align: center;
      height: 100px;
      line-height: 100px;
      list-style: none;
      img {
        height: 100%;

      }
    }
  }

</style>
