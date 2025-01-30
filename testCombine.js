// import {firsMjsFunc} from './firstEsMoudule.mjs'
const {logCjs}=require('./firstCjsMoudule')

// firsMjsFunc()
// logCjs()

async function name() {
   const a =  await import('./firstEsMoudule.mjs')
//    console.log(a)

    return a
}
const c = name()


module.exports={name}