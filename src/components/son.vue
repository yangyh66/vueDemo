<template>
  <div>
    <span @click="select(0, $event)" :class="{'active': selectType===0}">11</span>
    <span @click="select(1, $event)" :class="{'active': selectType===1}">22</span>
    <span @click="select(2, $event)" :class="{'active': selectType===2}">33</span>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        selectType: 0,
      }
    },
    methods: {
      select(type, event) {
        this.selectType = type
        console.log(this.selectType)
        this.$emit('select-type', type)
      }
    }
  }
</script>

<style scoped>
.active{
  color: darkred;
  font-size: 20px;
}
</style>
