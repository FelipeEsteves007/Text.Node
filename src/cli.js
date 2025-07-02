import fs from 'fs'
import tratarErros from './Erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3]

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro
        const resultado = contaPalavras(texto)
        criaESalvaArquivo(resultado, endereco)
    } catch (erro) {
        tratarErros(erro)
    }
});

async function criaESalvaArquivo (listaPalavas, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`
    const textoPalavras = montaSaidaArquivo(listaPalavas)
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras)
        console.log('Arquivo Criado');   
    } catch(erro) { 
        throw erro;
    }
}
 
{/*
function criaESalvaArquivo(listaPalavas, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`
    const textoPalavras = JSON.stringify(listaPalavas)

    fs.promises.writeFile(arquivoNovo, textoPalavras).then(() => {
        console.log("Arquivo criando com sucesso!");
    }).catch((erro) => {
        throw erro
    }).finally(() => {
        console.log("Operação finalizada!");

    })
}
*/}