//boolean - informa se a operação foi bem sucedida (true) ou não (false). - CINARA
//findIndex - Localiza a posição do cliente
//splice - Remove o cliente da lista. - CINARA
//!Number.isInteger(novoCliente.id)	- verifica de o ID é um número inteiro, 
//se for 1.5 será recusado. - CINARA
//novoCliente.id <= 0 - Verifica se o ID é positivo - se for ex.	0 ou -2 será recusado. - CINARA
//idsUtilizados.has(novoCliente.id) -	Verifica se o ID já foi utilizado - Se sim será recusado. - CINARA
//novoCliente.nome.trim() === "" - Verifica e não permite nome vazio ou só com espaços, ex.:"   " - CINARA
//!/.test(novoCliente.email) - Verifica se o e-mail é válido - CINARA

import type { cliente } from "./types.js";

const clientes: cliente[] = [];
const idsUtilizados = new Set<number>();

export function cadastrarCliente(novoCliente: cliente): boolean {
  if (
  !Number.isInteger(novoCliente.id) ||
  novoCliente.id <= 0 ||
  idsUtilizados.has(novoCliente.id) ||
  novoCliente.nome.trim() === "" ||
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(novoCliente.email)
) {
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

  if (
    !Number.isInteger(novosDados.id) ||
    novosDados.id <= 0 ||
    novosDados.nome.trim() === "" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(novosDados.email)
  ) {
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
