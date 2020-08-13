import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui"

import Clipboard from "clipboard";
Vue.prototype.$clipboard = Clipboard

require("./utils/http")

Vue.config.productionTip = false
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css';
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')