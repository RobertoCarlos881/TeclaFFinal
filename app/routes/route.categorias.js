const categoriasController = require('../controller/controller.categorias');
const express = require('express');
const router = express.Router();



//Obtener todas las categorias
router.get('/', async (req,res) => {
    try {
        let resultado = await categoriasController.listarCategorias();
        console.log("Categorias obtenidas correctamente");
        res.status(200).json(resultado);
    }catch (error){
        console.log(error)
        res.status(400).json("Error al obtener los productos de la categoria")
    }        
}) 


module.exports = router;