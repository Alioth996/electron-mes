import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import './assets/css/index.less'

import 'uno.css'

import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
