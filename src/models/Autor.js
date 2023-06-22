import mongoose from "mongoose";

const autorSchema = new mongoose.Schema( //para servir de modelo
    {
        id: { type: String },
        nome: { type: String, required: true },
        nacionalidade: { type: String }
    },
    {
        versionKey:false   
    }
);


const autores = mongoose.model('autores', autorSchema); //associando uma propriedade ao schema

export default autores;