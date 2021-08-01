const productosController = require('../controller/controller.productos');
const { validarIdProducto } = require('../middlewares/midd.productos');
const express = require('express');
const router = express.Router();
const controllerCategorias = require('../controller/controller.categorias');


//Render ver productos (o por categoria pasando ?categoria=id)
router.get('/ver', async (req,res) => {
    try {
        let categoria = req.query.categoria;
        if(categoria == undefined){
            categoria = "*";
        }
        let resultado = await productosController.listaProductosCategoria(categoria);
        res.render('producto_index.ejs', {res :resultado});
    }catch (error){
        res.status(400).json("Error al obtener los productos de la categoria")
    }        
}) 

//Render agregar producto
router.get('/agregar', async (req,res) => {
    let categorias = await controllerCategorias.listarCategorias();
    res.render('producto_crear.ejs', {categoria: categorias});
})

//Render vista de editar producto
router.get('/editar/:idProducto', validarIdProducto, async (req,res)=>{
    let id = req.params.idProducto;
    try {
        let productos = await productosController.obtenerProducto(id);
        let categorias = await controllerCategorias.listarCategorias();
        res.render('producto_editar.ejs', {productos: productos, categoria: categorias});
    } catch (error) {
        res.status(400).json("Error al cargar la pagina")
    }
})


//Agregar producto
    router.post('/agregar', async (req,res)=>{
        const producto = req.body;
        try{
            let resultado =  await productosController.agregarProducto(producto);
            res.json(resultado)
        }catch(error){

            res.status(400).send('Ocurrio un error inesperado')  
        }
    })
    
    //Obtener todos los productos (o por categoria pasando ?categoria=id)
    router.get('/:categoria', async (req,res) => {
        try {
          //  let categoria = req.query.categoria;
            let categoria = req.params.categoria;
            if(categoria == undefined){
                categoria = "*";
            }
            let resultado = await productosController.listaProductosCategoria(categoria);
            res.status(200).json(resultado);
        }catch (error){
            res.status(400).json("Error al obtener los productos de la categoria")
        }        
    }) 

    //Obtiene un producto por su id
    router.get('/verProducto/:idProducto', validarIdProducto, async (req,res) => {
        try {
            let id = req.params.idProducto;
            let resultado = await productosController.obtenerProducto(id);
            res.json(resultado)
        }catch (error){
            res.status(400).json("Error al cargar la vista de editar producto")
        }        
    })    


    //Editar un producto
    router.put('/:idProducto', validarIdProducto, async (req,res)=>{
        let nuevoProducto = req.body;
        let id = req.params.idProducto;
        try {
            let resultado = await productosController.editarProducto(id, nuevoProducto);
            res.json(resultado);
        } catch (error) {
            res.status(400).json("Error al editar el producto")
        }
    })

    //Borrar producto
    router.delete('/:idProducto', validarIdProducto, async (req,res)=>{
        try {
            let id = req.params.idProducto;
            const data = await productosController.borrarProducto(id);
            res.json(data);
        } catch (error) {
            res.status(400).json("Error al borrar el producto")
        }
    })

    module.exports = router;