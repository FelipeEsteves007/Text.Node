export default function tratarErros (erro){
    if (erro.code === 'ENOENT'){
        throw new Error ('Arquivos não encontrado')
    } else {
        return "Erro na aplicação"
    }
}