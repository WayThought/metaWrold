<template>

  <div id="app">
    <router-view></router-view>
    <!-- <router-link to="/">mine</router-link> -->
  </div>
  <!-- <PcApp v-if="isPc"/>
  <MobileApp v-else/> -->
</template>

<script>
// import MobileApp from './components/MobileApp.vue';
// import PcApp from './components/PcApp.vue';


export default {
  name: 'app',
  components: {
    // MobileApp,
    // PcApp
  },
  computed: {
    isPc() { 
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        return false
      } else {
        return true
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  padding: 0;
  margin: 0;
  }
</style>
