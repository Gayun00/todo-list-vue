import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueQueryPlugin)

app.mount('#app')
