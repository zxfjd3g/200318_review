const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

// 新建节点
const newP = document.createElement('p')
newP.innerHTML = 'this is newP'
// 插入节点
div1.appendChild(newP)

// 移动节点
const p1 = document.getElementById('p1')
div2.appendChild(p1)

// 删除div1中的第一个标签
// 方式一
div1.removeChild(div1.children[0])
// 方式二
const firstChildEle = Array.prototype.slice.call(div1.childNodes).find(child => {
  return child.nodeType === 1
})
div1.removeChild(firstChildEle)