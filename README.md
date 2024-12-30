# API Axios e Manipulação de JSON

Este repositório contém dois exemplos de servidores Express que demonstram como realizar requisições HTTP usando Axios e manipular dados em formato JSON.

## Requisições HTTP com Axios

### Visão Geral
Este exemplo utiliza Axios para fazer requisições HTTP a uma API externa (https://bored-api.appbrewery.com). Ele permite ao usuário obter atividades aleatórias com base em parâmetros como tipo e número de participantes.

### Explicação do Código

- O servidor Express usa Axios para realizar uma requisição GET à API externa e obter atividades aleatórias.
- Na rota GET /, o servidor faz a requisição para obter uma atividade aleatória e a exibe.
- Na rota POST /, o servidor filtra atividades com base no tipo e no número de participantes passados pelo usuário, retornando uma atividade aleatória que atenda aos critérios.

---

## Manipulação de JSON com Express

### Visão Geral

Este exemplo utiliza o Express para criar um servidor que lê um arquivo JSON com informações sobre receitas e exibe dados dinâmicos de acordo com a escolha do usuário. O servidor renderiza as receitas em uma página utilizando EJS.

### Estrutura do JSON

O servidor carrega um JSON com receitas de tacos, cada uma com um id, tipo, nome, preço e os ingredientes listados em categorias como proteína, salsa e toppings.

### Explicação do Código

- recipeJSON: Um arquivo JSON contendo receitas de tacos.
- O servidor Express possui uma rota GET para renderizar o arquivo index.ejs, passando os dados da receita como variável.
- A rota POST /recipe permite ao usuário selecionar uma receita (por exemplo, "chicken", "beef", "fish"), e o servidor retorna a receita correspondente.

---

## Dependências

Este projeto depende de algumas bibliotecas que podem ser instaladas utilizando o npm:

- **express**: Framework web para Node.js.
- **body-parser**: Middleware para interpretar dados do corpo da requisição.
- **axios**: Cliente HTTP baseado em promessas para fazer requisições HTTP.

---

## Conclusão
- Este projeto demonstra como manipular JSON e como realizar requisições HTTP externas usando Axios em uma aplicação Express. 
- Os exemplos incluem a manipulação de dados de receitas e a obtenção de atividades aleatórias de uma API pública, proporcionando uma forma simples e eficiente de integrar dados dinâmicos em uma aplicação web.
