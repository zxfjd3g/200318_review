## 引入

### 从JS基础(ES)从JS Web API

- JS基础知识, 规定基础语法(ECMA 262标准)
- JS Web API, 网页操作的API (W3C标准)
- 前者是后者的基础, 两者结合才能真正实际应用

### JS基础知识

- 变量的类型和计算
- 原型和原型链
- 作用域, 作用域链和闭包
- 异步
- ES6+新语法

### JS Web API

- DOM
- BOM
- 事件
- ajax
- 存储

## DOM

### 题目

- DOM是哪种数据结构
- DOM操作的常用API
- attribute与property的区别

### 知识点

- DOM本质
- DOM节点操作
- DOM结构操作
- DOM性能

### DOM节点操作

- 获取DOM节点
- attribute
- property

### property与attr的区别

- property: 标签/元素对象的属性, 只能在内存输出查看
- attribute: 标签/元素的'特性', 在浏览器的Elements中能查看到
- 二者一些内置属性更新是同步的, 如id,name,class&className
- 两者都有可能引起DOM重新渲染, 一般我们都操作property
- 深入研究: https://blog.csdn.net/tja8n2m2g46omtf/article/details/80523470 (少数同学合适)

### DOM结构操作

- 新增/插入节点
- 更新节点
- 删除子元素

### DOM性能

- DOM操作非常 "昂贵", 避免频繁DOM操作
- 对DOM查询操作做缓存
- 将频繁操作改为一次性操作

## BOM

### 题目

- vue路由和React路由的原理 (高频)
  - hash路由: 利用的window的location对象的hash语法
    - 读取hash值: location.hash
    - 写hash值: location.hash = '#/xxx'
    - 监视hash值变化: onhashChange =  () => {  读取最新的hash值, 查找对应的路由组件, 显示}
  - history路由: 利用的window的history对象的pushState()/replaceState() (H5)
    - 路由路径变化
    - 历史记录变化
    - 可以携带state数据
    - 缺少: state变化的监视  ===> 路由库内部封装

### 知识点

- navigation
- screen
- location
- history

## 事件

### 题目

- 编写一个通用的事件监听函数
- 描述事件冒泡的流程
- 无限下拉的图片列表, 并监听每个图片的点击



### 知识点

- 绑定事件监听
- 事件冒泡
- 事件代理/委托/委派



### 事件冒泡的流程

- 基于DOM树形结构
- 事件在目标元素上处理后, 会内向外(上)逐层传递
- 应用场景: 事件代理



### 事件委托

- 减少内存占用
- 代码简洁
- 不要滥用

### 封装一个绑带事件监听的函数

```js
/* 
绑定事件监听的通用函数(不带委托)
*/
function bindEvent1 (ele, type, fn) {
  ele.addEventListener(type, fn)
}

/* 
绑定事件监听的通用函数(带委托)
*/
function bindEvent2(ele, type, fn, selector) {

  ele.addEventListener(type, event => {
    // 得到发生事件的目标
    const target = event.target
    if (selector) {
      // 如果元素被指定的选择器字符串选择, 返回true; 否则返回false。
      if (target.matches(selector)) {
        // 委托绑定调用
        fn.call(target, event)
      } else {

      }
    } else {
      // 普通绑定调用
      // fn.call(target, event)
      fn.call(ele, event)
    }
  })
}
```



## ajax

### 题目

- 手写一个简易的ajax
- 跨域的常用解决方案



### 知识点

- XMLHttpRequest
- 状态码
- 跨域: 同源策略, 跨域解决方案



### xhr.status

- 2XX: 表示成功处理请求, 如200, 201
- 3XX: 需要生定向, 浏览器直接跳转, 如301, 302, 304
- 4XX: 客户端请求错误, 如:  404, 403
- 5XX: 服务器端错误, 如: 500

### 区别ajax请求与一般HTTP请求

- ajax请求是一种特别的http请求
- 对服务器端来说, 没有任何区别, 区别在浏览器端
- 浏览器端发请求: 只有XHR或fetch发出的才是ajax请求, 其它所有的都是非ajax请求
- 浏览器端接收到响应
  - 一般请求: 浏览器一般会直接显示响应体数据, 也就是我们常说的刷新/跳转页面
  - ajax请求: 浏览器不会对界面进行任何更新操作, 只是调用监视的回调函数并传入响应相关数据

### 封装一个简易的ajax异步请求函数

