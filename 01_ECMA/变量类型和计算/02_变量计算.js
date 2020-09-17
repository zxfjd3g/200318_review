// + 运算
const a1 = 1 + 2 

const a2 = 1 + '2' // '12'
const a3 = true + '2'  // 'true2'
const a4 = null + '2' // 'null2'
const a5 = undefined + '2' // 'undefined2'
const a51 = [] + '2' // '2'
const a52 = {} + '2' // '[object Object]2'

const a6 = true + 2 // 3
const a7 = false + 2  // 2
const a8 = null + 2 // 2
const a9 = undefined + 2 // NaN

const a10 = {} + 2 // '[object Object]2'
const a11 = [] + 2 // '2'

const obj = {}
obj.valueOf = function () {
  return 1
}

console.log(obj + 1) // 2

// == 运算
console.log('1'==1)
console.log(null==null)
console.log(undefined==undefined)
console.log(undefined==null)
console.log(NaN==NaN)
console.log({}=={})
console.log([]==[])
console.log([]==![])
console.log({}==!{})

// 所有的falsely变量, 除此之外都是truly变量
let f = 0
f = NaN
f = ''
f = null
f = undefined

// if判断
if (f) { // 不能进入

}

// &&与||
console.log(0 && 12) // 0
console.log(-1 && 12) 
console.log(12 || 13)
console.log(0 || null)

