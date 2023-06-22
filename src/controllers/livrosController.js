import livros from "../models/Livro.js";


class LivroController {

    //listagem dos livros
    static listarLivros = (req, res) => {
        livros.find()  //encontre os livros
            .populate('autor')  //popule a propriedade autor q vem de outro schema
            .exec((err, livros)=>{
                 res.status(200).json(livros)
        })
    }

    //busca um livro especifico por ID
    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id) //encontre o livro pelo ID
                .populate("autor", "nome") //popula o autor vindo de outro schema mas so me retorne o nome
                .exec((err, livros)=>{
                    if(err){
                        res.status(400).send({message: `${err.message} - Id do livro não encontrado.` })
                    }else{
                        res.status(200).send(livros);
                    }
        })
    }

    //cadastro de um livro
    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body)
        livro.save((err)=> { //tentando salvar um livro no BD
            if(err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar livro.` }) //se der erro
            } else{
                res.status(201).send(livro.toJSON()) //se der bom
            }
            
        })         
    }

    //atualizar um livro baseado no id
    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        //nos parametros, id do livro que será substituido, conteudo que vai substituir
        livros.findByIdAndUpdate(id, {$set : req.body}, (err)=>{
            if(!err){
                return res.status(200).send({message:`Livro id:${id} atualizado com sucesso`});
            } else{
                res.status(500).send({message:err.message})
            }
        }) 
    }

    static excluirLivro = (req, res) => { 
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if (!err ) {
                res.status(200).send({message: `Livro excluido com sucesso.`})
            } else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarLivrosPorEditora =(req, res) => {
        const editora = req.query.editora;

        livros.find({"editora": editora}, {}, //encontre a editora passada no parametro
        (err, livros) => {
            res.status(200).send(livros)
        })

    }
}


export default LivroController;