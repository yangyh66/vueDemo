import Vue from 'vue'
import Router from 'vue-router'
import { myStore } from '../main';
import index from '@/components/index'
import list from '@/components/list'
import login from '@/components/login'
import car from '@/components/carpage'

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/car',
      name:'car',
      component:car
    },
    {
      path: '/',
      redirect:"index"
    }
  ]
})

router.beforeEach((to, from, next) => {
  myStore.commit('rememberLastRouter', from.name);
  if(localStorage.getItem('token') && to.name === 'login'){
    next(false)
  } else if (!localStorage.getItem('token') && to.name ==="car") {
    next(false)
  } else {
    next()
  }
});
export default router;
