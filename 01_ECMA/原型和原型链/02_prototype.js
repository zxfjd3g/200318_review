
function Fn(params) {
  function fn2(params) {
      
  }
}
/* Fn.prototype = {
  test () {}
} */
const f = new Fn()

/* Fn.prototype.test = function () {

} */

Fn.prototype = {
  test () {}
}

f.test()

/* 
执行函数定义: 
  创建函数对象
  创建空的object实例对象, 赋值给函数对象的prototype属性
  const temp = new Function()
  temp.prototype = new Object()
  temp.prototype.constructor = temp
  Fn = temp
*/

console.dir(Object)
console.dir(Function)

/* 
console.log(a.b)
查找a(一个变量), 沿着作用链查找
  没找到: 报错: a is not defined
  找到了: 得到它的值
    如果是null/undefined, 报错: can not read property b of null/undefined
    如果是其它基本类型: 创建对应的包装类型的实例对象, 接下来准备查找b
    如果是引用类型(地址值): 找到对应的对象,准备查找b

    查找b属性的流程: 先在自身上找
      找到了, 直接返回它的值
      找不到, 沿着原型链查找
        没找到, 返回undefined
        找到了, 返回它的值
*/