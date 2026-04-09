class Produto {
    nome;
    preco;
    estoque;

   constructor(nome,preco,estoque){
    this.nome= nome;
    this.preco= preco;
    this.estoque= estoque;
   }
   vender(quantidade) {
   if (quantidade <= this.estoque) {
    this.estoque -=quantidade;
    console.log(`Venda de ${quantidade} unidade. realizada`);
   }else{
    console.log(`Estoque insuficiente para vender ${quantidade} unidade.`);
     }
   }
    repor(quantidade) {
        this.estoque += quantidade;
        console.log(`Reposição de ${quantidade} unidade. concluida.`);
    }
  exibirInfo() {
    console.log(`Produto: ${this.nome} | Preço: R$${this.preco.toFixed(2)} | Estoque: ${this.estoque}`);
  }
  }

  const meuProduto = new Produto("Rimel YSL" , 300 , 10);

  meuProduto.exibirInfo(); 
  meuProduto.vender(3)
  meuProduto.repor(5)
  meuProduto.exibirInfo();