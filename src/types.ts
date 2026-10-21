
export type produto = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  estoque: number;
};

export type cliente = {
  id: number;
  nome: string;
  email: string;
};

export type itemCarrinho = {
  produtoId: number;
  quantidade: number;
};

export type pedido = {
  id: number;
  clienteId: number;
  itens: itemCarrinho[];
  total: number;
  data: string;
};
