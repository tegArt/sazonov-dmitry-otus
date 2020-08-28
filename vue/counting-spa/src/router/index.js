import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'PageSettings',
    component: () => import(/* webpackChunkName: "pageSettings" */ '../views/PageSettings/PageSettings'),
  },
  {
    path: '/training',
    name: 'PageTraining',
    component: () => import(/* webpackChunkName: "PageTraining" */ '../views/PageTraining/PageTraining'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
