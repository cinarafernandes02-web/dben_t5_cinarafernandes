//Set<number>() - É responsável por guardar os IDs já utilizados. - CINARA
//Bollean - informa se a operação foi bem sucedida (true) ou não (false). - CINARA
//findIndex - encontra a posição do produto na lista. - CINARA
//indice === -1 significa que o produto não foi encontrado na lista. - CINARA
//Inclui cód. para que o ID não possa ser reutilizado. - CINARA
//trim() remove os espaços das extremidades do texto, 
// assim não é possível incluir um nome apenas com espaços. - 
//splice - remove o produto da lista. - CINARA

import type { produto } from "./types.js";

const produtos: produto[] = [];


const idsUtilizados = new Set<number>();


export function cadastrarProduto(novoProduto: produto): boolean {
  if (
  !Number.isInteger(novoProduto.id) ||
  novoProduto.id <= 0 ||
  idsUtilizados.has(novoProduto.id) ||
  novoProduto.nome.trim() === "" ||
  novoProduto.preco <= 0 ||
  novoProduto.estoque < 0
) {
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


export function buscarProdutoPorNome(nome: string): produto[] {
  return produtos.filter((item) =>
    item.nome.toLowerCase().includes(nome.toLowerCase())
  );
}

export function filtrarProdutosPorCategoria(
  categoria: string
): produto[] {
  return produtos.filter(
    (item) =>
      item.categoria.toLowerCase() === categoria.toLowerCase()
  );
}

export function atualizarProduto(
  id: number,
  novosDados: produto
): boolean {
  const indice = produtos.findIndex((item) => item.id === id);

  if (indice === -1) {
    return false;
  }

  if (
  novosDados.nome.trim() === "" ||
  novosDados.preco <= 0 ||
  novosDados.estoque < 0
) {
  return false;
}

  if (
  novosDados.id !== id &&
  idsUtilizados.has(novosDados.id)
) {
  return false;
}

  produtos[indice] = novosDados;
  return true;
}

export function reduzirEstoque(
  id: number,
  quantidade: number
): boolean {
  const produto = buscarProdutoPorId(id);

  if (
    !produto ||
    !Number.isInteger(quantidade) ||
    quantidade <= 0 ||
    quantidade > produto.estoque
  ) {
    return false;
  }

  produto.estoque -= quantidade;
  return true;
}

export function excluirProduto(id: number): boolean {
  const indice = produtos.findIndex((item) => item.id === id);

  if (indice === -1) {
    return false;
  }

  produtos.splice(indice, 1);
  return true;
}
