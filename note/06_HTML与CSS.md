## html

### 标签语义化的意义

1. 开发者更容易理解，减少差异化，方便团队开发和维护
2. 机器更容易理解结果（搜索爬虫、方便其他设备解析（读屏幕软件、盲人设备、移动设备）

### 写页面结构应该注意的

1. 尽可能少的使用没有语义的 div 和 span 元素
2. 块级元素和内联元素的嵌套一定要符合 web 标准，比如内联元素就是不能嵌套块级元素

### HTML5 新特性

1. 新的语义化元素：article 、footer 、header 、nav 、section
2. 表单增强，新的表单控件：calendar 、date 、time 、email 、url 、search
3. 新的 API：音频(用于媒介回放的 video 和 audio 元素)、图形（绘图 canvas 元素）
4. 新的 API：离线，通过创建 cache manifest 文件，创建应用程序缓存
5. 新的 API：本地存储，localStorage-没有时间限制的数据存储，sessionStorage-session 数据存储（关闭浏览器窗口数据删除）
6. 新的 API：实时通讯，设备能力

## CSS

### 三栏布局

1. 浮动布局

```html
<section class="layout float">
  <style media="screen">
    .layout.float .left {
      float: left;
      width: 300px;
      background: red;
    }
    .layout.float .center {
      background: yellow;
    }
    .layout.float .right {
      float: right;
      width: 300px;
      background: blue;
    }
  </style>
  <h1>三栏布局</h1>
  <article class="left-right-center">
    <div class="left"></div>
    <div class="right"></div>
    <div class="center">
      <h2>浮动解决方案</h2>
      1.这是三栏布局的浮动解决方案； 2.这是三栏布局的浮动解决方案；
      3.这是三栏布局的浮动解决方案； 4.这是三栏布局的浮动解决方案；
      5.这是三栏布局的浮动解决方案； 6.这是三栏布局的浮动解决方案；
    </div>
  </article>
</section>
```

2. 绝对布局

```html
<section class="layout absolute">
  <style>
    .layout.absolute .left-center-right > div {
      position: absolute;
    }
    .layout.absolute .left {
      left: 0;
      width: 300px;
      background: red;
    }
    .layout.absolute .center {
      left: 300px;
      right: 300px;
      background: yellow;
    }
    .layout.absolute .right {
      right: 0;
      width: 300px;
      background: blue;
    }
  </style>
  <h1>三栏布局</h1>
  <article class="left-center-right">
    <div class="left"></div>
    <div class="center">
      <h2>绝对定位解决方案</h2>
      1.这是三栏布局的浮动解决方案； 2.这是三栏布局的浮动解决方案；
      3.这是三栏布局的浮动解决方案； 4.这是三栏布局的浮动解决方案；
      5.这是三栏布局的浮动解决方案； 6.这是三栏布局的浮动解决方案；
    </div>
    <div class="right"></div>
  </article>
</section>
```

3. flexbox 布局

```html
<section class="layout flexbox">
  <style>
    .layout.flexbox {
      margin-top: 110px;
    }
    .layout.flexbox .left-center-right {
      display: flex;
    }
    .layout.flexbox .left {
      width: 300px;
      background: red;
    }
    .layout.flexbox .center {
      flex: 1;
      background: yellow;
    }
    .layout.flexbox .right {
      width: 300px;
      background: blue;
    }
  </style>
  <h1>三栏布局</h1>
  <article class="left-center-right">
    <div class="left"></div>
    <div class="center">
      <h2>flexbox解决方案</h2>
      1.这是三栏布局的浮动解决方案； 2.这是三栏布局的浮动解决方案；
      3.这是三栏布局的浮动解决方案； 4.这是三栏布局的浮动解决方案；
      5.这是三栏布局的浮动解决方案； 6.这是三栏布局的浮动解决方案；
    </div>
    <div class="right"></div>
  </article>
</section>
```

4. 表格布局

```html
<section class="layout table">
  <style>
    .layout.table .left-center-right {
      width: 100%;
      height: 100px;
      display: table;
    }
    .layout.table .left-center-right > div {
      display: table-cell;
    }
    .layout.table .left {
      width: 300px;
      background: red;
    }
    .layout.table .center {
      background: yellow;
    }
    .layout.table .right {
      width: 300px;
      background: blue;
    }
  </style>
  <h1>三栏布局</h1>
  <article class="left-center-right">
    <div class="left"></div>
    <div class="center">
      <h2>表格布局解决方案</h2>
      1.这是三栏布局的浮动解决方案； 2.这是三栏布局的浮动解决方案；
      3.这是三栏布局的浮动解决方案； 4.这是三栏布局的浮动解决方案；
      5.这是三栏布局的浮动解决方案； 6.这是三栏布局的浮动解决方案；
    </div>
    <div class="right"></div>
  </article>
</section>
```

