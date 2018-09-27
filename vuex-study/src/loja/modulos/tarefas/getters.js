export default {
  listaTarefas: estado => {
    let lista = estado.tarefas.slice();

    return lista.reverse();
  },
  buscarTarefas: estado => termo => {
    return estado.tarefas.filter((tarefa) => tarefa.indexOf(termo) > -1);
  }
}
