import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 执行初始化 - 页面展示的时候执行，也就是new Vue（）的时候执行 -mpy
  this._init(options)
}
// 实现了众多的实例属性和方法 -mpy
initMixin(Vue) // 扩展了_init 方法
stateMixin(Vue) // 跟数据状态相关的属性和方法  Vue.prototype.$data/$props/$set/$delete/$watch
eventsMixin(Vue) // $on/$emit/$once/$off
lifecycleMixin(Vue) // _update(内部自动更新) / $forceUpdate（外部强制更新） / $destroy（外部强制销毁）
renderMixin(Vue) // $nextTick / _render

export default Vue
