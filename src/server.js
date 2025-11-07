// ============================
//  Dependências
// ============================
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import usuarioRoutes from "./routes/usuarios.routes.js"; // Apelidei o "router" para usuarioRoutes
import livroRoutes from "./routes/livros.routes.js"; // Apelidei o "router" para livroRoutes
import avalicaoRoutes from "./routes/avaliacoes.routes.js"; // Apelidei o "router" para avalicaoRoutes

// ============================
//  Configuração do servidor
// ============================
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API funcionando");
})

app.use("/livros", livroRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/avaliacoes", avalicaoRoutes);

// ============================
//  Inicia o servidor
// ============================
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
