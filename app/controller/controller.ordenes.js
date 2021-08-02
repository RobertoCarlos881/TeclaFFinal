//Importo los modulos necesarios
const { Carrito } = require('../models/model.carritos')
const { Producto } = require('../models/model.productos')
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



module.exports.listaProductosCategoria = async (categoria2)=>{
  try {
    if(categoria2 == "*"){
      const resultado = await Carrito.findAll();  
      return resultado
    } else{
      const resultado = await Carrito.findAll({
        where: { categoria: categoria2 }
      })
      return resultado
    }
  }catch (err){
    console.log(err)
    throw new Error ('Ocurrio un error en la consulta');
  }
}

module.exports.obtenerProductoUsuario2 = async (idUsuario)=>{
  try {

/*    resultado = await Carrito.hasMany(Producto,{
      foreignKey: {
        name: 'id_producto'
      }
    })
    return resultado;
    */
  }catch (err){
    console.log(err)
    throw new Error ('Ocurrio un error en la consulta');
  }
}

//OBTIENE EL ID DE LOS PRODUCTOS ASOCIADOS AL USUARIO
module.exports.obtenerProductoUsuario = async (idUsuario)=>{
  try {
    const resultado = await Carrito.findAll({
      attributes: ['id_producto', 'cant_producto','id_carrito'],
      where: { id_usuario: idUsuario }
    })
   return resultado;
  }catch (err){
    console.log(err)
    throw new Error ('Ocurrio un error en la consulta');
  }
}

//OBTIENE LOS DATOS DE LOS PRODUCTOS
module.exports.productosDatos = async (carritoProductos)=>{
  try {
    console.log(JSON.stringify(carritoProductos))
    let productos = [];
    carritoProductos.forEach(producto =>{
      console.log("ENTRO " + producto.id_producto);
      let resultado = getProducto(producto);
      productos.push(JSON.stringify(resultado))
      JSON.stringify(productos)
  //    console.log(resultado)
    })
    return productos;
  }catch (err){
    console.log(err)
    throw new Error ('Ocurrio un error en la consulta');
  }
}

module.exports.getProducto = (id) =>{
  console.log("ENTRO ");
  const resultado =  Producto.findOne({
    where: { id_producto: id}
  })
  console.log(resultado)
  return resultado;
}


module.exports.editarProducto = async (idProducto, producto) => {
  try {
    console.log(producto);
    const resultado = await Carrito.update({
      categoria: producto.categoria,
      nombre: producto.nombre,
      precio: producto.precio,
      stock: producto.stock,
      descripcion: producto.descripcion
      }, {
        where: {
            id_producto: idProducto,
        }
      }
    );

    if (resultado) {
      return 'Producto Editado con exito'
    }else {            
        throw new Error ('Error al editar el producto')
    }
  } catch (error) {
    console.log(error)
    throw new Error ('Error al editar el producto')
  }
}

module.exports.borrarRegistroCarrito = async (id)=>{
  try {
    const resultado = await Carrito.destroy(
      { where: { id_carrito: id} 
    })
    return "Producto eliminado con exito del carrito";
  }catch (err){
    console.log(err)
    throw new Error ('Ocurrio un error al borrar el producto del carrito');
  }
}


