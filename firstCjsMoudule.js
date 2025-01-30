const logCjs = ()=>{
    console.log('log from first commonjs module')
}

function secondFunc(){
    console.log('log from second function in first commonjs module')
}

module.exports = {logCjs,secondFunc}