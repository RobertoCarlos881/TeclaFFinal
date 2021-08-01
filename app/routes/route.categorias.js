const categoriasController = require('../controller/controller.categorias');
const { validarIdProducto } = require('../middlewares/midd.productos');
const express = require('express');
const router = express.Router();



//Obtener todas las categorias
router.get('/', async (req,res) => {
    try {
        let resultado = await productosController.listaCategorias("*");
        console.log("Categorias obtenidas correctamente");
        res.status(200).json(resultado);
    }catch (error){
        console.log(error)
        res.status(400).json("Error al obtener los productos de la categoria")
    }        
}) 


module.exports = router;