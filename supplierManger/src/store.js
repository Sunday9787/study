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
     * @param {Ooject} Payload
     */
    orderPickingeditPickUser(state, Payload) {
      console.log(Payload);

      let stateUser = state.orderPicking.boxPickingUser.user;

      let editUser = Payload.slice(1, stateUser.length);

      if (Payload.length > stateUser.length) {
        let addUser = Payload.slice(stateUser.length, Payload.length);
        addUser.forEach((value, index) => {
          if (value.name) {
            stateUser.push({
              name: value.name,
              userID: value.id,
              boxNumber: [
                { number: null, checked: false },
              ],
            })
          }
        })
      }
      console.log(addUser);

      editUser.forEach((value, index) => {
        if (editUser[index].name) {
          if (value.userID === stateUser[index].id && value.name !== stateUser[index].name) {
              value.name = stateUser[index].name;
          }
        }
      })
    },
  },
});
