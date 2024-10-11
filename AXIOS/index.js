import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".css")) {
        res.set("Content-Type", "text/css");
      }
    },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

// Etapa 1: certifique-se de que quando um usuário visitar a página inicial,
// mostra uma atividade aleatória. Você precisará verificar o formato do
// Dados JSON de response.data e edite o arquivo index.ejs de acordo.

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);

  // Passo 2: Experimente os menus suspensos e veja o que é registrado.
  // Use axios para fazer uma solicitação de API para o endpoint /filter. Fazendo
  // certeza de que você está passando as consultas de tipo e de participantes.
  // Renderiza o arquivo index.ejs com uma única atividade *aleatória* que retorna
  // da solicitação da API.
  // Etapa 3: se você receber um erro 404 (recurso não encontrado) na solicitação da API.
  // Passa um erro para index.ejs para informar ao usuário:
  // "Nenhuma atividade que corresponda aos seus critérios."
  const type = req.body["type"]
  const participants = req.body["participants"]
  console.log("aqui" + type + participants)

  const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`)
  const result = response.data;
  res.render("index.ejs", { data: result });
  console.log(response)
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
