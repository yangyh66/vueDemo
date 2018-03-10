<template>
<div>
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
        <row v-for="(item,index) in  goods" :price="item.price" :name="item.name" :imgsrc="item.imgsrc" :key="index"></row>
    </li>
  </ul>
  <car></car>
</div>
</template>

<script>
  import row from "./row.vue"
  import car from "./car.vue"
    export default{
        name:'list',
      data(){
            return{
                goods:[
                  {
                    price:'17.00',
                    name:"苹果",
                    imgsrc:"/static/image/apple.jpg"
                  },
                  {
                    price:'21.00',
                    name:"香蕉",
                    imgsrc:"/static/image/banana.jpg"
                  },
                  {
                    price:'13.00',
                    name:"橘子",
                    imgsrc:"/static/image/orange.jpg"
                  },
                  {
                    price:'33.00',
                    name:"火龙果",
                    imgsrc:"/static/image/hlg.jpg"
                  }
                ],

            }
      },
      components:{row,car}
    }
</script>

<style scoped lang="scss">
  li{
    list-style: none;
  }
  ul{
    padding: 0;
    margin: 0;
  }
  ul{
    li{
      ul{
        overflow: hidden;
        width: 100%;
        background: #d8d715;
        li{
          float: left;
          width: 20%;
          text-align: center;
        }
      }
    }
  }

</style>
