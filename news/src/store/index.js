import Vue from 'vue';
import Vuex from 'vuex'; // 상태관리도구, 여러 컴포넌트 간에 공유되는 데이터 속성, !!! 버전 중요 !!!
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
      news: [],
      ask: [],
      jobs: [],
      user: {},
      item: {},
      list: []
    },
    getters:{ // computed와 동일한 속성인데, store에 있는 속성
      fetchedAsk(state) {
        return state.ask;
      },
      fetchedItem(state) {
        return state.item;
      },
    },
    mutations, // 모듈화 진행, 앞뒤같으면 변수 축약가능
    actions  // api 호출 부분
})