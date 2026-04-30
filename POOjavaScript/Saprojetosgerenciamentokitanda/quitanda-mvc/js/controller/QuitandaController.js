export class QuitandaController {// Classe responsável por gerenciar a lógica de negócios e a interação entre o modelo e a visão
  constructor(model, view) {// Recebe o modelo e a visão como parâmetros
    this.model = model;
    this.view = view;
    this.history = document.getElementById("historyList");
    this.updateView();// Atualiza a visão com os dados do modelo
  }

  
  addLog(mensagem, tipo) {
    const li = document.createElement("li");// Cria um item de lista para o log

    
    if (tipo === "venda") li.style.borderLeftColor = "#5c0606";// Cor para vendas

    li.innerHTML = `
        <div class="product-info">
          <strong>${mensagem}</strong> 
          <span class="category-badge">${new Date().toLocaleTimeString()}</span>
        </div>
        <div class="product-data">
          <span style="color: #666; font-size: 0.8rem; font-weight: bold;">MOVIMENTAÇÃO</span>
        </div>
    `;
    this.history.prepend(li);// Adiciona o log no topo da lista de histórico
  }

  addProduct(product) {
    if (!product.name.trim()) return alert("Nome obrigatório!");
    this.model.addProduct(product);
    
    this.addLog(`Entrada: ${product.quantity}x ${product.name}`, "entrada");
    this.updateView();
  }

  handleDelete(index) {
    const p = this.model.getProducts()[index];// Obtém o produto a ser deletado para mostrar no log
    if (confirm(`Remover ${p.name}?`)) {
      this.addLog(`Removido: ${p.name}`, "removido");// Registra a remoção no log
      this.model.deleteProduct(index);
      this.updateView();
    }
  }

  handleSell(index) {
    const products = this.model.getProducts();// Obtém a lista de produtos do modelo
    const p = products[index];

    if (p.quantity > 0) {// Verifica se há estoque suficiente para vender
      p.quantity--;
      this.model.save();
      
      this.addLog(`Venda: 1x ${p.name}`, "venda");// Registra a venda no log
      this.updateView();
    } else {
      alert("Estoque insuficiente!");
    }
  }

  updateView() {
    this.view.render(
      this.model.getProducts(),// Passa a lista de produtos para a visão
      (idx) => this.handleDelete(idx),// Passa a função de deletar para a visão
      (idx) => this.handleSell(idx),// Passa a função de vender para a visão
    );
  }
}
