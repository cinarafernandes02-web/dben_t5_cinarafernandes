//boolean - informa se a operação foi bem sucedida (true) ou não (false). - CINARA
//findIndex - Localiza a posição do cliente
//splice - Remove o cliente da lista. - CINARA

import type { cliente } from "./types.js";

const clientes: cliente[] = [];
const idsUtilizados = new Set<number>();

export function cadastrarCliente(novoCliente: cliente): boolean {
  if (idsUtilizados.has(novoCliente.id)) {
    return false;
  }

  clientes.push(novoCliente);
  idsUtilizados.add(novoCliente.id);

  return true;
}

export function listarClientes(): cliente[] {
  return clientes;
}

export function buscarClientePorId(id: number): cliente | undefined {
  return clientes.find((item) => item.id === id);
}

export function atualizarCliente(
  id: number,
  novosDados: cliente
): boolean {
  const indice = clientes.findIndex((item) => item.id === id);

  if (indice === -1) {
    return false;
  }

  if (novosDados.id !== id && idsUtilizados.has(novosDados.id)) {
    return false;
  }

  clientes[indice] = novosDados;
  idsUtilizados.add(novosDados.id);

  return true;
}

export function excluirCliente(id: number): boolean {
  const indice = clientes.findIndex((item) => item.id === id);

  if (indice === -1) {
    return false;
  }

  clientes.splice(indice, 1);

  return true;
}
