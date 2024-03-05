<template>
  <div id="app">
    <tool-bar />  <!--  vscode 에서 제공하는` '케밥'형태로 코딩, ctrl + 클릭 : 컴포넌트로 자동이동 -->
    <transition name="page">
      <router-view />
    </transition>
    <spinner :loading="loadingStatus" />
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components :{
    ToolBar,
    Spinner
  },
  data (){
    return {
      loadingStatus: false,
    };
  },
  created (){
    // bus.$on('start:spinner', () => this.loadingStatus = true);
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  },
  methods: {
    startSpinner (){
      this.loadingStatus = true
    },
    endSpinner (){
      this.loadingStatus = false
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
 color: #34495e;
 text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

/* 라우터 트랜지션 */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
