import axios from 'axios'

export default {
  install: (app) => {
    app.provide('plugins', {
      $axios: axios,
    })
  },
}