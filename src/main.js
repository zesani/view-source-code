import Vue from 'vue'
import App from './App'
import hljs from 'highlight.js'

Vue.filter('highlight', function (value, lang) {
  console.log(hljs.highlightAuto(value, [lang]).value)
  return hljs.highlightAuto(value, [lang]).value
})
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
