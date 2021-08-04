const carritoController = require('../controller/controller.carrito');
const { validarIdProducto } = require('../middlewares/midd.productos');
const express = require('express');
const router = express.Router();
const ordenenesController = require('../controller/controller.ordenes');



//Crea una nueva orden (compra)
    router.post('/', async (req,res)=>{
        const pedido = req.body;
        try{
            let resultado =  await ordenenesController.crearOrden(pedido);

            let id_orden = resultado.dataValues.id_orden;
            let id_usuario = resultado.dataValues.id_usuario;
            //Guarda carrito actual del usuario en tabla de detalle_orden
            let carritoUser = await ordenenesController.carritoToDb(id_orden, id_usuario);

            res.json(resultado)
        }catch(error){
            console.log(error)
            res.status(400).send('Error al procesar el pedido')  
        }
    })
    //Obtener todos los productos (o por categoria pasando ?categoria=id)
    router.get('/:id_usuario', async (req,res) => {
        try {
            let id_usuario = req.params.id_usuario;
            let resultado = await ordenenesController.obtenerPedidos(id_usuario);
            res.json(resultado)
        } catch (error){
            console.log(error)
            res.status(400).send('Error al obtener los pedidos')              
        }
    })
    

    module.exports = router;