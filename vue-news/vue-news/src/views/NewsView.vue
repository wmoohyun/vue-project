<template>
  <div>
    <list-item />
  </div>
</template>

<script>
import ListItem from '../components/listItem.vue';
import ListMixin from '../mixins/ListMixin'
// import bus from '../utils/bus.js';

export default {
  components: {
    ListItem,
  },
  mixins:[ListMixin],
  created (){
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