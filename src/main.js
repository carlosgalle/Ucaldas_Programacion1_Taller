import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

  tasks: [
    {name : "ir a clase de prog web 1", selected: false},
    {name : "realizar el taller de prog web 1", selected: true},
    {name : "presetar el taller de rpog web 1", selected: false},
    {name : "presetar el taller de rpog web 2", selected: false},
  ]
methods: {
   addTask()
    let task = {
      name: this.newName,
      selected: false
    }
    this.tasks.push(task);
    this.newName = '';
  }