<template>
  <div class="hello">
    <h1>What's for lunch today?</h1>
    <p>{{ restaurant }}</p>
    <button v-on:click="$emit('new-restaurant')">Nah. Pick something else.</button>
  </div>
</template>

<script>
export default {
  name: 'RestaurantDisplay',
  props: {
    restaurant: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
