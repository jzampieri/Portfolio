import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import InputControl from './components/Form/Input.vue'

library.add(faCircle)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('input-control', InputControl)

app.mount('#app')
