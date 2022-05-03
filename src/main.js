import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style/app.scss';
import './assets/style/client.css';

Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


// router setup
//import router from './ro?utes/router';
// plugin setup


Vue.prototype.$http = axios;
/* eslint-disable no-new */
// new Vue({
//      el: '#app',
//     render: h => h(App),
//     //router
// }.$mount('#app'));
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')




