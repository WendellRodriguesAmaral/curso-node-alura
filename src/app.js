import  express from "express"; 
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"
import routes from "./routes/index.js"

//prevendo o erro e fazendo um bind do log do mongo e mostrando no console
db.on("error", console.log.bind(console, 'Erro de conexão'));

//"abrindo" a conexão com o banco uma vez
db.once("open", () =>{
    console.log("Conexao feita com sucesso")
})

const app = express(); //criando uma instancia de express
app.use(express.json());//possibilita a conversão do dado recebido nos 'post'

routes(app);


export default app 

