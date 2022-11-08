const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", function (rep, res) {
  res.sendFile(path.join(__dirname + "/src"));
});

app.use(express.static("src"));

app.listen(process.env.PORT, () => {
  console.log(`servidor rodando na porta ${port}`);
});
