import express from "express"
import path from "path"
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import AppRoot from '../components/AppRoot'

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


const expressStaticGzip = require('express-static-gzip')
server.use(expressStaticGzip('dist',{
    enableBrotli: true
}))

server.get('*', (req, res) => {
   res.send(
       ` <html>
            <head>
                <title>My title</title>
                <link href="main.css" rel="stylesheet"/>
            </head>
            <body>
                <div id="react-root">
                    ${ReactDOMServer.renderToString(AppRoot)}
                </div>
            </body>
            <script src="vendor-bundle.js"></script>
            <script src="main-bundle.js"></script>
        </html>
   `)
})


const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})