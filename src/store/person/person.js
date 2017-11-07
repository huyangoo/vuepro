import * as types from './mutation-types'
import {person} from '@/service'
export default {
  namespaced: true,
  state: {
    personList: [],
    person: {}
  },
  getters: {
    persons: state => state.personList
  },
  mutations: {
    [types.GET_ALL_PERSONS] (state, {persons}) {
      state.personList = persons
    },
    [types.GET_PERSON_BY_ID] (state, {person}) {
      state.person = person
    }
  },
  actions: {
    getPersons ({commit}) {
      person.personList().then(data => {
        commit(types.GET_ALL_PERSONS, {persons: data})
      })
    },
    getPerson ({commit}, id) {
      person.personDetail(id).then(data => {
        commit(types.GET_PERSON_BY_ID, {person: data})
      })
    }
  }
}
