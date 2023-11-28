import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { VueQueryPlugin } from '@tanstack/vue-query'

async function enableMocking() {
  const { worker } = await import('./mocks/browser')
  return worker.start()
}

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueQueryPlugin)

enableMocking().then(() => {
  app.mount('#app')
})
