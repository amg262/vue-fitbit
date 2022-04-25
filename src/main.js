import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// router setup
//import router from './ro?utes/router';
// plugin setup

import axios from 'axios';
Vue.prototype.$http = axios;
/* eslint-disable no-new */
// new Vue({
//      el: '#app',
//     render: h => h(App),
//     //router
// }.$mount('#app'));
new Vue({
    render: h => h(App),
}).$mount('#app')




