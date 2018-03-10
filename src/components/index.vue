<template>
  <div>
    <div class="title">
      <h1>我是首页</h1>
      <car></car>
    </div>
  </div>
</template>

<script>
  import car from "./car.vue"
    export default{
      name:"index",
      components:{car}
    }
</script>

<style scoped lang="scss">
.title{
  margin-top: 200px;
  h1{
    color: red;
    width: 30%;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
