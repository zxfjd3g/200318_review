/* 
需求: 创建10垂直排列的a标签, 文本任意文本, 链接都指向百度, 点击a标签提示序号, 不跳转
*/
(() => {
  for (var index = 0; index < 10; index++) {
    ((index) => {
      const aEle = document.createElement('a')
      aEle.innerHTML = 'A' + index +'<br>'
      aEle.href = 'http://www.baidu.com'
      aEle.onclick = (e) => {
        e.preventDefault()
        alert(index + 1)
      }
      document.body.appendChild(aEle)
    })(index)
  }
})()

function fn1() {
  var a = 2
  var b = 3
  function fn2() {
    console.log(a)
  }
  return fn2
}
const f = fn1()
