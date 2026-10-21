
import type { cliente } from "./types.js";

const clientes: cliente[] = [];

export function cadastrarCliente(novoCliente: cliente): void {
  clientes.push(novoCliente);
}

export function listarClientes(): cliente[] {
  return clientes;
}

export function buscarClientePorId(id: number): cliente | undefined {
  return clientes.find((item) => item.id === id);
}
