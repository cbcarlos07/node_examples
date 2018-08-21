//console.log( module.id )
const start = (num) =>{
    if(num === 0){
        return 1
    }

    return num * start (num - 1)
}

//exports.start = start
module.exports = start