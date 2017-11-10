import Vue from 'vue';
import Router from 'vue-router';

import orderProcess from '../components/order/orderProcess';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/order',
      name: 'order',
      component: orderProcess,
    },
  ],
});
