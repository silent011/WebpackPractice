import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'

import Routes from '../components/Routes'

export default ({clientStats}) => (req, res) => {
    const { js, styles, cssHash, } = flushChunks(clientStats, {
        chunkNames: flushChunkNames()
    })

    res.send(
        `<html>
             <head>
                 <title>My title</title>
                 ${styles}
             </head>
             <body>
                 <div id="react-root">${ReactDOMServer.renderToString(
                     <StaticRouter location={req.url} context={{}}>
                         <Routes />
                     </StaticRouter>
                 )}</div>
             </body>
             ${js}
             ${cssHash}
         </html>`)
 }