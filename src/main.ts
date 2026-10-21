
import {
  cadastrarProduto,
  listarProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  excluirProduto,
} from "./produtos.js";

import {
  cadastrarCliente,
  listarClientes,
  buscarClientePorId,
  atualizarCliente,
  excluirCliente,
} from "./clientes.js";

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

cadastrarProduto({
  id: 2,
  nome: "Caneta azul",
  categoria: "Escrita",
  preco: 3,
  estoque: 50,
});

cadastrarProduto({
  id: 3,
  nome: "Borracha branca",
  categoria: "Acessórios",
  preco: 2,
  estoque: 30,
});


console.log("ATUALIZAÇÃO DO PRODUTO:");
console.log(
  atualizarProduto(1, {
    id: 1,
    nome: "Caderno universitário",
    categoria: "Papelaria",
    preco: 20,
    estoque: 15,
  })
);

console.log("PRODUTO ATUALIZADO:");
console.log(buscarProdutoPorId(1));


cadastrarCliente({
  id: 1,
  nome: "Maria Silva",
  email: "maria@email.com",
});

cadastrarCliente({
  id: 2,
  nome: "João Santos",
  email: "joao@email.com",
});

cadastrarCliente({
  id: 3,
  nome: "Hilda Mia Maria",
  email: "miadamamae@email.com",
})

console.log("PRODUTOS:");
console.log(listarProdutos());

//listarProdutos().length - conta quantos produtos estão cadastrados naquele momento. - CINARA
console.log("QUANTIDADE DE PRODUTOS:");
console.log(listarProdutos().length);

//excluirProduto(3) - exclui o produto com id 3 da lista de produtos. - CINARA
console.log("EXCLUSÃO DO PRODUTO 3:");
console.log(excluirProduto(3));

console.log("PRODUTOS APÓS EXCLUSÃO:");
console.log(listarProdutos());

console.log("QUANTIDADE APÓS EXCLUSÃO:");
console.log(listarProdutos().length);

//TENTATIVA DE REUTILIZAR ID EXCLUÍDO - Quero tentar que após a utilização de um ID excluído não seja maiss possível utiliza-lo - CINARA
console.log("TENTATIVA DE REUTILIZAR ID EXCLUÍDO:");

console.log(
  cadastrarProduto({
    id: 3,
    nome: "Lápis",
    categoria: "Escrita",
    preco: 2,
    estoque: 40,
  })
);

console.log("CLIENTES:");
console.log(listarClientes());

console.log("QUANTIDADE DE CLIENTES:");
console.log(listarClientes().length);

console.log("ATUALIZAÇÃO DO CLIENTE:");
console.log(
  atualizarCliente(2, {
    id: 2,
    nome: "João Santos",
    email: "joao.santos@email.com",
  })
);

console.log("CLIENTE ATUALIZADO:");
console.log(buscarClientePorId(2));

console.log("EXCLUSÃO DO CLIENTE 3:");
console.log(excluirCliente(3));

console.log("CLIENTES APÓS EXCLUSÃO:");
console.log(listarClientes());

console.log("QUANTIDADE DE CLIENTES APÓS EXCLUSÃO:");
console.log(listarClientes().length);

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
