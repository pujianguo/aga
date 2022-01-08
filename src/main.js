import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import globalComponent from './components/common/global.js'

import 'virtual:svg-icons-register'
import 'styles/index.scss'

const app = createApp(App)
app.use(router).use(globalComponent)

router.isReady().then(() => app.mount('#app'))
