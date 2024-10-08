# Ignite Shop - Carrinho de Compras

## Descrição

Este projeto foi desenvolvido como parte do Desafio 04 da trilha de ReactJS do Ignite da Rocketseat. O objetivo foi implementar novas funcionalidades ao Ignite Shop, permitindo que os usuários adicionem e removam itens de um carrinho de compras e, em seguida, prossigam para o checkout utilizando a API do Stripe.

## 💻 Funcionalidades

Adicionar produtos ao carrinho diretamente na página de detalhes do produto.
Exibir o número de itens no carrinho no cabeçalho da aplicação.
Remover itens do carrinho antes de finalizar a compra.
Enviar o carrinho com os itens selecionados para o Stripe, gerando uma sessão de checkout para finalização da compra.
Integração com a API do Stripe para obter os produtos e processar o pagamento.

## 🚀 Tecnologias Utilizadas

ReactJS: Biblioteca JavaScript para criação de interfaces de usuário.
Next.js: Framework para React com funcionalidades de renderização no servidor.
TypeScript: Superset de JavaScript que adiciona tipagem estática.
Stripe API: Utilizada para gerenciamento de produtos e criação de sessões de checkout.
use-shopping-cart: Biblioteca utilizada para facilitar a lógica de carrinho de compras e integração com o Stripe.

## 🛠️ Como Executar o Projeto
Clone o repositório:
```bash
git clone https://github.com/seu-usuario/ignite-shop.git
```
Acesse a pasta do projeto:
```bash
cd ignite-shop
```
Instale as dependências:
```bash
npm install
# ou
yarn install
```
Crie um arquivo .env.local e adicione suas chaves da Stripe:

```bash
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-public-key
STRIPE_SECRET_KEY=your-secret-key
```

Execute o projeto:
```bash
npm run dev
# ou
yarn dev
```

Acesse o projeto em http://localhost:3000.

## 📚 Layout

O layout do projeto foi baseado no design disponibilizado no Figma. Para acessá-lo, clique aqui.

## 📄 Licença

Este projeto está sob a licença MIT. Para mais detalhes, veja o arquivo LICENSE.
