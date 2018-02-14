import React from 'react'
import ReactDOM from 'react-dom'
import AppRoot from './components/AppRoot'
import {AppContainer} from 'react-hot-loader'
import Data from '../data/bio'

let render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component data = {Data} />
        </AppContainer>, document.getElementById('react-root')
    )
}

render(AppRoot)

if(module.hot){
    module.hot.accept("./components/AppRoot.js", () => {
        const NewRoot = require('./components/AppRoot.js').default
        render(NewRoot)
    })
}