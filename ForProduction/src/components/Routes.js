import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Profile from './Profile'
import Gallery from './Gallery'
import About from './About'

export default () => (
        <div>
         <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
        </nav>
        <Switch>
            <Route exact path="/" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
        </Switch>
        </div>
)