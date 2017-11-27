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
     * @param {Arry} Payload
     */
    orderPickingeditPickUser(state, Payload) {
      console.log(Payload);
      let stateUser = state.orderPicking.boxPickingUser.user;
      Payload.forEach((value, index) => {
        if (stateUser[index]) { 
          if (stateUser[index].userID === value.id && stateUser[index].name !== value.name) {
            stateUser[index].name = value.name;
          }
        } else {
          if( value.name) {
            stateUser.push({
              name: value.name,
              userID: value.id,
              boxNumber: [
                { number: null, checked: false },
              ]
            })
          }
        }
      })
    },
  },
});
