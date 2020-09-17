const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/*
  tree shaking 树摇
    文档: https://webpack.docschina.org/guides/tree-shaking/
    作用：去除无用的代码
    使用：
      1. 使用ES6模块化   使用export分别暴露
      2. 使用webpack production环境
      3. 注意使用babel时，@babel/preset-env会自动转化ES6模块化成commonjs/cjs
          所以不能让其@babel/preset-env转化
          所以：
            // 不要将ES6模块化装化成COMMONJS（cjs）
            modules: false
      4. 在package.json中配置 "sideEffects": false 
        作用：标记所有代码没有副作用（都可以进行tree shaking）
        问题：会把样式文件删除
        解决：
          1. "sideEffects": [
               "*.css", // 样式文件是有副作用（不能进行tree shaking）
               "@babel/polyfill"
             ]  
          2. sideEffects: true
      5. 理解模块的副作用
        side effect(副作用)指在导入时会执行特殊行为的代码，而不是仅仅暴露一个 export 或多个 export。
        举例说明，例如 polyfill，它影响全局作用域，并且通常不提供 export。 比如css
 */

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "./js/built.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: [
          "style-loader",
          "css-loader",
        ],
        sideEffects: true // 当前处理的文件都有副作用，不要进行tree shaking
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  mode: "production",
};
