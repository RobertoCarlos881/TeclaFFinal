//Importo los modulos necesarios
const Productos = require('../models/model.producto')

module.exports.agregarProducto = async (producto)=> {
  let productos = new Productos(producto);
  try {
    let resultado = await productos.agregar();
    if (resultado) {
        return 'Alta de producto exitosa'
    }else {            
        throw new Error ('Error en la creacion del producto')
    }
  }catch (err) {
    console.log(err)
    throw new Error ('Error en la creacion del producto')
  }
}


module.exports.listaProductosCategoria = async (idCategoria)=>{
  let productos = new Productos();
  try {
    let resultado = await productos.productosCategoria(idCategoria);
    return resultado
  }catch (err){
    console.log(err)
    throw new Error ('Ocurrio un error en la consulta');
  }
}


module.exports.editarProducto = async (idProducto) => {
  let productos = new Productos(producto);


}
