import express from "express"
import path from "path"
import { request } from "http";

const server = express();

const webpack = require('webpack')
const config = require('../../config/webpack.config')
const compiler = webpack(config)
const wbHot = require("webpack-hot-middleware")(compiler)

const wbDevMiddleWare = require('webpack-dev-middleware')(compiler, config.devServer)

server.use(wbDevMiddleWare)
server.use(wbHot)

const staticMiddleware = express.static("dist")

server.use(staticMiddleware)

server.listen(8000, () => {
    console.log('server listening')
})