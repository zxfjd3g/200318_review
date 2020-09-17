const div1 = document.getElementById('div1')
console.dir(div1)

const divList = document.getElementsByTagName('div') // 包含多个元素的伪数组
console.log('divList.length', divList.length)
console.dir(divList)

const containerList = document.getElementsByClassName('container')
console.log('containerList.length', containerList.length)
console.dir(containerList)

const pList = document.querySelectorAll('p')
console.dir(pList)


// // 获取父元素
const p1 = document.querySelector('p')
console.log('parent', p1.parentNode )

// // 获取子元素列表
const div1ChildNodes = div1.childNodes
console.log('children', div1ChildNodes, div1.children)



console.log(div1.getAttribute('class'))

div1.setAttribute('style', 'font-size: 30px')
div1.style.fontSize = '30px'

// // property 形式
p1.style.width = '100px'
console.log(p1.style.width)
// p1.className = 'red' // 使用property
p1.setAttribute('class', 'red') // 使用attribute
console.log(p1.className)
console.log(p1.nodeName)
console.log(p1.nodeType)

// // attribute 形式
p1.setAttribute('data-name', 'myData')
console.log( p1.getAttribute('data-name'), p1.dataset.name)
p1.setAttribute('style', 'font-size: 50px;')
console.log( p1.getAttribute('style'), p1.style.cssText)

// console.log(p1.id, p1.getAttribute('id'))
