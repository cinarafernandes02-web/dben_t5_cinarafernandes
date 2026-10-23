# Papelaria Criativa
**Estudante:** Cinara Fernandes Skieresz
**Turma:** Desenvolvedor Back-End Node — T5

## 1. Sobre o projeto

O Papelaria Criativa é um sistema desenvolvido em TypeScript para simular o gerenciamento de uma papelaria. A proposta é trabalhar com o cadastro e o gerenciamento de produtos e clientes, o carrinho de compras e o registro de pedidos.

Este projeto foi desenvolvido como parte de uma atividade prática de programação. Meu objetivo foi colocar em prática os conteúdos estudados em aula e aprender a desenvolver um sistema por etapas, entendendo como as funcionalidades se relacionam.

Durante o desenvolvimento, percebi que não bastava fazer o código funcionar, eu também precisava entender o que cada parte fazia, pensar nas situações que poderiam dar errado e testar se o sistema realmente se comportava como esperado.

Por isso, além de implementar as funcionalidades, aproveitei o projeto para explorar outras ferramentas e aprofundar meus conhecimentos.

## 2. Requisitos principais da atividade

Nesta etapa, trabalhei nas funcionalidades de gerenciamento de produtos e clientes, carrinho de compras e registro de pedidos, além da organização do código e das validações necessárias para o funcionamento do sistema.

### Gerenciamento de produtos

- Cadastrar, listar, buscar, atualizar e excluir produtos.
- Buscar produtos por ID ou nome.
- Filtrar produtos por categoria.
- Validar IDs, nomes, preços e quantidades em estoque.
- Controlar a redução do estoque após as compras.

### Gerenciamento de clientes

- Cadastrar, listar, buscar, atualizar e excluir clientes.
- Validar IDs, nomes e endereços de e-mail.
- Impedir o cadastro de IDs duplicados ou inválidos.

### Carrinho de compras

- Adicionar e remover produtos do carrinho.
- Alterar a quantidade de itens.
- Calcular o total da compra.
- Verificar a existência dos produtos e a disponibilidade em estoque.

### Gerenciamento de pedidos

- Registrar pedidos vinculados a clientes cadastrados.
- Registrar os produtos, as quantidades e os preços praticados no momento da compra.
- Calcular os subtotais e o valor total do pedido.
- Registrar a data da compra.
- Atualizar o estoque após a validação dos itens.
- Limpar o carrinho após o registro do pedido.
- Listar os pedidos e consultar os pedidos de um cliente.
- Validar pedidos inválidos e impedir IDs de pedidos duplicados.

## Exemplos das principais operações

A aplicação demonstra suas operações e seus resultados no terminal. Alguns exemplos de funcionamento são:

**Cadastro e gerenciamento de produtos**
- Listagem dos produtos cadastrados.
- Atualização do preço de um produto.
- Exclusão de um produto e verificação da quantidade restante no catálogo.

**Gerenciamento de clientes**
- Listagem dos clientes cadastrados.
- Atualização dos dados de um cliente.
- Validação de e-mails inválidos.

**Carrinho de compras**
- Adição de produtos ao carrinho.
- Cálculo do valor total da compra.
- Recusa de quantidades superiores ao estoque disponível.

**Registro de pedidos**
- Registro de um pedido associado a um cliente cadastrado.
- Cálculo do valor total e armazenamento dos preços praticados na compra.
- Atualização do estoque após a finalização do pedido.

**Exemplo de cálculo:** ao adicionar 2 cadernos com preço unitário de R$ 20,00, o total da compra é de R$ 40,00. Após o registro do pedido, o estoque do produto é reduzido de 15 para 13 unidades.

## 3. Tecnologias utilizadas

- **TypeScript:** linguagem utilizada para desenvolver a lógica do sistema e definir os tipos de dados.
- **Node.js:** utilizado para executar o código JavaScript após a compilação.
- **npm:** utilizado para gerenciar as dependências e executar os comandos configurados no projeto.
- **Git:** utilizado para acompanhar as alterações realizadas durante o desenvolvimento.
- **GitHub:** utilizado para hospedar o repositório e manter o histórico do projeto.

## 4. Aprendizados e melhorias que explorei durante o desenvolvimento

Além de trabalhar nas funcionalidades do sistema, aproveitei o projeto para aprender mais sobre a organização de um projeto TypeScript e as ferramentas utilizadas no desenvolvimento.

### Uso do package.json

O arquivo `package.json` foi utilizado para organizar os comandos de compilação e execução do projeto. Essa configuração foi uma iniciativa que explorei para facilitar o meu trabalho durante os testes.

Configurei os seguintes scripts:

- `npm run build`: executa o compilador TypeScript (`tsc`), gerando os arquivos JavaScript na pasta `dist`.
- `npm start`: executa a aplicação por meio do Node.js, utilizando o arquivo compilado `dist/main.js`.

Com isso, aprendi que é possível deixar comandos recorrentes configurados no projeto, evitando precisar digitá-los manualmente a cada execução.

Também conheci melhor a função do arquivo `package-lock.json`, gerado pelo npm, que registra as versões específicas das dependências instaladas e ajuda a manter a consistência das instalações.

### Testes adicionais

Durante o desenvolvimento, fui além das verificações iniciais e decidi testar algumas situações específicas para entender melhor como as validações funcionavam.

