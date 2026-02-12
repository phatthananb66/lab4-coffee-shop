import { createApp } from 'vue'
<<<<<<< HEAD
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

// ⭐ เพิ่มบรรทัดนี้
import CoffeeHeader from './components/CoffeeHeader.vue'

import './style.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

// ⭐ ลงทะเบียน Global Component
app.component('coffee-header', CoffeeHeader)

app.mount('#app')
=======
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App) // สร้าง App
app.use(router) // ใช้งาน Router
app.mount('#app') // แปะลงไปที่ id="app" ใน index.html    
>>>>>>> d04cf2273d2c40046cb6ce93843f5d32e0abe2d9
