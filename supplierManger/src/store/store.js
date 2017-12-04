import Vue from 'vue';
import Vuex from 'vuex';

import orderPickingModules from './orderPickingModules';

Vue.use(Vuex);
/* eslint-disable no-new */
export default new Vuex.Store({
  modules: {
    orderPickingModules,
  },
});
