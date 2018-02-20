import React from 'react'
import ReactDOMServer from 'react-dom/server'
import AppRoot from '../components/AppRoot'

export default () => (req, res) => {
    res.send(
        `<html>
             <head>
                 <title>My title</title>
                 <link href="main.css" rel="stylesheet"/>
             </head>
             <body>
                 <div id="react-root">${ReactDOMServer.renderToString(<AppRoot />)}</div>
             </body>
             <script src="vendor-bundle.js"></script>
             <script src="main-bundle.js"></script>
         </html>`)
 }