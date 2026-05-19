
interface Usuario {
  id: number;
  nome: string;
  email: string;
  isAdmin: boolean;
}


function renderizarPerfil(usuario: Usuario) {
  if (usuario.isAdmin === true) {
    console.log(
      "Usuário Administrador: " + usuario.nome + " (" + usuario.email + ")",
    );
  } else {
    console.log("Usuário Comum: " + usuario.nome + " (" + usuario.email + ")");
  }
}


const Carolline: Usuario = {
  id: 1,
  nome: "Carolline Maia",
  email: "maia@email.com",
  isAdmin: true,
};


renderizarPerfil(Carolline);
