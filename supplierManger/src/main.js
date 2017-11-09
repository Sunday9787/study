// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Jquery from 'jquery';
import layuijs from '../static//layui//layui.all';

import Index from './index';

import '../static//layui/css/layui.css';
// import axios from 'axios';
// import VueAxios from 'vue-axios';

// Vue.use(axios, VueAxios);
Vue.config.productionTip = false;
window.layui = layuijs;
window.Jquery = Jquery;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Index/>',
  components: {
    Index,
  },
});
