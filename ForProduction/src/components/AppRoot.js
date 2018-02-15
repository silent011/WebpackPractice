import React, { Component } from 'react'
import MarkdownData from '../../data/post.md'

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
            <section className="post">
                <h3>{ MarkdownData.title }</h3>
                <h4>{ MarkdownData.author }</h4>
                <div  dangerouslySetInnerHTML={{
                    __html:MarkdownData.__content
                }}></div>
            </section>
        </section>
        )
    }
}

export default AppRoot