import axios from 'axios'

export default {
  install: (app, options) => {
    // inject a globally available $translate() method
    // app.config.globalProperties.$axios = axios

    app.provide('$axios', axios)
  }
}