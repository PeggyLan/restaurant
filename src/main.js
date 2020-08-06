import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './style/style.styl'
import VueTinySlider from 'vue-tiny-slider'
import LottiePlayer from 'lottie-player-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHamburger, faMapMarkerAlt, faEnvelopeOpenText, faBookOpen, faNewspaper, faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons'

Vue.use(Vuesax)
Vue.use(VueAxios, axios)
Vue.use(LottiePlayer)
Vue.component('tiny-slider', VueTinySlider)
library.add(faHamburger, faMapMarkerAlt, faEnvelopeOpenText, faBookOpen, faNewspaper, faAngleDown, faCheck)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  components: {
    'tiny-slider': VueTinySlider
  }
}).$mount('#app')
