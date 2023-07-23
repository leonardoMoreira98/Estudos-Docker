const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const fs = require("fs");

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  fs.readFile("form.html", function (err, data) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(data);
    return res.end();
  });
});

app.post("/imc", (req, res) => {
  const peso = req.body.peso;
  const altura = req.body.altura;
  const result = peso / Number(altura * altura);

  let classificacao = "";

  if (result < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (result < 25) {
    classificacao = "Peso normal";
  } else if (result < 30) {
    classificacao = "Acima do Peso";
  } else if (result < 35) {
    classificacao = "obesidade grau 1";
  } else if (result < 40) {
    classificacao = "obesidade grau 2";
  }
  res.send(`Seu IMC é ${result.toFixed(2)}  ${classificacao}`);
});

app.listen(3000, (err) => {
  if (err) {
    console.log("Servidor Offline");
  } else {
    console.log("Servidor Online");
  }
});