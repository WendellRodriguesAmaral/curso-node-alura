//este arquivo começa com letra maiuscula porque representa um modelo da entidade livro do BD
import mongoose  from "mongoose";

const livroSchema = new mongoose.Schema({
    id:{type:String}, //criado automaticamente por isso nao precisa do required
    titulo:{type:String, required:true},
    autor:{type:mongoose.Schema.Types.ObjectId, ref: 'autores', required:true}, //"type" será o ID de um outro objeto, e "ref" fala qual obg vai usar
    editora:{type:String, required:true},
    numeroPaginas:{type:Number}
})

const livros = mongoose.model('livro', livroSchema); //nome do meu banco (se não existir ele cria dinamicamente)

export default livros;