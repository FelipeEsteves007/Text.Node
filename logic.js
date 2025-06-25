const tarefas = ['correr', 'malhar', 'jogar']

function executarTarefas (tarefas, callback){
    for (let i = 0; i < tarefas.length; i++){
        callback(tarefas[i])
    }
}

function mostrarTarefa(tarefas){
    console.log(`Executando tarefa: ${tarefas}`);
}

executarTarefas(tarefas,mostrarTarefa)