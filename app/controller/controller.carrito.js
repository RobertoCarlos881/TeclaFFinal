//Importo los modulos necesarios
const { Carrito } = require('../models/model.carritos')

module.exports.agregarRegistroCarrito = async (carrito)=> {
  try {
    let resultado = await Carrito.create({
      id_producto: carrito.id_producto,
      id_usuario: carrito.id_usuario,
      cant_producto: carrito.cant_producto
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

module.exports.obtenerProducto = async (idProducto)=>{
  try {
    const resultado = await Carrito.findAll({
      where: { id_producto: idProducto }
    })
    return resultado
  }catch (err){
    console.log(err)
    throw new Error ('Ocurrio un error en la consulta');
  }
}

module.exports.editarProducto = async (idProducto, producto) => {
  try {
    console.log("entro");
    console.log(producto);
    console.log(idProducto);

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


