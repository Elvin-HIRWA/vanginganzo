import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueNoty from 'vuejs-noty'
import VueProgressBar from 'vue-progressbar'
import DataTable from "@andresouzaabreu/vue-data-table";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

Vue.component("data-table", DataTable);
Vue.use(flatPickr)
Vue.use(VueNoty)
const options = {
  color: 'white',
  failedColor: 'red',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

axios.defaults.baseURL = process.env.VUE_APP_API_URL

axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.use(VueProgressBar, options)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
