<template>
  <div id="app">
    <mymenu></mymenu>
    <router-view/>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import mymenu from "./components/menu.vue"

export default {
  name: 'App',
  components:{
    mymenu
  },

  created(){
      if(localStorage.getItem('token')){
          this.change(true)
      }
  },
  methods: {
    ...mapMutations({
      change: 'changeLoginStatus'
    }),
  }
}
</script>

<style>

</style>
