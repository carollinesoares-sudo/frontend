class Veiculo{
    marca;
    modelo;
    ano;
    
    constructor(marca,modelo,ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInfo() {
        console.log(`Veiculo: ${this.marca} ${this.modelo} | Ano: ${this.ano}`);
    }
}

  class Carro extends Veiculo {
    constructor(marca, modelo, ano, quantidadePortas) {
        super(marca, modelo, ano);
        this.quantidadePortas = quantidadePortas;
    }
    exibirInfo() {
        console.log(`Carro: ${this.marca} ${this.modelo} | Ano: ${this.ano} | Portas: ${this.quantidadePortas}`);
    }
  }

  const meuCarro = new Carro("Chevrolet" , "Onix", 2023, 4);
  meuCarro.exibirInfo();