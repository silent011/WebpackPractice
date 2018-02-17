import React, { Component } from 'react'
import MarkdownData from '../../data/post.md'

class AppRoot extends Component {
    constructor (props) {
        super(props)
        this.state = {
            counter: 0
        }

        this.inc = this.inc.bind(this)
    }

    inc(){
        this.changeState({counter: this.state.counter + 1})
    }

    changeState(obj = {}){
        this.setState(prevState => {
            let newState = Object.create(prevState)

            Object.entries(obj).forEach(([key,val]) => {
                newState[key] = val
            })

            return newState;
        })
    }

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
            <section className="counter">
                <h1>Counte1: { this.state.counter }</h1>
                <button onClick={this.inc}>Increment</button>
            </section>
        </section>
        )
    }
}

export default AppRoot