export class QuitandaView {
  constructor() {
    this.list = document.getElementById("stockList");
    this.inputName = document.getElementById("name");
    this.inputCategory = document.getElementById("category");
    this.inputPrice = document.getElementById("price");
    this.inputQuantity = document.getElementById("quantity");
  }

  render(products, onDelete, onSell) {
    if (!this.list) return;
    this.list.innerHTML = "";

    products.forEach((p, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="product-info">
          <strong>${p.name}</strong> 
          <span class="category-badge">${p.category}</span>
        </div>
        <div class="product-data">
          <span>R$ ${Number(p.price).toFixed(2).replace(".", ",")}</span> | 
          <span>Qtd: ${p.quantity}</span>
          <button class="btn-venda">Vender</button>
          <button class="btn-apagar">X</button>
        </div>
      `;
      li.querySelector(".btn-venda").onclick = () => onSell(index);
      li.querySelector(".btn-apagar").onclick = () => onDelete(index);
      this.list.appendChild(li);
    });
    this.clearInputs();
  }

  clearInputs() {
    this.inputName.value = "";
    this.inputCategory.value = "";
    this.inputPrice.value = "";
    this.inputQuantity.value = "";
    this.inputName.focus();
  }
}
