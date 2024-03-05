<template>
  <div>
    <ul class="news-list">
      <li
        v-for="item in listItems"
        class="post"
      >
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>

        <!-- 기타정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>

          <small class="link-text">
            {{ item.time_ago }} by

            <router-link
              v-if="item.user"
              :to="`/user/${item.user}`"
              class="link-text"
            >{{ item.user }}</router-link>

            <a
              v-else
              :href="item.url"
            >
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    listItems (){
      return this.$store.state.list
        // const name = this.$route.name;
        // let list = [];

        // if(name === 'news'){
        //     // vuex 함수 사용
        //     list = this.$store.state.news;
        // } else if(name === 'ask') {
        //     list = this.$store.state.ask;
        // } else if(name === 'jobs') {
        //     list = this.$store.state.jobs;
        // }

        // return list
    },
    //#3
    // ...mapGetters({
    //   askItems : 'fetchedAsk'
    // }),

    // #2
    // ...mapState({
    //   jobs: state => state.jobs
    // })

    // #1
    // ask(){
    //   return this.$store.state.ask;
    // }
  },
 created () {
    // const name = this.$route.name;
    // let actionName = '';

    // if(name === 'news'){
    //    // vuex 함수 사용
    //    actionName = 'FETCH_NEWS';
    // } else if(name === 'ask') {
    //    actionName = 'FETCH_ASK';
    // } else if(name === 'jobs') {
    //    actionName = 'FETCH_JOBS';
    // }

    // this.$store.dispatch(actionName);

    // var vm  = this;
    // fetchNewsList()
    // .then(function(response) {
    //   console.log(response);
    //   vm.users = response.data;
    // })
    // .catch(function(error){
    //   console.log(error);
    // })

    // this? 전역 vs in API호출
    // fetchNewsList()
    // .then(response => this.users = response.data)
    // .catch(error => {
    //   console.log(error)
    // })
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282
}
</style>