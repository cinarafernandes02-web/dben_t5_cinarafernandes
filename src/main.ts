
import { cadastrarProduto, listarProdutos } from "./produtos.js";

cadastrarProduto({
  id: 1,
  nome: "Caderno",
  categoria: "Papelaria",
  preco: 15,
  estoque: 20
});

console.log(listarProdutos());
