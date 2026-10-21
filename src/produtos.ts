
import type { produto } from "./types.js";

const produtos: produto[] = [];

export function cadastrarProduto(novoProduto: produto): void {
  produtos.push(novoProduto);
}

export function listarProdutos(): produto[] {
  return produtos;
}

export function buscarProdutoPorId(id: number): produto | undefined {
  return produtos.find((item) => item.id === id);
}
