//some() verifica se existe algum pedido com aquele ID, se já estiver sendo utilizado o 
// registrarPedido() não cria outro pedido e retorna undefined. - CINARA



import type { pedido, itemPedido } from "./types.js";
import { buscarClientePorId } from "./clientes.js";
import { buscarProdutoPorId, reduzirEstoque } from "./produtos.js";
import { listarCarrinho, calcularTotalCarrinho, removerDoCarrinho } from "./carrinho.js";

const pedidos: pedido[] = [];

export function registrarPedido(
  id: number,
  clienteId: number
): pedido | undefined {
  const cliente = buscarClientePorId(clienteId);
  const itensCarrinho = listarCarrinho();

  if (
    !Number.isInteger(id) ||
    id <= 0 ||
    pedidos.some((item) => item.id === id) ||
    !cliente ||
    itensCarrinho.length === 0
  ) {
    return undefined;
  }

  // Valida todos os itens antes de alterar o estoque.
  for (const item of itensCarrinho) {
    const produto = buscarProdutoPorId(item.produtoId);

    if (
      !produto ||
      !Number.isInteger(item.quantidade) ||
      item.quantidade <= 0 ||
      item.quantidade > produto.estoque
    ) {
      return undefined;
    }
  }

  // Guarda os preços e subtotais do momento da compra.
  const itensPedido: itemPedido[] = itensCarrinho.map((item) => {
    const produto = buscarProdutoPorId(item.produtoId)!;

    return {
      produtoId: item.produtoId,
      quantidade: item.quantidade,
      precoUnitario: produto.preco,
      subtotal: produto.preco * item.quantidade,
    };
  });

  const novoPedido: pedido = {
    id,
    clienteId,
    itens: itensPedido,
    total: itensPedido.reduce((soma, item) => soma + item.subtotal, 0),
    data: new Date().toISOString(),
  };

  // Reduz o estoque após validar todos os itens.
  for (const item of itensPedido) {
    reduzirEstoque(item.produtoId, item.quantidade);
  }

  pedidos.push(novoPedido);

  // Esvazia o carrinho após a compra.
  for (const item of [...itensCarrinho]) {
    removerDoCarrinho(item.produtoId);
  }

  return novoPedido;
}

export function listarPedidos(): pedido[] {
  return pedidos;
}

export function buscarPedidosPorCliente(clienteId: number): pedido[] {
  return pedidos.filter((item) => item.clienteId === clienteId);
}
