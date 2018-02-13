import React, { Component } from 'react'

class Counter extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 1,
            test: 'wow'
        }

        this.inc = this.inc.bind(this)
    }

    inc(e){
        this.setState(oldState => {
           let newState = Object.create(oldState)
            newState.count++
            return newState;
        })
    }
    
    render () {
        return (
            <div>
            <button onClick={this.inc} custom="wow">Increment</button>
            <h1>Count: { this.state.count }</h1>
            </div>
        )
    }
}

export default Counter