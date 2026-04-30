import { QuitandaModel } from "./model/QuitandaModel.js";
import { QuitandaView } from "./view/QuitandaView.js";
import { QuitandaController } from "./controller/QuitandaController.js";

const model = new QuitandaModel();
const view = new QuitandaView();
const controller = new QuitandaController(model, view);

const btn = document.getElementById("addBtn");

btn.addEventListener("click", () => {
  const product = {
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    price: Number(document.getElementById("price").value),
    quantity: Number(document.getElementById("quantity").value),
  };

  controller.addProduct(product);
});
