<template>
  <div id="app">
    <p><img src="./assets/logo.png"></p>
    <p>
    <router-link to="/">Go to home</router-link>
    <router-link to="/test">Go to test</router-link>    
    </p>
    <router-view></router-view>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<script>
import loading from '@/components/Loading'
import {mapState} from "vuex";
export default {
  components:{
    loading,
  },
  name: 'app',
  data () {
    return {
      
    }
  },
  computed:{
    ...mapState([
        'isLoading'
      ])
  },
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
