import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit('initStore');
  },
  render: h => h(App)
}).$mount('#app');

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});
