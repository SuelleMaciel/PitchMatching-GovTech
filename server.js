const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// pasta onde os editais serão salvos
const upload = multer({ dest: "uploads/" });

// banco de dados falso em memória
let demandas = [];
let idAtual = 1;

// CREATE - criar demanda com upload de edital
app.post("/demandas", upload.single("edital"), (req, res) => 
{
  const novaDemanda = 
  {
    id: idAtual++,
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    setor: req.body.setor,
    edital: req.file ? req.file.filename : null
  };

  demandas.push(novaDemanda);

  res.status(201).json({
    mensagem: "Demanda criada com sucesso!",
    demanda: novaDemanda
  });
});

// READ - listar demandas
app.get("/demandas", (req, res) => 
{
  res.json(demandas);
});

// READ - buscar uma demanda por ID
app.get("/demandas/:id", (req, res) => 
{
  const demanda = demandas.find(d => d.id == req.params.id);

  if (!demanda) 
    {
    return res.status(404).json({ mensagem: "Demanda não encontrada." });
  }

  res.json(demanda);
});

// UPDATE - atualizar demanda
app.put("/demandas/:id", upload.single("edital"), (req, res) => 
    {
  const demanda = demandas.find(d => d.id == req.params.id);

  if (!demanda) 
    {
    return res.status(404).json({ mensagem: "Demanda não encontrada." });
  }

  demanda.titulo = req.body.titulo || demanda.titulo;
  demanda.descricao = req.body.descricao || demanda.descricao;
  demanda.setor = req.body.setor || demanda.setor;

  if (req.file) 
    {
    demanda.edital = req.file.filename;
  }

  res.json({
    mensagem: "Demanda atualizada com sucesso!",
    demanda
  });
});

// DELETE - apagar demanda
app.delete("/demandas/:id", (req, res) => 
    {
  demandas = demandas.filter(d => d.id != req.params.id);

  res.json({ mensagem: "Demanda removida com sucesso!" });
});

// iniciar servidor
app.listen(3000, () => 
    {
  console.log("Servidor rodando em http://localhost:3000");
});