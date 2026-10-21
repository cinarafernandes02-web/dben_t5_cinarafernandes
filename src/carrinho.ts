//findIndex() localiza o item do carrinho pelo ID do produto. - CINARA
//indice === -1 significa que o item não foi encontrado. - CINARA
//splice(indice, 1) remove o item inteiro do carrinho. - CINARA



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

  for (const item of carrinho) {
    if (item.produtoId === produtoId) {
      if (item.quantidade + quantidade > produto.estoque) {
        return false;
      }

      item.quantidade = item.quantidade + quantidade;
      return true;
    }
  }

  carrinho.push({ produtoId: produtoId, quantidade: quantidade });

  return true;
}

export function listarCarrinho(): itemCarrinho[] {
  return carrinho;
}

export function calcularTotalCarrinho(): number {
  let total = 0;

  for (const item of carrinho) {
    const produto = buscarProdutoPorId(item.produtoId);

    if (produto) {
      total = total + produto.preco * item.quantidade;
    }
  }

  return total;
}


export function removerDoCarrinho(produtoId: number): boolean {
  const indice = carrinho.findIndex(
    (item) => item.produtoId === produtoId
  );

  if (indice === -1) {
    return false;
  }

  carrinho.splice(indice, 1);

  return true;
}
