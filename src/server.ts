import express from "express";

const app = express();

/**
 * ?GET      => Busca de uma informação
 * ?POST     => Inserir (criar) uma informação
 * ?PUT      => Alterar uma informação
 * ?DELETE   => Remover um dado/informação
 * ?PACTH    => Alterar uma informação específica
 
* *Primeiro parâmetro que será enviado será um recurso = rota
* *Segundo parâmetro separado por virgula será uma função que recebe "Request" e "Response" 

* ?REQUEST => Entrando
* ?RESPONSE => Saindo 
*/

app.get("/test", (request, response) => {
    return response.send("Olá NLW");
}); 

app.post("/test-post", (request, response) =>{
    return response.send("Olá NLW test-post");
})

// http://localhost:3080
app.listen(3080,() => console.log("Server is running NLW"));