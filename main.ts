import { fatorial } from './fatorial'
//const fatorial = require('./fatorial')
console.log('n-fatorial')
/*console.log(`Executando o script a partir do diretório ${process.cwd()}`)

process.on('exit', ()=>{
    console.log('Script está prestes a terminar')
})*/

//const num = parseInt( process.argv[2] )
//console.log(process.argv)

const arqv = require('yargs').demandOption('num').argv


//const num = parseInt( process.argv[2] )
const num = arqv.num


console.log(`o fatorial de 5 é igual a ${fatorial(num)}`)

//console.log(module.paths)