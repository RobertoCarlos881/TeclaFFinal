//Importo los modulos necesarios
const { Carrito } = require('../models/model.carritos')
const { DetalleOrden } = require('../models/model.detalle_orden')
const { Ordenes } = require('../models/model.ordenes')

module.exports.crearOrden = async (pedido)=> {
  try {
    let resultado = await Ordenes.create({
      id_usuario: pedido.id_usuario,
      estatus: "En preparacion",
      monto_total: pedido.total
    });
    if (resultado) {
        return resultado;
    }else {            
        throw new Error ('Error al agregar el producto al carrito');
    }
  }catch (err) {
    console.log(err)
    throw new Error ('Error al agregar el producto al carrito');
  }
}


//OBTIENE LOS DATOS DE LOS PRODUCTOS
module.exports.carritoToDb = async (id_orden, id_usuario)=>{
  try {
    let carrito = await Carrito.findAll({
      where: {id_usuario: id_usuario}
    })
    for(let i = 0; i < carrito.length; i++){
      console.log(carrito[i]);
      console.log("ENSSSSSSS");
      DetalleOrden.create({
        id_orden: id_orden,
        id_producto: carrito[i].dataValues.id_producto,
        cantidad: carrito[i].dataValues.cant_producto,
        monto: "2"
      });
      Carrito.destroy({
        where: {id_usuario: id_usuario}
      });
  }
    return carrito;
  }catch (err){
    console.log(err)
    throw new Error ('Ocurrio un error en la consulta');
  }
}


module.exports.obtenerPedidos = async (id_usuario)=>{
  try {
    const resultado = await Ordenes.findAll({
       where: { id_usuario: id_usuario} 
    })
    return resultado;
  }catch (err){
    console.log(err)
    throw new Error ('Ocurrio un error al borrar el producto del carrito');
  }
}


