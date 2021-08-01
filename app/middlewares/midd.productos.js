const { Producto } = require('../models/model.productos')

const validarIdProducto = async (req,res,next) =>{
    try {
      let id = req.params.idProducto;
      const resultado = await Producto.findAll({
        where: { id_producto: id }
      })
      if (resultado == "") {
        return res.status(400).json('El id no existe')      
      } else {
        next();
      }
    }catch (error) {
        console.log(error)
        throw new Error (error)
    }
  }
  
  module.exports = { validarIdProducto };