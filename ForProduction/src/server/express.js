import express from "express"
import path from "path"

const server = express()

const isProd = process.env.NODE_ENV === 'production'
if(!isProd){
    const webpack = require('webpack')
    const config = require('../../config/webpack.config')
    const compiler = webpack(config)
    const wbHot = require("webpack-hot-middleware")(compiler)

    const wbDevMiddleWare = require('webpack-dev-middleware')(compiler, config.devServer)

    server.use(wbDevMiddleWare)
    server.use(wbHot)
}

// const staticMiddleware = express.static("dist")

// server.use(staticMiddleware)
const expressStaticGzip = require('express-static-gzip')
server.use(expressStaticGzip('dist',{
    enableBrotli: true
}))

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})