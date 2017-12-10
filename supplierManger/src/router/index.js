import Vue from 'vue';
import Router from 'vue-router';

import orderProcess from '../components/order/orderProcess';
import BasicInformation from '../components/BasicInformation/BasicInformation';
import ProductEditor from '../components/BasicInformation/ProductEditor';

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
    {
      path: '/BasicInformation',
      name: 'BasicInformation',
      component: BasicInformation,
      redirect: '/BasicInformation/ProductEditor',
      children: [
        {
          path: 'ProductEditor',
          name: 'ProductEditor',
          component: ProductEditor,
        },
      ],
    },
  ],
});
