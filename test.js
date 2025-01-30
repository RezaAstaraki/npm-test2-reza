const a = require('./firstCjsMoudule')
console.log(a)
console.log(a.logCjs())
console.log(a.secondFunc())

const {logCjs,secondFunc} =require('./firstCjsMoudule')

logCjs()
secondFunc()