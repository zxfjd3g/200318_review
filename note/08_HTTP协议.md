### 题目

- http常见的状态码有哪些?
- http常见的header有哪些?
- 什么是Restfull API
- 描述一下http的缓存机制(重要)



### HTTP常用请求方式

- GET
- POST
- PUT
- DELETE

### 状态码分类

- 2XX: 表示成功处理请求, 如200, 201
- 3XX: 需要生定向, 浏览器直接跳转, 如301, 302, 304
- 4XX: 客户端请求错误, 如:  404, 403
- 5XX: 服务器端错误, 如: 500



### 常用状态码(面试说)

- 200 成功
- 201 添加数据成功
- 302 重定向到指定地址
- 304 资源未被修改
- 404 资源未找到
- 403 没有权限
- 500 服务器错误



### Restless API 与 Restful API

- Restless API  
  - 传统的API, 把每个url当作一个功能操作      /updateUser
  - 同一个url, 后台只进行CRUD的某一种操作
  - 请求方式不决定请求的CRUD操作
  - 一个请求路径只对应一个操作
  - 一般只有GET/POST
- Restful API 
  - 新式的API, 把每个url当作一个唯一资源   /user/2
  - 同一个url, 可以通过不同类型的请求对后台资源数据进行CRUD四种操作
  - 请求方式来决定了请求在后台进行CRUD的哪种操作
    - GET: 查询
    - POST: 添加
    - PUT: 更新
    - DELETE: 删除
  - 同一个请求路径可以进行多个操作
  - 请求方式会用到GET/POST/PUT/DELETE
- 测试: 可以使用json-server快速搭建模拟的rest api 接口



### 常见的request header

- Accept: application/json  // 浏览器可接收的数据格式
- Host: www.baidu.com  // 服务器主机
- Cookie: BAIDUID=AD3B0FA706E; BIDUPSID=AD3B0FA706;  // 携带的cookie数据
- Content-Type: application/x-www-form-urlencoded 或者 application/json  // 请求体数据类型
- Accept-Encoding: gzip  // 浏览器可接收的压缩算法
- Accept-Languange: zh-CN   // 浏览器可接收的语言

### 常见的response header

- status: 200 // 响应状态码
- server: nginx  //  处理请求的服务器
- Content-Type: application/json;charset=GB2312 // 响应体数据的格式
- Content-Encoding: gzip // 响应体数据压缩算法
- Set-Cookie: customer=huangxp; path=/foo; domain=.ibm.com; // 给浏览器端返回cookie数据
- Connection: keep-alive // 保持连接, 用于发送多个请求
- access-control-allow-origin: https://sports.qq.com  // 允许指定域发跨域请求
- access-control-allow-credentials: true  // 是否允许浏览器携带跨域cookie
- cache-control: max-age=120  // 让浏览缓存多少秒
- cache-control: no-cache  // 让浏览器不要缓存
- expires: Sun, 13 Sep 2020 06:03:39 GMT // 响应失效时间, 如果cache-control指定了max-age, 失效
- date: Sun, 13 Sep 2020 06:01:39 GMT  // 响应创建的日期和时间



### 缓存相关的headers

- Cache-Control
- Expires
- Last-Modified
- If-Modified-Since
- Etag
- If-None-Match



### 理解Http缓存

- 什么是缓存?
  - 在内存或硬盘上保存后面可以复用的
- 为什么需要缓存?
  - 减少了不必要的数据传输，节省带宽
  - 减少服务器的负担，提升网站性能
  - 加快了客户端加载网页的速度
  - 用户体验友好
- 哪些资源可以被缓存?
  - 所有静态资源都可以
  - html / js / css / image / font



### HTTP的2种缓存策略

- 强制缓存
- 协商缓存



### 强制缓存

- Cache-Control
  - 控制强制缓存的逻辑
  - 如何: Cache-Control: max-age=3600
  - 3个值
    - max-age=xxx
    - no-cache
    - no-store
- expires
  - 同为控制缓存过期
  - 优先考虑Cache-Control



### 协商缓存

浏览器端 + 服务器端缓存策略

服务器判断客户端资源与服务器端资源是否相同

一致则返回304(浏览器端使用缓存的), 否则返回200和最新资源



用于协商缓存的资源标识

在Response Headers中, 有2种

Last-Modified 资源的最后修改时间

Etag 资源的唯一标识(一个字符串, 类似人类指纹)



Last-Modified 和 Etag

会优先使用Etag

~~Last-Modifed只能精确到秒级~~

~~如果资源被重复生成了, 而内容不变, 则Etag	更精确~~



### 三种不同刷新操作

- 正常操作
  - 地址栏输入url / 跳转链接 / 前进后退
  - 强制缓存有效, 协商缓存有效
- 手动刷新
  - F5, 点击刷新按钮, 右键菜单刷新
  - 强制缓存失效, 协商缓存有效
- 强制刷新
  - ctrl + F5
  - 强制缓存失效, 协商缓存失效









