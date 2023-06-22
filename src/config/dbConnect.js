import mongoose from "mongoose";

//fazendo a conexão com o bd que criei no atlas
mongoose.connect(`mongodb+srv://wendellrodrigues:123@curso-alura.uy02ud2.mongodb.net/alura-node`);

//salvando numa variavel de conexão
let db = mongoose.connection;

export default db;