![header](./header.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## 后端结构

后端主要代码在`./server`目录下

### Controller

负责handle来自前端的请求，调用服务(service)，并向前端返回数据

### Models

数据可Schema

### Routes

老版本Adacorn代码，目前没用。

### Services

负责handle来自controller的请求并access数据库，然后返回数据到Controller

### config.json

目前仅作为存储加密秘钥的文件

## 前端结构

前端主要代码在`./src/app`目录下

### \_guard

保护Router中需要登录才能获取的页面

### components

组件，每个组件一个文件夹，基本每个文件夹内都会有 `component.css`,`component.html`, `component.ts`,`component.spec.ts`，分别是样式表、html模板、ts代码和不需要关心。

ts代码内调用服务来与后端取得联系

### models

主要是Object的class定义

### services

服务，主要负责与后端交流并把反馈返回到对应组件。

## 纯前端测试

运行`ng serve`，前端App会在`http://localhost:4200/`打开。如果本地有文件改动网站会自动刷新。

## 服务器测试
运行`npm run build`，App会在`http://localhost:3000`打开。本有文件改动不会刷新，需要重新build。

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
