const mercadoService = require('../services/mercado.service');

module.exports = (app) =>{

    app.get('/trends', async (req,res)=>{
        try {
            const data = await mercadoService.getTrends();
            console.log("tredns obtenidos correctamente app");
            res.status(200).json(data);
        } catch (error) {
            console.log("Error al obtener los tredns app");
            res.status(400).json("Error al obtener los trends app")
        }
    })
 
    app.get('/products/:category', async (req,res) => {
        try {
            const products_category = await mercadoService.getCategoryProducts(req.params.category);
            console.log("Categoria " + req.params.category);
            res.status(200).json(products_category);
        } catch (error) {
            console.log("Error al obtener los productos de la categoria")
            res.status(400).json("Error al obtener los productos de la categoria")
        }
    })    

}
