export default {
  listaTarefas: estado => {
    let lista = estado.tarefas.slice();

    return lista.reverse();
  }
}
