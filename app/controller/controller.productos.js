//Importo los modulos necesarios
const { Producto } = require('../models/model.productos')

module.exports.agregarProducto = async (producto)=> {
  try {
    let resultado = await Producto.create({
      categoria: producto.categoria,
      nombre: producto.nombre,
      precio: producto.precio,
      stock: producto.stock,
      descripcion: producto.descripcion
    });
    if (resultado) {
        return resultado;
    }else {            
        throw new Error ('Error en la creacion del producto 2')
    }
  }catch (err) {
    console.log(err)
    throw new Error ('Error en la creacion del producto')
  }
}



module.exports.listaProductosCategoria = async (categoria2)=>{
  try {
    if(categoria2 == "*"){
      const resultado = await Producto.findAll();  
      return resultado
    } else{
      const resultado = await Producto.findAll({
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
    const resultado = await Producto.findAll({
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

    const resultado = await Producto.update({
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

module.exports.borrarProducto = async (idProducto)=>{
  try {
    const resultado = await Producto.destroy(
      { where: { id_producto: idProducto} 
    })
    return "Producto eliminado con exito";
  }catch (err){
    console.log(err)
    throw new Error ('Ocurrio un error al borrar el producto');
  }
}


