import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(HelloWorld),
}).$mount('#app');
