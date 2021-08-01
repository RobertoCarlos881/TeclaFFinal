//Importo los modulos necesarios
const { Categorias } = require('../models/model.categorias')


module.exports.listarCategorias = async ()=>{
  try {
    const resultado = await Categorias.findAll();  
    return resultado
  }catch (err){
    console.log(err)
    throw new Error ('Ocurrio un error en la consulta');
  }
}

