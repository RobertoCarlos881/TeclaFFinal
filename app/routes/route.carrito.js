const productosController = require('../controller/controller.productos');
const { validarIdProducto } = require('../middlewares/midd.productos');
const express = require('express');
const router = express.Router();
const carritoController = require('../controller/controller.carrito');



//Agregar producto al carrito
    router.post('/', async (req,res)=>{
        console.log("etttra")
        const carrito = req.body;
        console.log(carrito)
        try{
            let resultado =  await carritoController.agregarRegistroCarrito(carrito);
            res.json(resultado)
        }catch(error){
            console.log(error)
            res.status(400).send('No se pudo agregar el producto al carrito')  
        }
    })


    //Ver un producto por su id
    router.get('/verProducto:idCarrito', validarIdProducto, async (req,res) => {
        try {
            let id = req.params.idProducto;
            let resultado = await carritoController.obtenerProducto(id);
            res.json(resultado)
        }catch (error){
            console.log(error)
            res.status(400).json("Error al cargar la vista de editar producto")
        }        
    })    


    //Editar un producto
    router.put('/:idCarrito', validarIdProducto, async (req,res)=>{
        let nuevoProducto = req.body;
        let id = req.params.idProducto;
        try {
            let resultado = await carritoController.editarProducto(id, nuevoProducto);
            res.json(resultado);
        } catch (error) {
            res.status(400).json("Error al editar el producto")
        }
    })

    //Borrar producto del carrito
    router.delete('/:idCarrito', validarIdProducto, async (req,res)=>{
        try {
            let id = req.params.idProducto;
            console.log(id)
            const data = await carritoController.borrarRegistroCarrito(id);
            res.json(data);
        } catch (error) {
            res.status(400).json("Error al borrar el registro del carrito")
        }
    })

    module.exports = router;