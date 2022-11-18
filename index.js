const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", function (rep, res) {
  res.sendFile(path.join(__dirname + "/src"));
});

app.get("/comentarios", function (rep, res) {
  res.sendFile(path.join(__dirname + "/src/indexc.html"));
});

app.use(express.static("src"));

app.listen(PORT, () => {
  console.log("SERVIDOR RODANDO! NA PORTA", PORT);
});
