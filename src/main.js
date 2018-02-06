require('babel-runtime/regenerator')
require('./main.css')
require('./index.html')

let f = async (args) => {
    const {a, b} = args
    await console.log('Hello from ES6', a, b)
    console.log('Hi again')
}

f({a:1, b: 2});