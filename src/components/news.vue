<template>
  <ratingselect @select-type="onSelectType"></ratingselect>
</template>

<script>
  import ratingselect from "./son.vue"
  export default{
    data () {
      return {
        selectType: 0,
      }
    },
    components:{ratingselect},
    methods: {
      onSelectType(type){
        this.selectType = type
        console.log("bbbbb")
        console.log(this.selectType)
      }
    }
  }
</script>

<style scoped>

</style>
