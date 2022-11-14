const express = require("express");
const path = require("path");
const app = express();
const port = 8081;

app.get("/", function (rep, res) {
  res.sendFile(path.join(__dirname + "/src"));
});

app.get("/comentarios", function (rep, res) {
  res.sendFile(path.join(__dirname + "/src/indexc.html"));
});

app.use(express.static("src"));

app.listen(8081, () => {
  console.log(`servidor rodando na porta ${port}`);
});
