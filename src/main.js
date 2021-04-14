import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
import {Button,Select} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
//Vue.use(ElementUI);
//test

Vue.component('button.ui',Button)
Vue.component('Select.ui',Select)


new Vue({
  render: h => h(App),
}).$mount('#app')
