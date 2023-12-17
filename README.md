# m16-typescript
## Descrição
Home de uma loja feita em react.

## Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [JSON Server](https://github.com/typicode/json-server) instalado globalmente (se aplicável)

## Instalação
1. Clone este repositório: `git clone https://github.com/miguelzynich/m16-typescript`
2. Acesse o diretório do projeto: `cd m16-typescript`
3. Instale as dependências: `npm install`

## Executando o Projeto
1. Inicie o JSON Server (se aplicável): `json-server --watch db.json --port 3003` 
   - Certifique-se de ajustar a porta conforme necessário.
2. Inicie o aplicativo React: `npm start`

# Mudanças feitas

## Button.tsx:

- Adição da propriedade children: ReactNode; no tipo ButtonProps, tornando opcional.
- Isso resolve o erro relacionado a falta da propriedade children no tipo ButtonProps.

## Select.tsx:

- Adição de tipos para FlexDirection, Variation, Size e FontSize.
- Modificação da propriedade direction para aceitar tanto FlexDirection quanto string.

## Flex.tsx

- Adição de tipos para FlexDirection.
- Modificação da propriedade direction para aceitar tanto FlexDirection quanto string.