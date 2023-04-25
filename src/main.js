import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist'

createApp(App).use(createPinia().use(piniaPersist)).use(router).mount('#app')
