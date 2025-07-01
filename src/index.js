const fs = require('fs');
const tratarErros = require('./Erros/funcoesErro')

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
  try {
    if (erro) throw erro 
    contaPalavras(texto)
  } catch (erro) {
    tratarErros(erro)
  }
});

function contaPalavras(texto) {
  const paragrafos = extraiParagrafos(texto)
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return []
    return verificaPalavrasDuplicas(paragrafo)
  })
  console.log(contagem);
}

function extraiParagrafos(texto) {
  return texto.toLowerCase().split('\n')
}

function quebraEmParagragos(texto) {

}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

function verificaPalavrasDuplicas(texto) {
  const listaPalavras = texto.split(' ')
  const resultado = {}

  listaPalavras.forEach(palavra => {
    if (palavra.length >= 3) {
      const palavraLimpar = limpaPalavras(palavra)
      resultado[palavraLimpar] = (resultado[palavraLimpar] || 0) + 1
    }
  });
  return resultado
}