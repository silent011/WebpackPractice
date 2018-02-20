import express from "express"
import path from "path"
import webpack from 'webpack'
import webpackHotServerMiddle from 'webpack-hot-server-middleware'

import configDevCLient from '../../config/webpack.dev-client'
import configDevServer from '../../config/webpack.dev-server'
import configProdClient from '../../config/webpack.prod-client'
import configProdServer from '../../config/webpack.prod-server'

const server = express()

const isProd = process.env.NODE_ENV === 'production'
if(!isProd){

    const compiler = webpack([configDevCLient, configDevServer])
    const clientCompiler = compiler.compilers[0]
    const serverCompiler = compiler.compilers[1]

    const wbHot = require("webpack-hot-middleware")(clientCompiler, configDevCLient.devServer)

    const wbDevMiddleWare = require('webpack-dev-middleware')(compiler, configDevServer.devServer)

    server.use(wbDevMiddleWare)
    server.use(wbHot)
    server.use(webpackHotServerMiddle(compiler))
} else {
    webpack([configProdClient, configProdServer]).run((err, stats) => {
        const render = require('../../build/prod-server-bundle').default
        const expressStaticGzip = require('express-static-gzip')
            server.use(expressStaticGzip('dist',{
                enableBrotli: true
        }))

        server.use(render())
    })
    
}


const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT} in env: ${process.env.NODE_ENV}`)
})