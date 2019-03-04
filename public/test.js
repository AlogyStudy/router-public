
let pathToRegExp = require('path-to-regexp')

let reg = pathToRegExp('/home', [], {end: false}) // 路径，

global.console.log(reg, 'reg')
