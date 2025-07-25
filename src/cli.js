import fs from 'fs'
import path from 'path'
import tratarErros from './Erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command()

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d, --destino <string>' , 'caminho da pasta onde salva o arquivo de resultados')
    .action((options) => {
        const { texto, destino } = options

        if (!texto || !destino){
            console.log(chalk.red('erro: favor inserir caminho de origem e destino'));
            program.help()
            return
        }

        const caminhoTexto = path.resolve(texto)
        const caminhoDestino = path.resolve(destino)

        try {
            processaArquivo(caminhoTexto, caminhoDestino)
            console.log(chalk.green('texto processado'));
            
        }catch (erro){
            console.log('Ocorreu um erro');
            
        }
    })
program.parse()

function processaArquivo(texto, destino) {
    fs.readFile(texto, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro
        const resultado = contaPalavras(texto)
        criaESalvaArquivo(resultado, destino)
    } catch (erro) {
        tratarErros(erro)
    }
});}



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