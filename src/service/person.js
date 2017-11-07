import fetch from '@/config/fetch'

export default {
  personList () {
    return fetch('/sort')
  },
  personDetail (id) {
    return fetch('/find', {
      params: {id: id}
    })
  },
  save (data) {
    return fetch('/savePerson', {
      method: 'post',
      data
    })
  }
}
