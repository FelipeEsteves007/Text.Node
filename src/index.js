const fs = require('fs');  // carrega a ferramenta de leitura de arquivos

const caminhoArquivo = process.argv; // pega o nome do arquivo digitado no terminal
const link = caminhoArquivo[2]; 

fs.readFile(link, 'utf-8', (erro, texto) => {
  console.log(texto); // mostra o conteúdo
});
