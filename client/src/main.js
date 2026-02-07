import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate) // เรียกใช้ plugin เก็บ state ลง local storage

app.use(pinia)
app.use(router)

app.mount('#app')

