class Funcionario {
  // Ajustado para o singular para combinar com o 'new'
  nome;
  salario;
  cargo;

  constructor(nome, salario, cargo) {
    this.nome = nome;
    this.salario = salario;
    this.cargo = cargo;
  }

  // O método precisa estar DENTRO das chaves da classe
  aumentarSalario(percentual) {
    if (percentual > 0) {
      const aumento = this.salario * (percentual / 100);
      this.salario += aumento;
      console.log(`Aumento de ${percentual}% aplicado com sucesso!`);
    } else {
      console.log("O percentual de aumento deve ser maior que zero.");
    }
  }

  exibirInfo() {
    console.log(`--- Ficha do Funcionário ---`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Cargo: ${this.cargo}`);
    console.log(`Salário: R$${this.salario.toFixed(2)}`);
    console.log(`----------------------------`);
  }
} // Fim da classe

// Agora funciona corretamente!
const func1 = new Funcionario("Carlos Souza", 3000, "Analista de TI");

func1.exibirInfo();
func1.aumentarSalario(10);
func1.exibirInfo();
