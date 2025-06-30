const tarefas = ['correr', 'jogar', 'brincar']

const  executarTarefas = (tarefas, callback) => {
     for (let i = 0; i < tarefas.length; i++){
        callback(tarefas[i])
    }
}

const mostrarTarefa = tarefas => console.log(`Executando tarefa: ${tarefas}`);

executarTarefas(tarefas,mostrarTarefa)
