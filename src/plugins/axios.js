'use strict'

import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = process.env.URL || ''
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 1. 编写配置
const config = {
  baseURL: process.env.VUE_APP_URL || '',
  timeout: 60 * 1000 // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}
// 2. 创建axios的实例
const _axios = axios.create(config)
// 2.1 请求拦截:
_axios.interceptors.request.use(
  function (config) {
    // 挂载token:
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 2.2 响应拦截
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

Plugin.install = function (Vue, options) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default { Plugin }
