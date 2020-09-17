/* 
需求: 创建10垂直排列的a标签, 文本任意文本, 链接都指向百度, 点击a标签提示序号, 不跳转
*/


// const obj = {
//   fn() {
//     console.log('fn', this)
//   },

//   fn2 () {
//     console.log('fn2', this)
//     return function () {
//       console.log(this)
//     }
//   }
// }

// function fn3() {
  
// }
// console.log(new fn3())


// obj.fn()
// obj.fn.call({})
// const f = obj.fn
// f()  // window
// console.log(f)
// // new f() // new的对象
// // new obj.fn()
// obj.fn2()()  // 

function fn4() {
  console.log(this)
}
const obj2 = {}
const fn5 = fn4.bind(obj2)
fn4()
fn5()

(()=> {
  console.log(this)
})()