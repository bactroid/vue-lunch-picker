import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import {
  RESTAURANT_UPDATE,
  RESTAURANT_ERROR,
  RESTAURANT_LOADING
} from './mutation-types'

Vue.use(Vuex)

const getRestaurant = () =>
  axios.get('https://6zkojio7gj.execute-api.us-east-1.amazonaws.com/dev/lunch')

const state = {
  restaurant: ''
}

// mutations should be synchronous code
const mutations = {
  [RESTAURANT_UPDATE] (state, restaurant) {
    state.restaurant = restaurant
  },
  [RESTAURANT_LOADING] (state) {
    state.restaurant = 'Loading...'
  },
  [RESTAURANT_ERROR] (state) {
    state.restaurant = 'ERROR'
  }
}

// actions can have async
const actions = {
  updateRestaurant ({ commit }) {
    commit(RESTAURANT_LOADING)
    getRestaurant()
      .then(resp => {
        commit(RESTAURANT_UPDATE, resp.data.text)
      })
      .catch(() => {
        commit(RESTAURANT_ERROR)
      })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
