const f = require('./testCombine')

// f()
const b = f.name().then(r=>console.log(r))

// console.log(f.name())