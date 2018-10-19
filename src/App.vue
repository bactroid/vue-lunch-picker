<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <RestaurantDisplay :restaurant="choice" v-on:new-restaurant="getRestaurant" />
  </div>
</template>

<script>
import axios from 'axios'
import RestaurantDisplay from './components/RestaurantDisplay.vue'

export default {
  name: 'app',
  data: () => {
    return { choice: 'Loading' }
  },
  methods: {
    getRestaurant () {
        this.choice = 'Loading'
        axios.get('https://6zkojio7gj.execute-api.us-east-1.amazonaws.com/dev/lunch')
          .then(x => {
            this.choice = x.data.text
          })
          .catch(() => {
            this.choice = 'ERROR'
          })
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
