import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCircle)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

createApp(App)
    .component('input-control', require('./components/Form/Input.vue').default)
    .mount('#app')