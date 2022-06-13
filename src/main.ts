import { createApp } from 'vue'
import App from './App.vue'
import axios from './plugins'
import router from './router'

const app = createApp(App)

app.use(axios)
app.use(router)

app.mount('#app')