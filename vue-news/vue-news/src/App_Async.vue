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
import axios from 'axios';


export default {
  components :{

  },
  data (){
    return {
    };
  },
  created (){
  },
  methods: {
    loginUser(){
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          if(response.data.id === 1) {
            console.log('사용자가 인증되었습니다.');
            axios.get('https://jsonplaceholder.typicode.com/todos')
              .then(response => {
                this.items = response.data;
              })
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    async loginUser1(){
      try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        if(response.data.id === 1 ){
          console.log('사용자가 인증되었습니다.');
          var list = await axios.get('https://jsonplaceholder.typicode.com/todos')
          this.items = list.data
        }
      } catch (error) {
        console.log(error)
      }

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
