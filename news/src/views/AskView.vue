<template>
  <div>
    <list-item />
  </div>

  <!-- <div>
    <ul class="news-list">
      <li
        v-for="item in askItems"
        class="post"
      >
        <div class="points">
          {{ item.points }}
        </div>

        <div>
          <p class="news-title">
            <router-link :to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>

          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
              :to="`/user/${item.user}`"
              class="link-text"
            >{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div> -->
</template>

<script>
import ListItem from '../components/listItem.vue';
// import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin'

export default {
  components: {
    ListItem
  },
  mixins:[ListMixin],
  // mounted() {
  //   bus.$emit('end:spinner')
  // }

  // created (){
  //   bus.$emit('start:spinner');

  //   setTimeout(() => {
  //    this.$store.dispatch('FETCH_ASK')
  //       .then(() => {
  //         console.log('fetched')
  //         bus.$emit('end:spinner')
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       });
  //   }, 3000)
  // }
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
