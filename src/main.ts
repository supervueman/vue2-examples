import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from './plugins'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/styles/index.scss'

const app = createApp(App)

app
  .use(axios)
  .use(router)
  .use(ElementPlus)
  .use(createPinia())
  .mount('#app')