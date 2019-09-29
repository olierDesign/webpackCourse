// 服务器配置文件

// 启动一个服务器
import express from "express";
import path from "path";

// 创建服务器
const server = express();

// 配置启动路径
const staticMiddleware = express.static("dist");

// 监听代码
const webpack = require("webpack");
const config = require("../../config/webpack.dev.js");

const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, config.devServer);

//热更新
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

// 使用中间件
server.use(webpackDevMiddleware);

server.use(webpackHotMiddleware);

server.use(staticMiddleware);

// 端口
server.listen(9999, () => {
    console.log("server is running......");
})