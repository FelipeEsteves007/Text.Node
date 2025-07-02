export function contaPalavras(texto) {
  const paragrafos = extraiParagrafos(texto)
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return []
    return verificaPalavrasDuplicas(paragrafo)
  })
  return contagem;
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