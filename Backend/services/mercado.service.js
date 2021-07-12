const { MercadoService } = require('../modules/mercado');

const getTrends = async () =>{
    try {
        const mercado = new MercadoService(process.env.ENDPOINT_TRENDS);
        const data = await mercado.fetch();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

const getCategoryProducts = async (category) =>{
    try {
  //      console.log(category)
        console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
//        console.log(`${process.env.ENDPOINT_CATEGORY_PRODUCTS}${category}`)
        const mercado = new MercadoService(process.env.ENDPOINT_CATEGORY_PRODUCTS + category);
        const data = await mercado.fetch();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = {
    getTrends,
    getCategoryProducts
}