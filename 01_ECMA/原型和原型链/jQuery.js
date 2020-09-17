/* 
使用class来定义一个JQuery, 它的实例需要一些功能
  jQuery = new JQuery(selector)
  jQuery.each(function(i){ // 遍历内部的元素
    this.src = "test" + i + ".jpg"; // this是当前遍历的元素
  });
  length属性: 得到内部元素的个数
  selector属性: 得到传入的selector
  get(index): 得到对应下标的元素
  [index]: 得到对应下标的元素
  on(type, listener): 绑定事件监听
*/


class JQuery {
  constructor (selector) {
    // 查找selector对应的所有dom元素
    const elements = document.querySelectorAll(selector)
    // 将每个元素以下标为key, 保存到当前实例上
    elements.forEach((element, index) => this[index] = element)
    // 保存selector
    this.selector = selector
    // 保存length属性
    this.length = elements.length
  }

  /* 
  得到指定下标的元素
  */
  get (index) {
    return this[index]
  }

  /* 
  遍历每个元素
  */
  each (callback) {
    for (let index = 0; index < this.length; index++) {
      // 当前遍历的元素
      const element = this[index]
      callback.call(element, index)  // 箭头函数有点问题
    }
  }

  /* 
  给所有内部的元素绑定指定type和listener的事件监听
  */
  on (type, listener) {
    for (let index = 0; index < this.length; index++) {
      // 当前遍历的元素
      const element = this[index]
      // 绑定监听
      element.addEventListener(type, listener)
    }
  }
}

// 提示指定内容
JQuery.prototype.dialog = function (info) {
  alert(info)
}

const jQuery = new JQuery('li')
jQuery.each(function (index) {
  console.log(this)
  console.log(`点击了第${index}个, 内容: ${this.innerHTML}`)
})

jQuery.on('click', function (event) {
  // alert(event.target.innerHTML)
  // alert(this.innerHTML)
  jQuery.dialog(this.innerHTML)
})

console.log(jQuery.get(0))

// 定义一个子类来扩展功能
class MyJQuery extends JQuery {
  addClass () {
    console.log('addClass')
  }
}

const myJQuery = new MyJQuery()
myJQuery.addClass()
