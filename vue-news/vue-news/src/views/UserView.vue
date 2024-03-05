<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">
        {{ userInfo.id }}
      </div>
      <span slot="time">
        <!-- template의 내용은 태그 없이 텍스트만 들어간다-->
        {{ 'Joined ' + userInfo.created }},
      </span>
      <span slot="karma">
        {{ userInfo.karma }}
      </span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import bus from '../utils/bus.js';

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo(){
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;

    bus.$emit('start:spinner');

    setTimeout(() => {
      this.$store.dispatch('FETCH_USER', userName)
        .then(() => {
          console.log('fetched @@@')
          bus.$emit('end:spinner')
        })
        .catch((error) => {
          console.log(error)
        });
    }, 3000)
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
  },
}
</script>

<style>

</style>