const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

//ENGINE
app.set("view engine", "ejs");

//ROTA
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});