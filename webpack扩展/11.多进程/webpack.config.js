const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/* 
文档: https://www.webpackjs.com/loaders/thread-loader/
把这个 loader 放置在其他 loader 之前， 
放置在这个 loader 之后的 loader 就会在一个单独的 worker 池(worker pool)中运行
每个 worker 都是一个单独的有 600ms 限制的 node.js 进程。同时跨进程的数据交换也会被限制。
请仅在耗时的 loader 上使用

cache-loader 允许缓存以下 loaders 到（默认）磁盘或数据库。
在一些性能开销较大的 loader 之前添加 cache-loader，以便将结果缓存到磁盘里。

*/
module.exports = {
  // entry: "./src/index.js",  // 等价于下面这种
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: undefined,
    filename: "./js/[name].js",
  },
  module: {
    rules: [
      {
        // oneOf数组中的loader一旦匹配上，后面的就不看了
        oneOf: [
          {
            test: /\.css$/,
            include: path.resolve(__dirname, "src"),
            use: ["style-loader", "css-loader"],
            sideEffects: true, // 当前处理的文件都有副作用，不要进行tree shaking
          },
          {
            test: /\.jsx?$/,
            include: path.resolve(__dirname, "src"),
            use: [
              "thread-loader", // 启动多进程打包
              // "cache-loader", // 缓存处理结果到磁盘上
              {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-react"],
                  cacheDirectory: true, // 开启babel缓存
                },
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  mode: "development",
  devServer: {
    open: true,
    port: 9527,
    hot: true,
  },
  resolve: {
    // 自动补全文件扩展名（后缀名）
    extensions: [".js", ".jsx", ".json"],
  },
  devtool: "cheap-module-eval-source-map",
  /*
    开发环境: 为了让首次构建和重新构建速度更快
      cheap-module-eval-source-map
    生产环境: 为了让调试更友好，打包体积更小
      source-map
  */
};
