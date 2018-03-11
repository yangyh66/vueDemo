<template>
  <div class="listBox">
    <ul>
      <li>
        <ul>
          <li>图片</li>
          <li>名称</li>
          <li>单价</li>
          <li>数量</li>
        </ul>
      </li>
      <li>
        <row :imgsrc="item.imgSrc" :name="item.name" :price="item.price" :num="item.num" v-for="(item,index) in goods" :key="index" :myFlag="false" :index="index"></row>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import row from './row.vue'
  export default{
    name: 'carPage',
    components:{row},
    data(){
        return{
            flag:true
        }
    },
    computed:{
      ...mapState({
        goods:(state) => state.goods
      })
    }
  }
</script>

<style scoped lang="scss">
  li {
    list-style: none;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  ul {
    li {
      ul {
        overflow: hidden;
        width: 100%;
        background: #d8d715;
        li {
          float: left;
          width: 20%;
          text-align: center;
        }
      }
    }
  }
</style>
