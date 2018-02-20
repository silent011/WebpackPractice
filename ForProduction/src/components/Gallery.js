import React from 'react'

const getBundle = () => {
    import(/* webpackChunkName: "lodash" */'lodash').then( _ => {
        console.log('imported', _)
    })
}

export default () => (
    <section className="gallery">
        <h1 onClick={getBundle}>Gallery </h1>
        <p>Hi, This is the gallery page</p>
    </section>
)