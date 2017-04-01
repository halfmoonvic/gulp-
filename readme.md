### 一、 功能说明
1. 可将公共部分如 header 导航放入 include 文件夹，通过语法 `@@include('./include/head.html')` 在所需文件中引入
2. gulp 实现实时刷新，在保存时便编译打包文件并刷新浏览器
3. 精灵图片中，各自单独的图片需放在 `src/images/sprite` 目录下，最后后打包压缩进入`dis/images/`目录下，其 所需css文件已合并进入
common.min.css 文件当中，无需再次引入
4. js 支持部分 ES6 语法，通过 gulp-babel 等插件可将 ES6 语法编译成 ES5 语法，并编译打包进 dist 目录
5. css 支持 less, scss, css 三种格式，文件 需放在 `src/css` 目录下，在 `src/css/css` 目录下为编译打包 的 less、scss 等文件。此处css文件将被加上兼容性后打包进入 `dist/css` 目录，命名为 common.min.css

### 二、注意事项
1. gulp 中的文件监视 需要事先有此种类型的文件
2. 所以在 css 文件夹中，若无此类型的文件，是无法监视的，也就造成第一次运行gulp任务时，文件未编译，未打包。可通过重启 gulp 任务方式解决
3. 文件进行删除时，部分文件使用 gulp-cache 插件导致 其内容仍残留在目标文件中。可通过重启 gulp 任务方式解决
4. 删除文件过多，且已被编译到 dist 目录时，可通过整体删除 dist 目录，并重启 gulp 任务，以使 src 与 dist 两者完全同步
