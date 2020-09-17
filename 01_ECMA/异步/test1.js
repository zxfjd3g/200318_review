/* 
同步回调与异步回调
*/

// 同步执行的回调函数
[1, 3, 5].forEach(item => console.log(item))
console.log('forEach()之后')

// 异步执行的回调函数
setTimeout(() => {
  console.log('setTimeout callback()')
}, 0)
console.log('setTimeout()之后')

// xhr.open(url, 'get', false)
// xhr.send()
// console.log('----')
