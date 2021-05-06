import BaseComponent from './BaseComponent.vue'
import BaseDialog from './BaseDialog.vue'
const globalComponent = {
  install (Vue) {
    Vue.component('BaseComponent', BaseComponent)
    Vue.component('BaseDialog', BaseDialog)
  }
}
export default globalComponent
