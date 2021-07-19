require('dotenv').config();
const fetch = require('node-fetch');

const getTrends = async () => {
  try {
      const data = await fetch(process.env.ENDPOINT_TRENDS);
      return data.json();
  } catch (error) {
      console.log("Error al obtener los tredns service");
      throw new Error({error: "Error al obtebner los trends service"});
  }
}

const getCategoryProducts = async (category) => {
    try {
      const data = await fetch(process.env.ENDPOINT_CATEGORY_PRODUCTS + category);;
      return data.json();
  } catch (error) {
      throw new Error({error: "Error al obtener los productos de la categoria"});
  }
}


module.exports = {
  getCategoryProducts, getTrends
}