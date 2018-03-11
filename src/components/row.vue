<template>
  <div>
    <ul>
      <li><img :src="imgsrc" alt=""></li>
      <li>{{name}}</li>
      <li>{{price}}</li>
      <li><input type="number" v-model="myNum" class="num" @input="changeNumber($event,index)"></li>
      <li>
        <el-button type="primary" plain @click="open(index)" v-if="myFlag">加入购物车</el-button>
        <div v-else>
          <el-button type="primary" plain>立即结算</el-button>
          <el-button type="primary" plain @click="myDele($el,index)">删除</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';

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
      myFlag: {
        default: true
      },
      num: {
        default: 1,
      },
      index: {}
    },
    watch: {
      myNum(val, oldval){
        if (val < 1) {
          this.myNum = 1
        }
      }
    },
    methods: {
      ...mapMutations({
        change: 'changeGoodsList',
        deletes: 'deleteGoods',
        changeNum: 'changeGoodsListNumber'
      }),
      open(index) {
        if (this.isLogin) {
          this.$confirm('加入购物车成功，是否立即去结算', '提示', {
            cancelButtonText: '取消',
            confirmButtonText: '确定',
            type: 'success'
          }).then(() => {
            this.$router.push("/car")
          }).catch(() => {
          });
          let goods = {
            name: this.name,
            imgSrc: this.imgsrc,
            price: this.price,
            num: this.myNum
          };
          console.log(index)
          if (this.isHave() === true) {
            this.changeNum({number: this.myNum, index})
          } else {
            this.change(goods)
          }

        } else {
          this.$confirm('您尚未登录，是否前去登录', '提示', {
            cancelButtonText: '取消',
            confirmButtonText: '确定',
            type: 'success'
          }).then(() => {
            this.$router.push("/login")
          }).catch(() => {

          });
        }
      },
      myDele(e, index){
        let Name = e.childNodes[0].children[1].textContent;
        this.$confirm('确认删除' + Name + '?', '提示', {
          cancelButtonText: "取消",
          confirmButtonText: "确认",
          type: 'warning'
        }).then(() => {
          this.deletes(index)
        }).catch(() => {

        })
      },
      changeNumber(el, index){
        if (location.href.slice(-4) === 'list') {
        } else {
          this.changeNum({number: el.target.value, index})
        }
      },
      isHave() {
        for (let i = 0; i < this.goods.length; i++) {
          if (this.goods[i].name == this.name && this.goods[i].imgSrc == this.imgsrc && this.goods[i].price == this.price) {
            return true
          } else {
            return false
          }
        }
      }
    },
    computed: {
      ...mapState({
        isLogin: (state) => state.isLogin,
        goods: (state) => state.goods
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
