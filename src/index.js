const fs = require('fs');  // carrega a ferramenta de leitura de arquivos

const caminhoArquivo = process.argv; // pega o nome do arquivo digitado no terminal
const link = caminhoArquivo[2]; 

fs.readFile(link, 'utf-8', (erro, texto) => {
  quebraEmParagragos(texto)
  //verificaPalavrasDuplicas(texto)
});

// criar um arr de palavras
// contador se a palavra é duplicada
// objeto com o resultado
{/*{
  'web' = 5;
}
*/}

function quebraEmParagragos (texto){
  const paragrafos = texto.toLowerCase().split('\n')
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return []
    return verificaPalavrasDuplicas(paragrafo)
  })
  console.log(contagem);
}

function limpaPalavras (palavra){
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '') // expressão regular (padrões em texto)
}

function verificaPalavrasDuplicas (texto){
  const listaPalavras = texto.split(' ')
  const resultado = {}
  //objeto[propriedade] = valor
  listaPalavras.forEach(palavra => {
    if (palavra.length >= 3){
      const palavraLimpar = limpaPalavras(palavra)
    resultado[palavraLimpar] = (resultado[palavraLimpar] || 0) + 1
    }
  });
  return resultado
}