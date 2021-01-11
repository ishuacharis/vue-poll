import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app
.directive('color', {
  mounted(el, binding) {
    const color  = binding.value || 'gray'
    console.log(color)
    el.style.backgroundColor = color
  }
})
.use(router)
.use(store)
.mount('#app')
