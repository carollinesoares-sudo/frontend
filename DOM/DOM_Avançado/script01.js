// criando elementos para a página index

//Clonando Elemento com DOM
let card = document.createElement("div");
card.classList.add("card"); // adicionando a classe card ao meu div = div.card <div class="card">

//criar um container para adicionar os cards
let container = document.createElement("div");
container.classList.add("container"); //adicionando a class container ao div

//criar um botão para clonar elementos
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar"; // adicinando texto ao botão
btnClonar.id = "btnClonar"; //adicionando um id ao botão

//adicionar elemento a página
document.body.appendChild(btnClonar);
document.body.appendChild(container); // add container ao body
container.appendChild(card); // add card ao container

//adicinar um evento ao botão
btnClonar.addEventListener("click", () => {
  let clonar = card.cloneNode(true); //clonar o obj Card
  container.appendChild(clonar); //add clone ao container
});

//Criar uma Chave para DarkMode
let chave = document.createElement("input");
chave.type = "checkbox"; //mudando o tipo do input
chave.id = "darkMode";
document.body.appendChild(chave); //add chave ao body

//criar o evento para modo Claro e Modo Escuro
chave.addEventListener("change", ()=>{
    document.body.classList.toggle("darkMode");
})

//criar slider para controle de cor 
let slider = document.createElement("input");
slider.type = "range";
slider.min = "0";
slider.max = "255";
slider.value = "0";
slider.id = "slider";
document.body.appendChild(slider);

//evento para mudar a cor
slider.addEventListener("input", ()=>{
    let valor = slider.value;
    document.body.style.backgroundColor = `rgb(${valor}, ${valor}, ${valor})`;
})
