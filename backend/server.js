const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/paises", (req, res) => {
    const filePath = path.join(_dirname, "data", "paises.json");
    const data = fs.readFileSync(filePath);
    res.json(JSON.parse(data));
});

app.get("/api/armamento", (req, res) => {
    const filePath = path.join(_dirname, "data", "armamento.json");
    const data = fs.readFileSync(filePath);
    res.json(JSON.parse(data));
});

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:${PORT}");
});