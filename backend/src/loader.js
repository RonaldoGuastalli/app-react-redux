//para o server
const server= require('./config/server')

//para BD - MongoDB
require('./config/database')

// referente as rotas
require('./config/routes')(server)