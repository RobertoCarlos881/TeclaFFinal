//********************************************* ESTE ARCHIVO NO SE USA, NO LO  */
//********************************************* BORRO POR SI SE USA LUEGO  */


class Carrito{
    constructor() {
      this.productos = [];
      this.total = 0;
    }
  
    addProduct(producto){
        this.productos.push(producto);
        this.total = total + producto.price;
        console.log("Se agrego el producto");
    }

      deleteProduct(producto){
      let index = this.productos.indexOf(producto);
      this.productos.splice(index, 1);
      this.total = total + producto.price;
      console.log("Se removio el producto");
    }
    
    getProducts(){
      return this.productos;
    }
  
    getTotal(){
      return this.total;
    }
  
}

class Producto {
  constructor(id,nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio= precio;
    this.imagen = imagen;
  }
  getId(){
    return this.id;
  }

  getNombre(){
    return this.nombre;
  }
  getPrecio(){
      return this.precio;
  }
  getImagen(){
    return this.imagen;
  }
}

const carrito = new Carrito();

module.exports = {
  Producto,
  carrito
}