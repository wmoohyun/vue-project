// 이벤트 버스 : 빈 이벤트 객체를 만들어서, 컴포넌트간 데이터 전달을 이벤트 객체를 통해 하는 것
import Vue from 'vue';

export default new Vue();
// ## export 비교
// #1. export const bus = new Vue();    bus.js
//     import { bus } from './bus.js';  App.vue

// #2. export default new Vue();        bus.js
//     import bus from './bus.js';  App.vue      => import 변수 선언 방식이 자유로움.


