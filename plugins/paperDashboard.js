import Notify from 'vue-notifyjs/dist/vue-notifyjs.min.js'
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import SideBar from '@/components/SidebarPlugin'
import 'es6-promise/auto'

// css assets
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/sass/paper-dashboard.scss'
import '@/assets/css/themify-icons.css'

export default {
  install(Vue) {
    Vue.use(GlobalComponents)
    Vue.use(GlobalDirectives)
    Vue.use(SideBar)
    Vue.use(Notify)
  }
}
