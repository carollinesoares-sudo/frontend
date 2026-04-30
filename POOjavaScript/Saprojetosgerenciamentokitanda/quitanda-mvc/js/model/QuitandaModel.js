export class QuitandaModel {
  constructor() {
    this.products = JSON.parse(localStorage.getItem("quitanda_estoque")) || [];
  }

  addProduct(product) {
    const existing = this.products.find(
      (p) => p.name.toLowerCase() === product.name.toLowerCase(),
    );
    if (existing) {
      existing.quantity += product.quantity;
      existing.price = product.price;
    } else {
      this.products.push(product);
    }
    this.save();
  }

  deleteProduct(index) {
    this.products.splice(index, 1);
    this.save();
  }

  getProducts() {
    return this.products;
  }

  save() {
    localStorage.setItem("quitanda_estoque", JSON.stringify(this.products));
  }
}
