import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
import { store } from './store/index.js';
// 어플의 설정의 청사진, 구조도가 눈에 다 보여야하는 페이지.

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
