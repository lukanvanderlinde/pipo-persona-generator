# Pipo: Gerador de Personana

## Sobre o projeto

### Tecnologias

- React 16.9.0
- React Router 5.0.1

### Dependências

- Material UI
- html2canvas
- jspdf

#### Dependências Opcionais

- Google Firebase
- Google Analytics
- Zapier

Caso não utilize o firebase, pode remover ele do fundo do html e modificar os scripts no package.json

Ele já tem o tracking do GA, basta adicionar o código do no header do index.html na pasta public.

## Estrutura do projeto

.
+-- README.md
+-- package.json
+-- package-lock.json
+-- firebase.json
+-- firebasesrc.json
+-- src
| +-- theme.js
| +-- index.js
| +-- services
| +-- routes
| +-- images
| +-- icons
| +-- fonts
| +-- components
+-- public
| +-- index.html
| +-- manifest.json
| +-- reset.css
| +-- robots.txt

## Scripts Disponíveis

No diretório desse projeto você pode rodar:

### `npm start`

Inicia a aplicação no [http://localhost:3000](http://localhost:3000) em modo de desenvolvimento.<br>

A página vai atualizar automaticamente de acordo com as alterações no código e os erros vão aparecer no console.

### `npm run build`

Esse comando constroi a aplicação para produção criando uma pasta chamada `build`.<br>

### `npm run deploy`

Esse comando coloca a aplicação em produção, os arquivos da pasta `build` serão enviados para o projeto no Google Firebase.<br>
