<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <RestaurantDisplay :restaurant="choice" v-on:new-restaurant="getRestaurant" />
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState } from 'vuex'
import RestaurantDisplay from './components/RestaurantDisplay.vue'

export default {
  name: 'app',
  computed : mapState ({
    choice: state => state.restaurant
  }),
  methods: {
    getRestaurant () {
      this.$store.dispatch('updateRestaurant')
    }
  },
  created () {
    this.getRestaurant()
  },
  components: {
    RestaurantDisplay
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
