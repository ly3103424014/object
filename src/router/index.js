import Vue from 'vue'
import VueRouter from 'vue-router'
import Treadmill from '../views/Treadmill.vue'
import Machine from '../views/Machine.vue'
import Wobicycle from '../views/Wobicycle.vue'
import Zhibicycle from '../views/Zhibicycle.vue'
import Resort   from '../views/Resort.vue'
import Rowing   from '../views/Rowing.vue'
import Trainer   from '../views/Trainer.vue'
import zuoTrainer   from '../views/zuoTrainer.vue'
import Wutreadmill   from '../views/Wutreadmill.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Treadmill
  },
  {
    path: '/Machine',
    component: Machine
  },
  {
    path: '/Wobicycle',
    component: Wobicycle
  },
  {
    path: '/Zhibicycle',
    component: Zhibicycle
  },
  {
    path: '/Resort',
    component: Resort 
  },
  {
    path: '/Rowing',
    component: Rowing 
  },
  {
    path: '/Trainer',
    component: Trainer 
  },
  {
    path: '/zuoTrainer',
    component: zuoTrainer 
  },
  {
    path: '/Wutreadmill',
    component: Wutreadmill 
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
