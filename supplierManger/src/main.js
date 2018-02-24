// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Axios from 'axios';
import VueAxios from 'vue-axios';

import jQuery from 'jquery';
import router from './router';
import store from './store/store';

import Index from './index';
// import Jquery from 'jquery';
// import Layui from '../static/layui/layui';

window.jQuery = jQuery;
window.$ = jQuery;
// window.layui = Layui;

// window.$ = Jquery;
// window.jQuery = $;
Vue.use(VueAxios, Axios);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Index/>',
  components: {
    Index,
  },
});
