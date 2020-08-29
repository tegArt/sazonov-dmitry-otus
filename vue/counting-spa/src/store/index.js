import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    startDate: new Date(),
    lastTrainingCount: 0,
    lastTrainingSuccessfullyCount: 0,
    time: 10,
    difficulty: 3,
    isSum: false,
    isSub: false,
    isMult: false,
    isDiv: false,
  },
  mutations: {
    initStore (state) {
      if(localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    },
    setField (state, payload) {
      const hasOwnProperty = Object.prototype.hasOwnProperty;

      if (hasOwnProperty.call(payload, 'field') && hasOwnProperty.call(payload, 'newValue')) {
        state[payload.field] = payload.newValue;
      }
    },
  },
});
