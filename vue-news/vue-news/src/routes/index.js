import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'    // {} 객체로 잡아주면 from 뒤 위치 자동완성 해줌
import JobsView from '../views/JobsView.vue'    // {} 객체로 잡아주면 from 뒤 위치 자동완성 해줌
import AskView  from '../views/AskView.vue'    // {} 객체로 잡아주면 from 뒤 위치 자동완성 해줌
// => 하이오더컴포넌트(CreateListView.js) 사용하면 필요없음.

import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView'
import bus from '../utils/bus'
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // '#' 안붙인 url
    routes: [
      {
        path: '/',
        redirect: '/news'
      },
      {
        // path : url 주소
        path: '/news',
        name:'news',
        // component : url 주소로 갔을 때 표시될 컴포넌트
        component: NewsView,
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST', to.name)
            .then(() => {
                console.log('fetched')
                bus.$emit('end:spinner')
                next()
            })
            .catch((error) => {
                console.log(error)
            });
          // console.log('to', to)
          // console.log('from', from)
          // console.log('next', next)
          // next()
        }
        // component: createListView('NewsView'),
      },
      {
        path: '/ask',
        name:'ask',
        component: AskView,
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST', to.name)
            .then(() => {
                console.log('fetched')
                // bus.$emit('end:spinner')
                next()
            })
            .catch((error) => {
                console.log(error)
            });
        }
        // component: createListView('AskView'),
      },
      {
        path: '/jobs',
        name:'jobs',
        component: JobsView,
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST', to.name)
            .then(() => {
                console.log('fetched')
                // bus.$emit('end:spinner')
                next()
            })
            .catch((error) => {
                console.log(error)
            });
        }
        // component: createListView('JobsView'),
      },
      {
        path: '/user',
        component: UserView,
      },
      {
        path: '/item/:id',
        component: ItemView,
      },
      {
        path: '/user/:id',
        component: UserView,
      }
    ]
})