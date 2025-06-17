const fs = require('fs')

const caminhoArquivo = process.argv
const link = caminhoArquivo[2]

fs.readFile(link, 'utf-8', (erro, texto) => {
    console.log(texto)
})

function verificaPalavrasDuplicadas (texto) {
    const listaPalavras = texto.split(' ') 
    const resultado = {}

    listaPalavras.array.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1
    });
    console.log(resultado);
    
}