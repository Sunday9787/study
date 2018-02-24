import Vue from 'vue';
import Router from 'vue-router';

// import orderProcess from '../components/order/orderProcess';
// import BasicInformation from '../components/BasicInformation/index';
// import ProductEditor from '../components/BasicInformation/ProductEditor';

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
      component: () => import('../components/order/orderProcess'),
    },
    {
      path: '/BasicInformation',
      name: 'BasicInformation',
      component: () => import('../components/BasicInformation/index'),
      redirect: '/BasicInformation/ProductEditor',
      children: [
        {
          path: 'ProductEditor',
          name: 'ProductEditor',
          component: () => import('../components/BasicInformation/ProductEditor'),
        },
      ],
    },
  ],
});
