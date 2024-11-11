import express from "express";
const app = express();

app.get("/",(req, res)=> {
    req.status(200).send(" curso de node.js");
});

export default app;