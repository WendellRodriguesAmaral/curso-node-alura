import app from './src/app.js'
const port = process.env.PORT || 3002; //caso o projeto rode em algum servidor,ele pegar a porta q estiver configurada la


app.listen(port, ()=> console.log('Escutando na porta ' + port));
 