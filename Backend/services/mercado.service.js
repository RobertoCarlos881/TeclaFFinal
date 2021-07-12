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

const getCategoriaProducts = async (category) =>{
    try {
        const mercado = new MercadoService(process.env.ENDPOINT_CATEGORY_PRODUCTS + category);
        const data = await mercado.fetch();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = {
    getTrends,
    getCategoriaProducts
}