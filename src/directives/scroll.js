export default function (Vue) {
  // 传进来的value为要减去的下面的值
  Vue.directive('scroll', {
    bind (el, bind, vnode) {
      let func = () => {
        bind.def.runs(el, bind)
      }
      el.style.overflowY = 'auto'
      el.style.overflowX = 'hidden'
      window.addEventListener('resize', func)
      el.style.height = window.innerHeight - bind.value + 'px'
    },
    inserted (el, bind, vnode) {},
    update (el, bind, vnode) {
      el.style.height = window.innerHeight - bind.value + 'px'
    },
    unbind (el, bind, vnode) {
      window.removeEventListener('resize', bind.def.runs)
    },
    runs (el, bind) {
      el.style.height = window.innerHeight - bind.value + 'px'
    }
  })
}
