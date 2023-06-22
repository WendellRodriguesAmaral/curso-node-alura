import mongoose from "mongoose";

//fazendo a conexão com o bd que criei no atlas
mongoose.connect(``);

//salvando numa variavel de conexão
let db = mongoose.connection;

export default db;
