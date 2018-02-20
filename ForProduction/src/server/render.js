import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
// import AppRoot from '../components/AppRoot'
import Routes from '../components/Routes'

export default () => (req, res) => {
    res.send(
        `<html>
             <head>
                 <title>My title</title>
                 <link href="main.css" rel="stylesheet"/>
             </head>
             <body>
                 <div id="react-root">${ReactDOMServer.renderToString(
                     <StaticRouter location={req.url} context={{}}>
                         <Routes />
                     </StaticRouter>
                 )}</div>
             </body>
             <script src="vendor-bundle.js"></script>
             <script src="main-bundle.js"></script>
         </html>`)
 }