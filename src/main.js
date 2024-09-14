import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/style.css'
import '@/assets/styles/reset.css'
import 'tdesign-vue-next/es/style/index.css'
import '@/assets/styles/theme.css'
import '@/assets/styles/styleVariables.css'
import '@/assets/styles/base.css'
import '@/assets/font/iconfont.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
