import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
/* eslint-disable no-new */
export default new Vuex.Store({
  state: {
    orderPicking: {
      boxPickingUser: {
        user: [
          // { name: '', boxNumber: [] },
        ],
      },
    },
  },
  getters: {
    getAddPickingUser(state) {
      return state.orderPicking.boxPickingUser.user;
    },
  },
  mutations: {
    addPickingUser(state, Payload) {
      state.orderPicking.boxPickingUser.user.push({
        name: Payload,
        boxNumber: [],
      });
    },
    addPickBox(state, Payload) {
      state.orderPicking.boxPickingUser.user.forEach((value) => {
        value.boxNumber.push({ number: Payload, checked: false });
        // console.log(value.number, Payload);
      });
      // console.table(state.orderPicking.boxPickingUser.user);
    },
  },
});
