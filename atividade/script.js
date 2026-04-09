const form = document.getElementById("form");
const errorDiv = document.getElementById("error");
const lista = document.getElementById("lista");
const toggleBtn = document.getElementById("toggleDark");

// modo escuro
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// envio
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const empresa = document.getElementById("empresa").value.trim();
  const cargo = document.getElementById("cargo").value.trim();

  // validação
  if (!nome || !email || !telefone || !empresa || !cargo) {
    errorDiv.textContent = "Preencha todos os campos!";
    return;
  }

  errorDiv.textContent = "";

  // criar card
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <strong>${nome}</strong><br>
    ${email}<br>
    ${telefone}<br>
    ${empresa} - ${cargo}<br>
    <button class="remover">Remover</button>
  `;

  // remover
  card.querySelector(".remover").addEventListener("click", () => {
    card.remove();
  });

  lista.appendChild(card);

  form.reset();
});

// tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    form.reset();
    errorDiv.textContent = "";
  }
});
