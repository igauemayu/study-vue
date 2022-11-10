import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// css/icon
import '@/scss/custom.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


async function init() {
  
  library.add(fas)

  createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
}

init()