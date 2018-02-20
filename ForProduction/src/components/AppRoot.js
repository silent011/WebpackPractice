import React, { Component } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'

class AppRoot extends Component {

    render () {
        return (
        <section className="main-section">
            <Router>
                <Routes />
            </Router >
        </section>
        )
    }
}

export default AppRoot