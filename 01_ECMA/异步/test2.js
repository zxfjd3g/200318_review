/* 
需求:
  使用promise封装一个异步加载图片
    成功后, 返回img标签
    失败后, 返回错误
  测试使用
*/
function loadImg(url) {
  return new Promise((resolve, reject) => {
    // 创建一个img标签
    const imgEle = document.createElement('img')
    // 指定src为url
    imgEle.src = url
    // 图片加载成功后, 调用resolve(), 传入img标签
    imgEle.onload = () => {
      resolve(imgEle)
    }
    // 图片加载失败后, 调用reject(), 传入包含提示信息的error
    imgEle.onerror = () => {
      reject(new Error(`加载图片失败: ${url}`))
    }
  })
}

loadImg('https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png')
  .then(imgEle => {
    document.body.appendChild(imgEle)
    // 加载第二张图片
    return loadImg('https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1600506019&t=7037d6558d7092526baaf6e9ed1a7848')
  })
  .then(imgEle => {
    console.log(imgEle)
    document.body.appendChild(imgEle)
  })
  .catch(error => alert(error.message))