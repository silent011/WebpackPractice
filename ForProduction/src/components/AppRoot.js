import React, { Component } from 'react'

class AppRoot extends Component {
    render () {
        return (
        <section className="main-section">
            <section className="profile">
                <h1>{this.props.data.heading}</h1>
                <img src={
                require('../images/350288-tool.jpg')} alt=""/>
            </section>
            <section>
                <h2>{this.props.data.bioText}</h2>
            </section>
        </section>
        )
    }
}

export default AppRoot