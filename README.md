### 说明

* 构建工具 Gulp
* 静态服务器 express 
* 项目目录src
* 项目名为sy
* rubix演示项目名为demo

### run

1、项目根目录初始化执行：

`
npm install
`

平时执行：

` gulp `

2、进入preview:

`
cd ./src/preview-tool
`

然后初始化执行：

`
npm install
`

平时运行：

`
node --harmony node_modules/.bin/webpack-tool build:simple --env development --output ../../dist/static-admin/preview  --publicPath /static-admin/preview --apiHost /api --mode watch
`


### 跨域服务，启动本地nginx转发，虚拟主机配置如下：

```
server {
    listen  80;
    server_name  $local-domain;
    root  /$projectHOME/src/jsx/sy;

    location / {
        index  index_dev.html;
    }
    location /static-admin/preview {
        alias  /$projectHOME/dist/static-admin/preview;
    }
    location /static-admin/ {
        alias  /$projectHOME/public/;
    }
    location /api/ {
        proxy_pass http://$server-domain/api/;
    }
}
```

以上需根据本地主机修改的地方有：

```
$local-domain    # 本地配置的域名 /etc/hosts
$projectHOME     # git项目根目录
$server-domain   # api服务域名
```