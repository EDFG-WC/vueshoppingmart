import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入全局变量表
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
import TreeTable from 'vue-table-with-tree-grid'
// 导入
Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
