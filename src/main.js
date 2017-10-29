// import dependencies
import Vue from 'vue'
import App from './App.vue'

// create new vue application
window.Event = new Vue()

// render new vue application
new Vue({
  el: '#app',
  render: h => h(App)
})
