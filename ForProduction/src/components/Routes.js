import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import universal from 'react-universal-component'

const UniversalComponent = universal(props => import(`./${props.page}`))

export default () => (
        <div>
         <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
        </nav>
        <Switch>
            <Route exact path="/">
                <UniversalComponent page="Profile" />
            </Route>
            <Route path="/about">
                <UniversalComponent page={"About"} />
            </Route>
            <Route path="/gallery">
                <UniversalComponent page="Gallery" />
            </Route>
        </Switch>
        </div>
)