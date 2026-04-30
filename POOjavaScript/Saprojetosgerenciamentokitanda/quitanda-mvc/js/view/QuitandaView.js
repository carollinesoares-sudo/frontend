export class QuitandaView {
  constructor() {
    this.list = document.getElementById("stockList");// Lista de produtos
    this.inputName = document.getElementById("name");// Input do nome do produto
    this.inputCategory = document.getElementById("category");// Input da categoria do produto
    this.inputPrice = document.getElementById("price");// Input do preço do produto
    this.inputQuantity = document.getElementById("quantity");
  }

  render(products, onDelete, onSell) {// Método para renderizar a lista de produtos
    if (!this.list) return;// Verifica se o elemento existe antes de tentar renderizar
    this.list.innerHTML = "";

    const fragment = document.createDocumentFragment();// Fragmento para otimizar a renderização

    // Dicionário de emojis
    const emojis = {
      maça: "🍎",
      maca: "🍎",
      maçã: "🍎",
      banana: "🍌",
      uva: "🍇",
      morango: "🍓",
      laranja: "🍊",
      limao: "🍋",
      limão: "🍋",
      abacaxi: "🍍",
      melancia: "🍉",
      bala: "🍬",
      doce: "🍭",
    };

    products.forEach((p, index) => {// Itera sobre os produtos para criar os elementos da lista
      const li = document.createElement("li");

      // Escolhe o emoji baseado no nome
      const frutaEmoji = emojis[p.name.toLowerCase().trim()] || "🧺";

      li.innerHTML = `
        <div class="product-info">
            <strong class="prod-name"></strong> 
            <span class="category-badge"></span>
        </div>
        <div class="product-data">
            <span>R$ ${Number(p.price).toFixed(2).replace(".", ",")}</span> | 
            <span>Qtd: <strong>${p.quantity}</strong></span>
            <button class="btn-venda">Vender</button>
            <button class="btn-apagar">X</button>
        </div>
      `;

      // Define o texto com o emoji
      li.querySelector(".prod-name").textContent = `${frutaEmoji} ${p.name}`;
      li.querySelector(".category-badge").textContent = p.category;

      // Configura os cliques dos botões (importante para funcionar!)
      li.querySelector(".btn-venda").onclick = () => onSell(index);
      li.querySelector(".btn-apagar").onclick = () => onDelete(index);

      fragment.appendChild(li);
    });

    this.list.appendChild(fragment);
    this.clearInputs();
  }

  clearInputs() {
    if (this.inputName) {
      this.inputName.value = "";
      this.inputCategory.value = "";
      this.inputPrice.value = "";
      this.inputQuantity.value = "";
      this.inputName.focus();
    }
  }
}
