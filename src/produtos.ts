
import type { produto } from "./types.js";

const produtos: produto[] = [];

//Responsável por guardar os IDs já utilizados. - CINARA
const idsUtilizados = new Set<number>();

export function cadastrarProduto(novoProduto: produto): boolean {
  if (idsUtilizados.has(novoProduto.id)) {
    return false;
  }

  produtos.push(novoProduto);
  idsUtilizados.add(novoProduto.id);

  return true;
}

export function listarProdutos(): produto[] {
  return produtos;
}

export function buscarProdutoPorId(id: number): produto | undefined {
  return produtos.find((item) => item.id === id);
}

//Bollean - informa se a operação foi bem sucedida (true) ou não (false). - CINARA

//findIndex - encontra a posição do produto na lista. - CINARA

export function atualizarProduto(
  id: number,
  novosDados: produto
): boolean {
  const indice = produtos.findIndex((item) => item.id === id);

//indice === -1 significa que o produto não foi encontrado na lista. - CINARA

  if (indice === -1) {
    return false;
  }

  if (novosDados.id !== id) {
    const idExistente = buscarProdutoPorId(novosDados.id);

    if (idExistente) {
      return false;
    }
  }

  produtos[indice] = novosDados;
  return true;
}

export function excluirProduto(id: number): boolean {
  const indice = produtos.findIndex((item) => item.id === id);

  if (indice === -1) {
    return false;
  }

//splice - remove o produto da lista. - CINARA

  produtos.splice(indice, 1);
  return true;
}
