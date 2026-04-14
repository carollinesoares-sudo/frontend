class ContaBancaria {
   titular;
   saldo;

   constructor(titular,saldo) {
    this.titular = titular;
    this.saldo = saldo;
   }
   depositar(valor) {
    if (valor > 0) {
        this.saldo += valor;
        console.log(`Deposito de R$${valor.toFixed(2)} realizado com sucesso.`);
    } else{
        console.log("O valor do deposito deve ser positivo")
    }
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado`);
        }else{
            console.log(`Saldo insuficiente para sacar R$${valor.toFixed(2)}.`);
        }
       }
    exibirSaldo() {
    console.log(`Titular: ${this.titular} | Saldo Atual: R$${this.saldo.toFixed(2)}`);
  }
}


const minhaConta = new ContaBancaria("Carolline Maia", 300);

minhaConta.exibirSaldo(); 
minhaConta.depositar(200); 
minhaConta.sacar(1000);    
minhaConta.sacar(150);     
minhaConta.exibirSaldo(); 
