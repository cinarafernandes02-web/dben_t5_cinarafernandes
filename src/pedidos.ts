//some() verifica se existe algum pedido com aquele ID, se já estiver sendo utilizado o 
// registrarPedido() não cria outro pedido e retorna undefined. - CINARA


import type { pedido } from "./types.js";
import { buscarClientePorId } from "./clientes.js";
import {
  listarCarrinho,
  calcularTotalCarrinho,
} from "./carrinho.js";

const pedidos: pedido[] = [];

export function registrarPedido(
  id: number,
  clienteId: number
): pedido | undefined {
  const cliente = buscarClientePorId(clienteId);
  const itensCarrinho = listarCarrinho();

  if (!cliente || itensCarrinho.length === 0) {
    return undefined;
  }

  const idExistente = pedidos.some(
    (item) => item.id === id
  );

  if (idExistente) {
    return undefined;
  }

  const novoPedido: pedido = {
    id,
    clienteId,
    itens: itensCarrinho.map((item) => ({ ...item })),
    total: calcularTotalCarrinho(),
    data: new Date().toISOString(),
  };

  pedidos.push(novoPedido);

  return novoPedido;
}

export function listarPedidos(): pedido[] {
  return pedidos;
}
