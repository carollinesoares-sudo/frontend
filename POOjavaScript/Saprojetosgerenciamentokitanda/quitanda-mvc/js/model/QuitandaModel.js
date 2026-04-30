export class QuitandaModel {// Classe responsável por gerenciar os dados dos produtos
  constructor() {
    this.products = JSON.parse(localStorage.getItem("quitanda_estoque")) || [];
  }

  addProduct(product) {// Adiciona um produto ao estoque, somando à quantidade existente se o nome já existir
    const existing = this.products.find(
      (p) => p.name.toLowerCase() === product.name.toLowerCase(),
    );
    if (existing) {// Se o produto já existe, atualiza a quantidade e o preço
      existing.quantity += product.quantity;
      existing.price = product.price;
    } else {
      this.products.push(product);
    }
    this.save();// Salva as alterações no localStorage
  }

  deleteProduct(index) {// Remove um produto do estoque pelo índice
    this.products.splice(index, 1);
    this.save();
  }

  getProducts() {// Retorna a lista de produtos
    return this.products;
  }

  save() {// Salva a lista de produtos no localStorage
    localStorage.setItem("quitanda_estoque", JSON.stringify(this.products));
  }
}
