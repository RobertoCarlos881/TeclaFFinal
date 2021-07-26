const productosService = require('../services/service.productos');

module.exports = (app) =>{

    app.post('/agregarProducto', async (req,res)=>{
        let producto = req.body;
        try{
            let resultado = await productosService.agregarProducto(producto);
            res.json(resultado)
        }catch(error){
            console.log(error)
            res.status(400).send('Ocurrio un error inesperado')  
        }
    })
    
    app.get('/productos/:categoria', async (req,res) => {
        try {
            let resultado = await productosService.listaProductosCategoria(req.params.categoria);
            console.log("Productos de la categoria " + req.params.categoria +" obtenidos correctamente");
            res.json(resultado);
        }catch (error){
            console.log(error)
            res.status(400).json("Error al obtener los productos de la categoria")
        }        
    })    

    app.put('/editarProducot/:idProducto', async (req,res)=>{
        try {
            const data = await productosService.editarProducto(req.params.idProducto);
            res.json(data);
        } catch (error) {
            console.log("Error al obtener los tredns app");
            res.status(400).json("Error al obtener los trends app")
        }
    })

    app.delete('/borrarProducto/:idProducto', async (req,res)=>{
        try {
            const data = await mercadoService.getTrends();
            console.log("tredns obtenidos correctamente app");
            res.json(data);
        } catch (error) {
            console.log("Error al obtener los tredns app");
            res.status(400).json("Error al obtener los trends app")
        }
    })

}
