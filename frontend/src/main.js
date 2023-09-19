import { createApp } from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css';
import './index.css'
import router from './router/index'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEye } from '@fortawesome/free-solid-svg-icons'
import store from './store'

library.add(faEye)


createApp(App).use(store).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')


