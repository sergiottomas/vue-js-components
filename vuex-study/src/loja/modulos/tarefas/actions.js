export default {
  addTarefa(contexto, valor) {
    contexto.commit("ADD_TAREFA", valor);
  },
  delTarefa(contexto, valor) {
    contexto.commit("DEL_TAREFA", valor);
  }
}
