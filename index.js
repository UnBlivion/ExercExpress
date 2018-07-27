const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Bem Vindo!!, para mais informações digite /help lá em cima ^");
});

app.get("/help", (req, res)=>{
    res.send("Não tem como te ajudar, me disgurpe, mas vc pode digitar /pneu");
});

app.get("/pneu", (req, res)=>{
    res.send("Bem Vinda à casa dos pneus, para ver mais 'pneus' digite /mais ");
});

app.get("/pneu/mais", (req, res)=>{
    res.send("pneuspneuspneuspneuspneuspneuspneuspneus\npneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneuspneus");
});

app.listen(3000, ()=> console.log("Servidor inicializado"));