//console.log( module.id )
export const fatorial = (num) =>{
    if(num === 0){
        return 1
    }

    return num * fatorial (num - 1)
}

//exports.start = start
//module.exports = start -- no javascript