5. 网格布局

```html
<section class="layout grid">
  <style>
    .layout.grid .left-center-right {
      width: 100%;
      display: grid;
      grid-template-rows: 100px;
      grid-template-columns: 300px auto 300px;
    }
    .layout.grid .left-center-right > div {
    }
    .layout.grid .left {
      width: 300px;
      background: red;
    }
    .layout.grid .center {
      background: yellow;
    }
    .layout.grid .right {
      background: blue;
    }
  </style>
  <h1>三栏布局</h1>
  <article class="left-center-right">
    <div class="left"></div>
    <div class="center">
      <h2>网格布局解决方案</h2>
      1.这是三栏布局的浮动解决方案； 2.这是三栏布局的浮动解决方案；
      3.这是三栏布局的浮动解决方案； 4.这是三栏布局的浮动解决方案；
      5.这是三栏布局的浮动解决方案； 6.这是三栏布局的浮动解决方案；
    </div>
    <div class="right"></div>
  </article>
</section>
```



### 盒模型

页面渲染时，dom 元素所采用的 **布局模型**。可通过`box-sizing`进行设置。根据计算宽高的区域可分为：

- `content-box` (W3C 标准盒模型)
- `border-box` (IE 盒模型)
- `padding-box`
- `margin-box` (浏览器未实现)

### BFC

**块级格式化上下文**，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。

> IE 下为 Layout，可通过 zoom:1 触发

- 触发条件:
  - 根元素
  - `position: absolute/fixed`
  - `display: inline-block / table`
  - `float` 元素
  - `ovevflow` !== `visible`
- 规则:

  - 属于同一个 BFC 的两个相邻 Box 垂直排列
  - 属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
  - BFC 中子元素的 margin box 的左边， 与包含块 (BFC) border box 的左边相接触 (子元素 absolute 除外)
  - BFC 的区域不会与 float 的元素区域重叠
  - 计算 BFC 的高度时，浮动子元素也参与计算 - 文字层不会被浮动层覆盖，环绕于周围

- 应用:
  - 阻止`margin`重叠
  - 可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个`div`都位于同一个 BFC 区域之中)
  - 自适应两栏布局
  - 可以阻止元素被浮动元素覆盖

### 层叠上下文

元素提升为一个比较特殊的图层，在三维空间中 **(z 轴)** 高出普通元素一等。

- 触发条件

  - 根层叠上下文(`html`)
  - `position`
  - css3 属性
  - `flex`
  - `transform`
  - `opacity`
  - `filter`
  - `will-change`
  - `-webkit-overflow-scrolling`

- 层叠等级：层叠上下文在 z 轴上的排序
  - 在同一层叠上下文中，层叠等级才有意义
  - `z-index`的优先级最高

<img width="600" src="https://user-gold-cdn.xitu.io/2019/2/14/168e9d9f3a1d368b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1">

### 居中布局

- 水平居中
  - 行内元素: `text-align: center`
  - 块级元素: `margin: 0 auto`
  - `position: absolute;left: 50%;transform:translateX(-50%)`
  - `flex + justify-content: center`
- 垂直居中
  - `line-height: height`
  - `absolute + transform`
  - `flex + align-items: center` - `table`
- 水平垂直居中
  - 已知元素宽高
    - `position: absolute;top:0;left:0;right:0;bottom:0;margin:auto;`
    - `position: absolute;top:50%;left:50%;margin-left:-100px;margin-top:-100px;`
  - 未知元素宽高
    - `absolute + transform`
    - `flex + justify-content + align-items`

### 选择器优先级

- `!important` > 行内样式 > `#id` > `.class` > `tag` > \* > 继承 > 默认
- 选择器 **从右往左** 解析

### 去除浮动影响，防止父级高度塌陷

- 通过增加尾元素清除浮动
- `:after / <br> : clear: both`
- 创建父级 BFC
- 父级设置高度

### link 与 @import 的区别

- `link`功能较多，可以定义 RSS，定义 Rel 等作用，而`@import`只能用于加载 css
- 当解析到`link`时，页面会同步加载所引的 css，而`@import`所引用的 css 会等到页面加载完才被加载
- `@import`需要 IE5 以上才能使用
- `link`可以使用 js 动态引入，`@import`不行

### CSS 预处理器(Sass/Less/Postcss)

CSS 预处理器的原理: 是将类 CSS 语言通过 **Webpack 编译** 转成浏览器可读的真正 CSS。在这层编译之上，便可以赋予 CSS 更多更强大的功能，常用功能:

- 嵌套
- 变量
- 循环语句
- 条件语句
- 自动前缀
- 单位转换
- mixin 复用

### 注意:

面试中一般不会重点考察该点，一般介绍下自己在实战项目中的经验即可~

