
import { cadastrarProduto, listarProdutos } from "./produtos.js";
import { cadastrarCliente, listarClientes } from "./clientes.js";
import {
  adicionarAoCarrinho,
  listarCarrinho,
  calcularTotalCarrinho,
} from "./carrinho.js";
import { registrarPedido, listarPedidos } from "./pedidos.js";

cadastrarProduto({
  id: 1,
  nome: "Caderno",
  categoria: "Papelaria",
  preco: 15,
  estoque: 20,
});

cadastrarCliente({
  id: 1,
  nome: "Maria Silva",
  email: "maria@email.com",
});

console.log("PRODUTOS:");
console.log(listarProdutos());

console.log("CLIENTES:");
console.log(listarClientes());

const adicionado = adicionarAoCarrinho(1, 2);

console.log("ITEM ADICIONADO AO CARRINHO:", adicionado);
console.log("CARRINHO:");
console.log(listarCarrinho());

console.log("TOTAL DO CARRINHO:");
console.log(calcularTotalCarrinho());

const pedidoCriado = registrarPedido(1, 1);

console.log("PEDIDO CRIADO:");
console.log(pedidoCriado);

console.log("LISTA DE PEDIDOS:");
console.log(listarPedidos());
