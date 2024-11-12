import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: " O Senhor Dos Anéis"
    },
    {
        id: 2,
        titulo: " O Hobbit"
    }
]
app.get("/", (req, res) => {
    res.status(200).send(" curso de node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

export default app;