Entre os testes adicionais que realizei estão:

- Tentativa de cadastrar um produto com preço igual a zero.
- Tentativa de cadastrar um cliente com e-mail inválido.
- Tentativa de adicionar ao carrinho uma quantidade superior ao estoque disponível.
- Verificação de que o preço registrado em um pedido permanece o mesmo, mesmo após a alteração do preço do produto no catálogo.

Esses testes me ajudaram a compreender melhor como o sistema deve reagir diante de informações inválidas e por que é importante preservar os dados de uma compra já registrada.

### Aprendizado com Git e GitHub

Também trabalhei com o Git e o GitHub para registrar as etapas do desenvolvimento. Ao longo do projeto, fui aprendendo a preparar as alterações, criar commits e enviá-los ao repositório remoto.

Esse processo me ajudou a entender melhor como acompanhar a evolução de um projeto e manter um histórico das mudanças realizadas.

## 5. Estrutura do projeto

Organizei o código em módulos conforme previsto na atividade.

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

**Descrição dos principais arquivos:**

- `main.ts`: reúne as chamadas das funcionalidades e os testes utilizados para demonstrar o funcionamento do sistema.
- `types.ts`: define os tipos utilizados para representar produtos, clientes, itens do carrinho e pedidos.
- `produtos.ts`: contém as operações e validações relacionadas aos produtos.
- `clientes.ts`: contém as operações e validações relacionadas aos clientes.
- `carrinho.ts`: gerencia os itens do carrinho e os cálculos da compra.
- `pedidos.ts`: registra pedidos, calcula valores e atualiza o estoque.
- `relatorios.ts`: arquivo presente na estrutura, sem funcionalidades implementadas nesta versão.
- `package.json`: reúne as informações e os comandos configurados para o projeto.
- `package-lock.json`: registra as versões específicas das dependências instaladas.
- `tsconfig.json`: contém as configurações do compilador TypeScript.

## 6. Regras de negócio e validações

Durante os testes, trabalhei com regras para evitar cadastros inválidos e inconsistências nas operações.

As principais validações são:

- Os IDs devem ser números inteiros positivos e não podem ser reutilizados quando já tiverem sido utilizados, conforme as regras de cada módulo.
- Os nomes dos produtos e clientes não podem estar vazios.
- Os preços dos produtos devem ser maiores que zero.
- O estoque não pode ser negativo.
- O e-mail do cliente deve atender a uma validação básica de formato.
- As quantidades adicionadas ao carrinho devem ser inteiras e positivas.
- A quantidade adicionada ao carrinho não pode ultrapassar o estoque disponível.
- O cliente deve estar cadastrado para que um pedido possa ser registrado.
- Os itens do pedido são validados antes da atualização do estoque.
- Os preços e subtotais são armazenados no pedido para preservar os valores praticados no momento da compra.

## 7. Como executar o projeto

### Pré-requisitos

É necessário ter o Node.js e o npm instalados no computador.

### Passo 1 — Instalar as dependências

No terminal, dentro da pasta do projeto, execute:

```bash
npm install
```

### Passo 2 — Compilar o TypeScript

Execute:

```bash
npm run build
```

Esse comando utiliza o compilador TypeScript para gerar os arquivos JavaScript na pasta de saída configurada no projeto.

### Passo 3 — Executar o sistema

Após a compilação, execute:

```bash
npm start
```

O comando utiliza o script configurado no `package.json` para executar a aplicação com o Node.js.

As demonstrações das operações e os resultados dos testes são exibidos no terminal.

## 8. Limitações conhecidas do sistema

Esta versão do Papelaria Criativa tem como objetivo praticar a lógica de uma aplicação back-end, não sendo um sistema comercial completo.

As principais limitações são:

- Não possui interface gráfica ou páginas web; as operações e os resultados são demonstrados no terminal.
- Não utiliza banco de dados. Os dados são mantidos durante a execução da aplicação e não são persistidos para utilização após seu encerramento.
- Não possui integração com meios de pagamento.
- Não implementa autenticação de usuários.
- O arquivo `relatorios.ts` está presente na estrutura do projeto, mas não possui funcionalidades implementadas nesta versão.

Essas limitações fazem parte do escopo atual do projeto e podem ser consideradas em futuras melhorias.



## 9. Considerações finais

Desenvolver o Papelaria Criativa foi uma oportunidade de colocar em prática os conteúdos estudados e aprender coisas novas durante o processo.

Em vários momentos, precisei parar para entender melhor um comando, relembrar um conceito ou descobrir por que determinada operação funcionava de uma maneira e não de outra. Foi justamente esse processo que tornou o desenvolvimento uma experiência de aprendizado.

Utilizei a inteligência artificial como ferramenta de apoio, buscando orientações passo a passo e explicações sobre os pontos que eu ainda não conhecia bem ou precisava relembrar. Minha intenção foi entender o que estava fazendo, e não apenas receber um código pronto.

Também aproveitei para explorar recursos que ajudaram a organizar o projeto, como os scripts do `package.json`, os testes adicionais e o controle de versões com Git e GitHub.

Concluo esta etapa com uma compreensão maior sobre como organizar um projeto, separar suas funcionalidades, aplicar validações e verificar os resultados por meio de testes. Sei que ainda tenho muito a aprender, mas considero essa experiência um passo importante na minha evolução nos estudos de programação.
