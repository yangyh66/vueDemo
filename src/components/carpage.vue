<template>
<div>
  购物车页面
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

<style scoped>

</style>
