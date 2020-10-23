import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入svg样式
import './assets/svg/iconfont'
import './assets/svg/index.css'
import ElementUI from 'element-ui';
import DreamUI from 'dream-vue-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'dream-vue-ui/dist/dream-vue-ui.css'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(DreamUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
