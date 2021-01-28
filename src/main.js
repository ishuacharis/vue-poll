import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Echo from 'laravel-echo';

require('pusher-js');

const OPTIONS = {
        broadcaster: 'pusher',
        key: process.env.VUE_APP_PUSHER_APP_KEY,
        cluster: process.env.PUSHER_APP_CLUSTER,
        forceTLS: true
};

const echo =   new Echo(OPTIONS);
echo.channel('connection').listen('notifications', (e) => {
  console.log(`Listening to socket`);
  console.log(e)
});
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
