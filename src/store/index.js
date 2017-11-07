import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import personMd from './person/person'
export default new Vuex.Store({
  modules: {
    personMd
  }
})
