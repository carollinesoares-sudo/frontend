export class QuitandaController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.history = document.getElementById("historyList");
    this.updateView();
  }

  
  addLog(mensagem, tipo) {
    const li = document.createElement("li");

    
    if (tipo === "venda") li.style.borderLeftColor = "#c026d3";

    li.innerHTML = `
        <div class="product-info">
          <strong>${mensagem}</strong> 
          <span class="category-badge">${new Date().toLocaleTimeString()}</span>
        </div>
        <div class="product-data">
          <span style="color: #666; font-size: 0.8rem; font-weight: bold;">MOVIMENTAÇÃO</span>
        </div>
    `;
    this.history.prepend(li);
  }

  addProduct(product) {
    if (!product.name.trim()) return alert("Nome obrigatório!");
    this.model.addProduct(product);
    
    this.addLog(`Entrada: ${product.quantity}x ${product.name}`, "entrada");
    this.updateView();
  }

  handleDelete(index) {
    const p = this.model.getProducts()[index];
    if (confirm(`Remover ${p.name}?`)) {
      this.addLog(`Removido: ${p.name}`, "removido");
      this.model.deleteProduct(index);
      this.updateView();
    }
  }

  handleSell(index) {
    const products = this.model.getProducts();
    const p = products[index];

    if (p.quantity > 0) {
      p.quantity--;
      this.model.save();
      
      this.addLog(`Venda: 1x ${p.name}`, "venda");
      this.updateView();
    } else {
      alert("Estoque insuficiente!");
    }
  }

  updateView() {
    this.view.render(
      this.model.getProducts(),
      (idx) => this.handleDelete(idx),
      (idx) => this.handleSell(idx),
    );
  }
}
