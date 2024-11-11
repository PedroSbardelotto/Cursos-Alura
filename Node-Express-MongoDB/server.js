// import http from "http";
import app from "./src/app"
const PORT = 3000;

const rotas = {
    "/": "Express APi ",
    "/Livros": "Entrei na rota livros",
    "/Autores": "Entrei na rota aturores"
}

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type": "text/plain"});
    res.end(rotas[req.url]);
});

server.listen(PORT, ()=>{
    console.log("servidor escutando!");
});