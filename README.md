## 写在开头
一直想传一个自己最满意的架构，
以前一直用webpack1.X搭建但页面，但是实际运用中，但页面实在是不太能满足
搭建了很多次，今天早上终于成功把webpack1升级到webpack3多页面中这是目前最理想的一次。
## 相关指令

npm install

- ``npm run start`` 开发模式，访问``localhost:3000/index``
- ``npm run server`` 开发模式，访问``localhost:3000/index``
- ``npm run build && cd dist && http-server`` 模拟生产环境，访问``localhost:8080/index``

## 关于我
- 如果对本项目有意见建议，请联系我
- tanshloveg@163.com
- 欢迎大家使用我的模版进行开发

## 关于项目

- common 文件夹为公共文件家 下面有 ./img ./style utit.js文件为公共方法文件
- view 文件夹为页面模块，下面每个页面应该新建一个文件夹，且以index为html生成页面
- template.html 文件为模版页面
- app.js 配置全局样式文件# MultiplePage
