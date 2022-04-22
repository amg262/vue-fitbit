import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
// import FontAwesome from "fontawesome"
// import jQuery from "jquery"
// import Chart from "vue-chartjs"
import ChartLegacy from "vue-chartjs/legacy"
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//
// Vue.use(jQuery)
// Vue.use(FontAwesome)

Vue.use(ChartLegacy)
new Vue({
    render: h => h(App),
}).$mount('#app')




