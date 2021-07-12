class Producto {
  constructor(id,nombre, precio, stock, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.precio= precio;
    this.stock = stock;
    this.descripcion = descripcion;
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
  getStock(){
    return this.stock;
  }
  getDescripcion(){
    return this.descripcion;
  }




}