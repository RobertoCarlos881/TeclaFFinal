const productosController = require('../controller/controller.productos');
const { validarIdProducto } = require('../middlewares/midd.productos');
const express = require('express');
const router = express.Router();
const carritoController = require('../controller/controller.carrito');



//Agregar producto al carrito
    router.post('/', async (req,res)=>{
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


    //Ver productos de un usuario por su id
    router.get('/:idUsuario', async (req,res) => {
        try {
            let id = req.params.idUsuario;
            let resultado = await carritoController.obtenerProductoUsuario(id);
            res.json(resultado);
/*            let idProductos = await carritoController.obtenerProductoUsuario(id);
            let productos =[];
            idProductos.forEach(producto => {
                let resultado = carritoController.getProducto(producto.id_producto);
                productos.push(JSON.stringify(resultado))
            })
            res.json(JSON.stringify(productos))
*/
        }catch (error){
            console.log(error)
            res.status(400).json("Error al obtener el carrito del usuario")
        }        
    })    


    //Editar un producto
    router.put('/:idCarrito', validarIdProducto, async (req,res)=>{
        let nuevoProducto = req.body;
        let id = req.params.idCarrito;
        try {
            let resultado = await carritoController.editarProducto(id, nuevoProducto);
            res.json(resultado);
        } catch (error) {
            res.status(400).json("Error al editar el producto")
        }
    })

    //Borrar producto del carrito
    router.delete('/:idCarrito', async (req,res)=>{
        try {
            let id = req.params.idCarrito;
            console.log(id)
            const data = await carritoController.borrarRegistroCarrito(id);
            res.json(data);
        } catch (error) {
            res.status(400).json("Error al borrar el registro del carrito")
        }
    })

    module.exports = router;