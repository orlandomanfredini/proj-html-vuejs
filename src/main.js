import { createApp } from 'vue'
import './assets/scss/general.scss'

import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faMagnifyingGlass, faPlay, faMusic, faCalendar, faChevronDown} from '@fortawesome/free-solid-svg-icons'

import {faSafari , faSpotify,  faYoutube , faSoundcloud} from '@fortawesome/free-brands-svg-icons'

library.add(faMagnifyingGlass, faPlay, faSafari, faSpotify, faYoutube, faMusic, faSoundcloud, faCalendar, faChevronDown )

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

