import autores from "../models/Autor.js";


class AutorController {

    //listagem dos autores
    static listarAutores = (req, res) => {
        autores.find((err, autores)=>{
            res.status(200).json(autores)
        })
    }

    //busca um Autor especifico por ID
    static listarAutorPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores)=>{
            if(err){
                res.status(400).send({message: `${err.message} - Id do Autor não encontrado.` })
            }else{
                res.status(200).send(autores);
            }
        })
    }

    //cadastro de um Autor
    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body)
        autor.save((err)=> { //tentando salvar um Autor no BD
            if(err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar Autor.` }) //se der erro
            } else{
                res.status(201).send(autor.toJSON()) //se der bom
            }
            
        })         
    }

    //atualizar um Autor baseado no id
    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        //nos parametros, id do Autor que será substituido, conteudo que vai substituir
        autores.findByIdAndUpdate(id, {$set : req.body}, (err)=>{
            if(!err){
                return res.status(200).send({message:`Autor id:${id} atualizado com sucesso`});
            } else{
                res.status(500).send({message:err.message})
            }
        }) 
    }

    static excluirAutor = (req, res) => { 
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if (!err ) {
                res.status(200).send({message: `Autor excluido com sucesso.`})
            } else{
                res.status(500).send({message: err.message})
            }
        })
    }
}


export default AutorController;