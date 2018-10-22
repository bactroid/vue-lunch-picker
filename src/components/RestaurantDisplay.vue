<template>
  <div class="container">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Today, for lunch, I recommend…</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <p class="md-body-2">{{ restaurant }}</p>
      </md-card-content>

      <md-card-actions>
        <md-button v-on:click="$emit('new-restaurant')">Nah. Pick something else.</md-button>
      </md-card-actions>
    </md-card>
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
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .container .md-card {
    width: 400px;
    margin: 4px;
  }
</style>
