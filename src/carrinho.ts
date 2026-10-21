
import type { itemCarrinho } from "./types.js";
import { buscarProdutoPorId } from "./produtos.js";

const carrinho: itemCarrinho[] = [];

export function adicionarAoCarrinho(
  produtoId: number,
  quantidade: number
): boolean {
  const produto = buscarProdutoPorId(produtoId);

  if (!produto || quantidade <= 0 || quantidade > produto.estoque) {
    return false;
  }

  const itemExistente = carrinho.find(
    (item) => item.produtoId === produtoId
  );

  if (itemExistente) {
    if (itemExistente.quantidade + quantidade > produto.estoque) {
      return false;
    }

    itemExistente.quantidade += quantidade;
  } else {
    carrinho.push({ produtoId, quantidade });
  }

  return true;
}

export function listarCarrinho(): itemCarrinho[] {
  return carrinho;
}

export function calcularTotalCarrinho(): number {
  return carrinho.reduce((total, item) => {
    const produto = buscarProdutoPorId(item.produtoId);

    return total + (produto ? produto.preco * item.quantidade : 0);
  }, 0);
}
