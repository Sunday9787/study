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
    orderPickinggetAddPickingUser(state) {
      return state.orderPicking.boxPickingUser.user;
    },
  },
  mutations: {
    /**
     *
     *
     * @param {any} state
     * @param {Object} Payload
     */
    orderPickingaddPickingUser(state, Payload) {
      // console.log(Payload);
      if (Payload.name !== '') {
        state.orderPicking.boxPickingUser.user.push({
          name: Payload.name,
          userID: Payload.id,
          boxNumber: [
            { number: null, checked: false },
          ],
        });
      }
    },
    /**
     *
     *
     * @param {any} state
     * @param {Number} Payload
     */
    orderPickingaddPickBox(state, Payload) {
      // console.log(Payload);
      state.orderPicking.boxPickingUser.user.forEach((value) => {
        /* eslint-disable */
        value.boxNumber[0].number = Payload;
      });
    },
    /**
     *
     *
     * @param {state} state
     * @param {Ooject} Payload
     */
    orderPickingeditPickUser(state, Payload) {
      state.orderPicking.boxPickingUser.user.forEach((value) => {
        // console.log(value.userID === Payload.id);
        // console.log(Payload);
        if (Payload.name !== '') {
          if (value.userID === Payload.id) {
            /* eslint-disable */
            value.name = Payload.name;
          }
        }
      });
    },
  },
});
