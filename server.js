const express = require('express')

const app = express()

// 使用cors, 允许跨域
app.use(function (req, res, next) {
  console.log('----')
  // res.header('Access-Control-Allow-Origin', '*')
  // res.set("Access-Control-Allow-Headers", "Content-Type")

  // 允许跨域的地址
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
  // 允许携带凭证(也就是cookie)
  res.header('Access-Control-Allow-Credentials', 'true')
  // 允许跨域的请求头
  res.set("Access-Control-Allow-Headers", "Content-Type")
  next()
})



// 能解析urlencode格式的post请求体参数
app.use(express.urlencoded())
// 能解析json格式的请求体参数
app.use(express.json())

app.get('/getUserInfo', (req, res) => {
  const {id, callback} = req.query
  const userInfo = {
    id,
    name: '张三',
    pwd: '123123'
  }

  res.send(`${callback}&&${callback}(${JSON.stringify(userInfo)})`)
})

app.post('/saveUserInfo', (req, res) => {
  console.log('+++')
  const {name, pwd} = req.body
  res.cookie('token', 'atguigu', {maxAge: 1000* 10})
  res.send({
    id: Date.now(),
    name,
    pwd
  })
})

app.listen(4000, () => {
  console.log('server app start on port 4000')
})