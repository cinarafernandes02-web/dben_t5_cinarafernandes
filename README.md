# Papelaria Criativa

## 1. Sobre o projeto

O projeto *Papelaria Criativa* é um sistema desenvolvido em TypeScript para simular o gerenciamento de uma papelaria. O projeto permite cadastrar e gerenciar produtos e clientes, controlar um carrinho de compras e registrar pedidos, aplicando regras de validação para garantir a consistência das operações.

O desenvolvimento foi realizado como parte de uma atividade prática de programação, com foco na organização do código, modularização e aplicação dos conceitos de TypeScript.

## 2. Funcionalidades

### Gerenciamento de produtos
- Cadastrar, listar, buscar, atualizar e excluir produtos.
- Buscar produtos por ID ou nome.
- Filtrar produtos por categoria.
- Validar IDs, nomes, preços e quantidades em estoque.
- Impedir a reutilização de IDs já utilizados.
- Controlar a redução do estoque após as compras.

### Gerenciamento de clientes
- Cadastrar, listar, buscar, atualizar e excluir clientes.
- Validar IDs, nomes e endereços de e-mail.
- Impedir o cadastro de IDs duplicados ou inválidos.

### Carrinho de compras
- Adicionar produtos ao carrinho.
- Remover produtos do carrinho.
- Alterar a quantidade de itens.
- Calcular subtotais e o valor total da compra.
- Validar a existência dos produtos, as quantidades informadas e a disponibilidade em estoque.

### Gerenciamento de pedidos
- Registrar pedidos vinculados a clientes cadastrados.
- Armazenar os produtos, as quantidades e os preços praticados no momento da compra.
- Calcular o subtotal de cada item e o valor total do pedido.
- Registrar a data da compra.
- Atualizar o estoque após a validação dos itens.
- Limpar o carrinho após o registro do pedido.
- Listar todos os pedidos e consultar pedidos por cliente.
- Validar pedidos inválidos e impedir IDs de pedidos duplicados.

## 3. Tecnologias utilizadas

- **TypeScript:** tipagem estática e organização da lógica do sistema.
- **Node.js:** execução do código JavaScript compilado.
- **Node Package Manager (npm):** gerenciamento de dependências e execução de scripts.
- **Git:** controle de versão.
- **GitHub:** hospedagem do repositório e acompanhamento do desenvolvimento.

## 4. Estrutura do projeto

```text
dben_t5_cinarafernandes/
├── src/
│   ├── main.ts
│   ├── types.ts
│   ├── produtos.ts
│   ├── clientes.ts
│   ├── carrinho.ts
│   ├── pedidos.ts
│   └── relatorios.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

**Descrição dos arquivos principais:**

- `main.ts`: executa demonstrações e testes das funcionalidades do sistema.
- `types.ts`: define os tipos utilizados para produtos, clientes, itens do carrinho e pedidos.
- `produtos.ts`: contém as operações e validações relacionadas aos produtos.
- `clientes.ts`: contém as operações e validações relacionadas aos clientes.
- `carrinho.ts`: gerencia os itens do carrinho e os cálculos da compra.
- `pedidos.ts`: registra pedidos, calcula valores e atualiza o estoque.
- `relatorios.ts`: arquivo reservado para funcionalidades de relatórios.

## 5. Regras de negócio e validações

O sistema aplica as seguintes regras:

- Os IDs devem ser números inteiros positivos e não podem ser reutilizados quando já tiverem sido utilizados, conforme as validações de cada módulo.
- Os nomes dos produtos e clientes não podem estar vazios.
- Os preços dos produtos devem ser maiores que zero.
- O estoque não pode ser negativo.
- O e-mail do cliente deve atender a uma validação básica e válida de formato.
- As quantidades adicionadas ao carrinho devem ser inteiras e positivas.
- Não é permitido adicionar ao carrinho uma quantidade superior ao estoque disponível.
- Para registrar um pedido, o cliente deve existir e o carrinho deve conter itens válidos.
- Todos os itens do pedido são validados antes da atualização do estoque.
- Os preços unitários e os subtotais são armazenados no pedido para preservar os valores praticados no momento da compra.

## 6. Como executar o projeto -

### Pré-requisitos

Ter o Node.js e o npm instalados no computador.

### Passo 1 — Instalar as dependências

No terminal, na pasta do projeto, executei:

```bash
npm install
```

### Passo 2 — Compilar o TypeScript

Executei:

```bash
npm run build
```

Entendi que esse comando utiliza o compilador TypeScript para gerar os arquivos JavaScript na pasta de saída configurada no projeto.

### Passo 3 — Executar o sistema

Após a compilação, executei:

```bash
node dist/main.js
```

Entendi que com ele o programa exibirá no terminal as demonstrações das operações de cadastro, gerenciamento do carrinho, registro de pedidos, cálculos e validações.

## 7. Testes realizados

Durante o desenvolvimento, foram verificadas operações válidas e situações de erro, incluindo:

- Cadastro e gerenciamento de produtos e clientes.
- Tentativa de reutilização de IDs.
- Adição e remoção de produtos do carrinho.
- Cálculo do total da compra.
- Registro de pedidos e atualização do estoque.
- Tentativas de registrar pedidos com cliente inexistente ou ID duplicado.
- Consulta dos pedidos registrados.

## 8. Considerações finais

O projeto permitiu praticar e aprender ainda mais sobre os conceitos fundamentais de programação com TypeScript, incluindo tipos, funções, arrays, módulos, validações, operações de cadastro e manipulação de dados.

Assim como já vinha sendo explicado em aulas, aprendi na prática que a separação das funcionalidades em módulos facilita a organização, a manutenção e a evolução do sistema.