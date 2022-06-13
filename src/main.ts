import { createApp } from 'vue'
import App from './App.vue'
import axios from './plugins'

const app = createApp(App)

app.use(axios)

app.mount('#app')