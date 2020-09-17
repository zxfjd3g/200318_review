/* 
自定义call/apply/bind
*/
Function.prototype.call = function (obj, ...args) { // arguments
  // console.log(obj, args)

  // 调用当前函数
  // this(...args)  // this就调用call()的函数对象

  // 如果obj是null或者undefined, obj指定为window
  // if (obj===null || obj===undefined) {
  if (obj==null) {  // undefined==null   null和undefined处理一样
    obj = window
  }

  // 给obj添加一个临时方法: 名：tempFn, 值是this
  obj.tempFn = this
  // 调用这个方法
  const result = obj.tempFn(...args)
  // 删除临时方法
  delete obj.tempFn
  // 返回执行结果
  return result
}

Function.prototype.apply = function (obj, args) { 
  if (obj==null) { 
    obj = window
  }
  obj.tempFn = this
  const result = obj.tempFn(...args)
  delete obj.tempFn
  return result
}

/* 
1. 返回一个新函数
2. 新函数内部通过call来调用原本的函数, 指定this为bind的第一个参数  
    ==> 同时将bind指定的参数和调用新函数指定的参数依次传入

    注意: 要想让bind起效果, 必须是调用返回的新函数
*/
Function.prototype.bind = function (obj, ...args) {
  // bind要返回新函数
  return (...args2) => {
    // 调用原来的函数,  函数中的this是obj
    this.call(obj, ...args, ...args2)  // 先传入bind指定的参数, 再传入新函数执行传入的参数
  }
}


// 了解一下
Function.prototype.bind2 = function (obj, ...args) {
  const that = this
  // bind要返回新函数
  return function (...args2) {
    if (this===window) {
      that.call(obj, ...args, ...args2)  // 先传入bind指定的参数, 再传入新函数执行传入的参数
    } else {
      new that(...args, ...args2)
    }
    
  }
}



var m = 2
function fn(a, b) {
  console.log(this, a, b)
  return 1
}

const obj = {m: 3}

// const result = fn.call(obj, 4, 5)
// console.log(result) // 1
// fn.call(undefined, 5, 6)

// fn.apply(obj, [7, 8])

fn.bind(obj)(1, 2)
fn.bind(obj, 3)(1, 2)
fn.bind(obj, 3, 4)(1, 2)

// 了解一下
const fn4 = fn.bind2(obj, 3, 4)
new fn4(1, 2)