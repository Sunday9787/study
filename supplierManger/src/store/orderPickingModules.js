/*
* @Author: Edward
 * @Date: 2017-12-04 23:12:01
 * @Last Modified by: Edward
 * @Email: 809537981@qq.com
 * @Last Modified time: 2017-12-04 23:16:31
 *
 * 订单打包模块
 *
 */

export default {
  namespaced: true,
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
      const stateUser = state.orderPicking.boxPickingUser.user;
      Payload.forEach((value, index) => {
        if (stateUser[index]) {
          if (stateUser[index].userID === value.id && stateUser[index].name !== value.name) {
            stateUser[index].name = value.name;
          }
        } else if (value.name) {
          stateUser.push({
            name: value.name,
            userID: value.id,
            boxNumber: [
              { number: null, checked: false },
            ],
          });
        }
      });
    },
    orderPickingClearPickUser(state) {
      state.orderPicking.boxPickingUser.user = [];
    },
  },
  actions: {
    clearPickUser({ commit }) {
      commit('orderPickingClearPickUser');
    },
  },
};
