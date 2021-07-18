const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./db/conexion');
const cors = require('cors');


//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(cors());

//Services
const { corsOption } = require('./middlewares/index');
const { getTrends, getCategoryProducts } = require("./services/mercado.service")


//iniciamos nuestro servidor
async function inicioServer() {
    try {
        await sequelize.authenticate();
        console.log('Conección estabilizada correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en htt://${process.env.HOST}:${process.env.PORT}`);
        });
      } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
      }
}

inicioServer();

/*
app.listen(process.env.PORT, ()=> {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
})
*/

app.get('/trends', async (req,res)=>{
    try {
        const trends = await getTrends();
        res.status(200).json(trends);
    } catch (error) {
        res.status(400).json("Error al obtener los trends")
    }
})

app.get('/products/:category', async (req,res) => {
    try {
        console.log(req.params.category)
        const products_category = await getCategoryProducts(req.params.category);
        res.status(200).json(products_category);
    } catch (error) {
        res.status(400).json("Error al obtener los productos de la categoria")
    }
})

/*app.get('/Frontend/index.html', async (req,res)=>{
    try {
        console.log("entro a get")
        window.location.href = 'http://www.google.com'; //Will take you to Google.
        res.status(200).json({2: 20});
    } catch (error) {
        res.status(400).json("Error al obtener los trends")
    }
})

*/
