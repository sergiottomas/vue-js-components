export default {
  ADD_TAREFA: (estado, valor) => {
    estado.tarefas.push(valor);
  },
  DEL_TAREFA: (estado, valor) => {
    let position = estado.tarefas.indexOf(valor);

    if(position > -1) {
      estado.tarefas.splice(position, 1);
    }
  }
}
