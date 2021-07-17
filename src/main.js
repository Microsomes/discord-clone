import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'


window.baseAPI="http://178.62.103.80:5000/"
window.socketio="http://localhost:3000"

 

 
createApp(App).use(store).use(router).mount('#app')

