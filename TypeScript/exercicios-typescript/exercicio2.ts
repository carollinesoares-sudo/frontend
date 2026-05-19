interface Estudante {
  nome: string;
  notas: number[]; 
}


function calcularMedia(estudante: Estudante) {

  const nota1 = estudante.notas[0];
  const nota2 = estudante.notas[1];
  const nota3 = estudante.notas[2];
  const nota4 = estudante.notas[3];


  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  if (media >= 7) {
    console.log(
      "Aluno: " + estudante.nome + " | Média: " + media + " | Status: Aprovado",
    );
  } else {
    console.log(
      "Aluno: " +
        estudante.nome +
        " | Média: " +
        media +
        " | Status: Reprovado",
    );
  }
}

const alunoTeste: Estudante = {
  nome: "Ana Silva",
  notas: [8, 7, 9, 8],
};

calcularMedia(alunoTeste);
