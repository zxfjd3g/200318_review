// 常见的基本(值)类型
let a1  // undefined
let a2 = null  // 比较特别
let a3 = 3
let a4 = 'abc'
let a5 = true
let a6 = Symbol(1)
// console.log(a1)

// 常见的引用类型
let b1 = {age: 100}
let b2 = [1, 'abc']
function b3() {
  
}

// 基本(值)类型变量赋值
let a = 3
let b = a
b = 4
console.log(a) // 3


// 引用类型变量赋值
let aa = {age: 12}
let bb = aa // 2个引用变量指向同一个对象
bb.age = 13 // 通过一个引用变量修改对象内部的数据, 另一个引用变量也能看到
console.log(aa.age) // ? 13  

bb = {age: 14}  // 让一个引用变量指向一个新的对象, 没有改变原对象内部的数据, 另一个引用变量看到的还是原来对象的数据
console.log(aa.age) // ? 13

function fn(a) {
  // a = {age: 15}
  a.age = 16

}
fn(aa)
console.log(aa.age, bb.age) 

// 识别所有基本类型(null除外)
console.log(typeof a1) // ?
console.log(typeof a2) // ?
console.log(typeof a3) // ?
console.log(typeof a4) // ?
console.log(typeof a5) // ?
console.log(typeof a6) // ?
// 识别函数
console.log(typeof b3) // ? 'function'

// 识别是不是引用类型(不可再细分)
console.log(typeof b1) // ?  'object'
console.log(typeof b2) // ?  'object'