```js
/* 
xhr + promise 封装一个异步ajax请求的通用函数  简洁版
*/
function ajax(url) {
  return new Promise((resolve, reject) => {
    // 创建一个XHR对象
    const xhr = new XMLHttpRequest()
    // 初始化一个异步请求(还没发请求)
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
      // 如果状态值不为4, 直接结束(请求还没有结束)
      if (request.readyState !== 4) {
        return
      }
      // 如果响应码在200~~299之间, 说明请求都是成功的
      if (request.status>=200 && request.status<300) {
        // 指定promise成功及结果值
        resolve(JSON.parse(xhr.responseText))
      } else { // 请求失败了
        // 指定promise失败及结果值
        reject(new Error('request error staus '+ request.status))
      }
    }
    xhr.send(null)
  })
}

/* 
xhr + promise 封装一个异步ajax请求的通用函数  加强版
  返回值: promise
  参数为配置对象
    url: 请求地址
    params: 包含所有query请求参数的对象
    data: 包含所有请求体参数数据的对象
    method: 为请求方式
*/
function axios({url, params={}, data={}, method='GET'}) {
  // 返回一个promise对象
  return new Promise((resolve, reject) => {
    // 创建一个XHR对象
    const request = new XMLHttpRequest()
    
    // 根据params拼接query参数
    let queryStr = Object.keys(params).reduce((pre, key) => {
      pre += `&${key}=${params[key]}`
      return pre
    }, '')
    if (queryStr.length>0) {
      queryStr = queryStr.substring(1)
      url += '?' + queryStr
    }
    // 请求方式转换为大写
    method = method.toUpperCase()
    
    // 初始化一个异步请求(还没发请求)
    request.open(method, url, true)
    // 绑定请求状态改变的监听
    request.onreadystatechange = function () {
      // 如果状态值不为4, 直接结束(请求还没有结束)
      if (request.readyState !== 4) {
        return
      }
      // 如果响应码在200~~299之间, 说明请求都是成功的
      if (request.status>=200 && request.status<300) {
        // 准备响应数据对象
        const responseData = {
          data: JSON.parse(request.response),
          status: request.status,
          statusText: request.statusText
        }
        // 指定promise成功及结果值
        resolve(responseData)
      } else { // 请求失败了
        // 指定promise失败及结果值
        const error = new Error('request error staus '+ request.status)
        reject(error)
      }
    }

    // 如果是post/put请求
    if (method==='POST' || method==='PUT' || method==='DELETE') {
      // 设置请求头: 使请求体参数以json形式传递
      request.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
      // 包含所有请求参数的对象转换为json格式
      const dataJson = JSON.stringify(data)
      // 发送请求, 指定请求体数据
      request.send(dataJson)
    } else {// GET请求
      // 发送请求
      request.send(null)
    }
  })
}
```



### 跨域

- 什么是跨域(同源策略)
- JSONP
- CORS
- 代理服务器



### 同源策略

- ajax请求时, 浏览器要求当前网页和Server必须同源(安全)
- 同源: 协议, 域名, 端口, 三者都相同



### 加载image/css/js可无视同源策略

- <img src="跨域的图片地址"/>

- <link href="跨域的css地址"/>

- <script src="跨域的js地址"/>

### JSONP原理

- 前台:

  - <script src="目标url?callback=fn" />

  - 接收响应数据的函数: function fn (data) {}

- 后台
  - 处理请求, 产生需要返回的数据data
  - 读取callback请求参数得到前台处理响应数据的函数名fn
  - 返回执行函数fn的js代码: fn && fn(data)
  
- 不足

  - 只能处理GET请求
  - 每个请求在后台都要做处理, 麻烦

### CORS原理

- 后台: 返回允许浏览器在某个其它域上发送跨域请求的相关响应头

```js
// 使用cors, 允许跨域, 且允许携带跨域cookie
app.use(function (req, res, next) {
  console.log('----')
  // 允许跨域的地址
  res.header('Access-Control-Allow-Origin', 'http://localhost:5500')  // 不能是*
  // 允许携带凭证(也就是cookie)
  res.header('Access-Control-Allow-Credentials', 'true')
  // 允许跨域的请求头
  res.set("Access-Control-Allow-Headers", "Content-Type")
  // 放行
  next()
})
```

- 前台: 不需要做特别任何处理

```js
axios.defaults.withCredentials = true // 允许携带cookie
```



### 代理服务器

- 开发环境: 利用webpack-dev-server中的http-proxy-middle  进行正向代理
  - vue脚手架项目
  - react脚手架项目
  - 自定义webpack配置
  - 直接使用http-proxy-middle配置
- 生产环境: 利用nigix  进行反向代理


### 各种ajax请求库

- jQuery
- fetch
- axios



## 前台数据存储



### 存储方式

- cookie
- sessionStorage
- localStorage

### cookie

- 本身用于浏览器和Server通讯
- 被 "借用" 到本地存储
- 可用document.cookie读取或保存
- 可以利用cookies工具库简化编码



### cookie的缺点

- 存储大小有限, 最大4KB
- http请求时会自动发送给服务器, 增加了请求的数据量
- 原生的操作语法不太方便操作cookie
- 浏览器可以设置禁用



### localStoarge与sessionStorage

- 相同点:
  - 纯浏览器端存储, 大小不受限制, 请求时不会自动携带
  - 只能保存文本, 如果是对象或数组, 需要转换为JSON
  - API相同:
    - setItem(key, value)
    - getItem(key, value)
    - removeitem(key, value)
  - 浏览器不能禁用
- 不同点:
  - localStorage保存在本地文件中, 除非编码或手动删除, 否则一直存在
  - sessonStorage数据保存在当前会话内存中, 关闭浏览器则清除



### 区别cookie 与 localStorage和sessionStorage

- 容量
- 请求时是否自动携带
- API易用性
- 浏览器是否可禁用

