# 斯品后台开发文档

本文档用于斯品新后台开发说明



## 安装

> 依赖 >=NodeJs 0.12.x 与 >=npm 2.1.x < npm3 环境



### 开发环境构建项目：

由于CORS限制，统一使用 ngnix 做API 转发，配置 ngnix 开发环境。

```

server {
   listen  80;
   server_name  local.admin.sipin.latest.dev.e.sipin.one;
   root  /Users/tofishes/Documents/git/sp-admin/src/jsx/sy;

   location / {
       index  index_dev.html;
    #rewrite /*.json /js/$1 break;
    rewrite /(.+).json http://www.sipin.com/$1.json break;
   }
   location /static-admin/preview {
    alias  /Users/tofishes/Documents/git/sp-admin/dist/static-admin/preview;
   }
   location /static-admin/ {
    alias  /Users/tofishes/Documents/git/sp-admin/public/;
   }
   location /api/ {
    proxy_pass http://admin.sipin.latest.dev.e.sipin.one/api/;
   }

}

```

- 安装依赖

```

$ npm install

```

- 启动项目，可自由修改参数（例如下面例子是开发模式，使用http://admin.sipin.latest.dev.e.sipin.one/api作为 API 服务器，启用监听文件变化并输出到../../dist/static-admin/preview目录）

```

$ node --harmony node_modules/.bin/webpack-tool build:simple --env development --output ../../dist/static-admin/preview  --publicPath /static-admin/preview --apiHost http://admin.sipin.latest.dev.e.sipin.one/api --mode watch

```

### 生产环境构建项目:

```

$ npm install && npm run build

```

更多的构建命令请参考webpack-tool 的文档



## 开发选型

- React 0.14+

- React-route 1.0.3 +

- jQuery  (后续是否可以慢慢移除)

- lodash  (后续使用自己的 lib 库)

- moment (后续使用 PC 正在用的，移至 lib 库)

- lite-flux (后续是否迁移至 redux，它有良好的社区支持)

- Antd - http://ant.design/ （蚂蚁金服开源 react 组件，开发交互规范应参考这里）

- immutable 用于不可变类型数据



## 开发说明

- 所有 js 文件使用 jsx 后缀

- 使用 ECMAScript 6 语法，使用 Babel 编译成 ES5 ，参考： http://es6.ruanyifeng.com/

- 异步 API 使用 promise 封装

- 创建功能目录或文件： ./js/pages/erp/_erp/ 之下。

- 引入功能文件及配置路由：./js/pages/erp/erp.jsx

- 侧栏导航设置： ./js/pages/erp/_erp/sidebar.jsx

- 与所做的页面、模块相关的弹窗，页面等组件直接放在相应的 page 目录

- 可复用的，可跨模块使用的组件，放置于 modules 目录

- 全局使用的组件，模块放置于_vendor 里，请减少全局对象

- 格式化代码

- 注释功能
