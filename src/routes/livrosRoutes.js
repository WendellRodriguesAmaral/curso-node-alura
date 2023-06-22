import  express from "express"; 
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros" , LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivrosPorEditora) //tomar cuidado na sequencia de rotas, tem q ser da mais especifica pra menos especifica
    .get("/livros/:id",LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)


export default router;

