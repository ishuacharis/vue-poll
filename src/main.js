import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Greeting  from './plugins/hello_plugin';

const app = createApp(App);
const options = {
  greetings: {
    hi: "Sola"
  }
};
app
.use(Greeting, options)
.use(router)
.use(store)
.mount('#app');
