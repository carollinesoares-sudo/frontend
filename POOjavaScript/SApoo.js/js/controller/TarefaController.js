// classe controller para realizar a interação entre o model e o view

export class TarefaController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  //função que roda no inicio do sistema
  init() {
    //evento para adicionar tarefas
    this.view.addTarefaBtn.addEventListener("click", () => this.addTarefa());

    // renderizar a lista de tarefas
    this.view.renderTarefa(
      this.model.getTarefas(), //pegar as tarefas do model
      (id) => this.atualizarTarefa(id), //função para atualizar tarefa
      (id) => this.removerTarefa(id), //função para remover tarefa
    );
  }

  //funções para adicionar tarefas
  addTarefa() {
    const titulo = this.view.getTarefaInputValue(); //pega o valor do input

    if (titulo === "") {
      //mandar uma mensagem de erro
      this.view.showMensagem("O Título da tarefa não pode ser vazio.");
      return; //interrompe a função
    }

    //continuo escreverndo a função
    this.view.clearMensagem(); //limpa a mensagem de erro
    this.model.addTarefa(titulo); //adiciona o titulo da tarefa no model
    this.view.clearInput(); //limpa o input
    this.updateView(); // atualiza o view
  }

  //função para mudar atarefa para concluida ou não concluida
  atualizarTarefa(id) {
    this.model.atualizarTarefa(id); //atualizar a tarefa no model
    this.updateView(); //atualiza o view
  }

  //função para remover a tarefa
  removerTarefa(id) {
    this.model.removerTarefa(id); // remove a tarefa no model
    this.updateView(); // atualiza o view
  }

  updateView() {
    this.view.renderTarefa(
      this.model.getTarefas(),
      (id) => this.atualizarTarefa(id),
      (id) => this.removerTarefa(id),
    );
  }
}
