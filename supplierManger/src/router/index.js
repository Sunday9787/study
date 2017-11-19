import Vue from 'vue';
import Router from 'vue-router';

import orderProcess from '../components/order/orderProcess';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/order',
    },
    {
      path: '/order',
      name: 'order',
      component: orderProcess,
    },
  ],
});
