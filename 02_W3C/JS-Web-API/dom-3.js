/* 
需求：给ul添加10个li
*/

const list = document.getElementById('list')

/* 方式一(不好)：循环创建10个li, 依次添加到ul中 */
for (let i = 0; i < 10; i++) {
  const li = document.createElement('li')
  li.innerHTML = `List item ${i}`
  // 将li添加到页面的ul中
  list.appendChild(li)
}

/* 方式二(好)：循环创建10个li, 先添加到fragment中, 再一次性添加到ul中 */
// 创建一个文档片段，此时还没有插入到 DOM 结构中
const frag = document.createDocumentFragment()
for (let j = 0; j < 10; j++) {
  const li = document.createElement('li')
  li.innerHTML = `List item ${j}`
  // 先插入文档片段中
  frag.appendChild(li)
}
// 都完成之后，再统一插入到 DOM 结构中
list.appendChild(frag)