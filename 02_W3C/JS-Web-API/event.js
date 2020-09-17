/* 
绑定事件监听的通用函数(不带委托)
*/
function bindEvent1 (ele, type, fn) {
  ele.addEventListener(type, fn)
}
/* 
绑定事件监听的通用函数(带委托)
*/
function bindEvent2(ele, type, fn, selector) {

  ele.addEventListener(type, event => {
    // 得到发生事件的目标
    const target = event.target
    if (selector) {
      // 如果元素被指定的选择器字符串选择, 返回true; 否则返回false。
      if (target.matches(selector)) {
        // 委托绑定调用
        fn.call(target, event)
      } else {

      }
    } else {
      // 普通绑定调用
      // fn.call(target, event)
      fn.call(ele, event)
    }
  })
}

// 普通绑定
const btn1 = document.getElementById('btn1')
bindEvent1(btn1, 'click', function (event) {
  // console.log(event.target) // 获取触发的元素
  event.preventDefault() // 阻止默认行为
  alert(this.innerHTML)
})

// 代理绑定
const div3 = document.getElementById('div3')
bindEvent2(div3, 'click', function (event) {
  event.preventDefault()
  alert(this.innerHTML)
}, 'a')

const p1 = document.getElementById('p1')
/* 阻止冒泡 */
bindEvent1(p1, 'click', event => {
  event.stopPropagation() 
  console.log('p1 clicked', event.target)
})

const body = document.body
bindEvent1(body, 'click', event => {
  console.log('body clicked', event.target)
})

const div2 = document.getElementById('div2')
bindEvent1(div2, 'click', event => {
  console.log('div2 clicked', event.target)
})