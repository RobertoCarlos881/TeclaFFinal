const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./app/db/db.conexion');
const cors = require('cors');
const Usuario = require('./app/db/usuario');


//Configuraciones globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(cors());

//helpers
const general = require('./app/helpers/general.helper');
const usuarioHelper = require('./app/helpers/usuario.helper');

//Services
const { corsOption } = require('./app/middlewares/midd.index');

const sincronizarTablas = async () => {
    await Usuario.sync({alter: true});
}

//iniciamos servidor
async function inicioServer() {
    try {
        await sequelize.authenticate();
        //await sincronizarTablas();
        console.log('Conexión estabilizada correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en htt://${process.env.HOST}:${process.env.PORT}`);
        });
    
    } catch (error) {
        console.error('No se pudo conectar correctamente con la Base de datos:', error);
     }
}

//ROUTES
app.use('/productos', require('./app/routes/route.productos'));
app.use('/categorias', require('./app/routes/route.categorias'));
app.use('/carrito', require('./app/routes/route.carrito'));
app.use('/usuarios', require('./app/routes/route.usuarios'));
app.use('/compra', require('./app/routes/route.ordenes'));
app.use('/api', usuarioHelper);
app.use(general);

inicioServer();


