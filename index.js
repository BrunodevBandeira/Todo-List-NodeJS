const express = require("express");
const app = express();

//ROTA
app.get("/", (req, res) => {
  res.send("Ola Mundo.");
});

app.listen(3000);
