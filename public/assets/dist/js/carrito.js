class Carrito{
  constructor(productos, id_usuario) {
    if (Carrito._instance) {  //Ya existe carrito y actualiza los datos
        this.productos = productos;
        this.id_usuario = id_usuario;
        this.total = 0;
        return Carrito._instance
    }
    //Crea la instancia y agrega los datos
    Carrito._instance = this;

    this.productos = productos;
    this.id_usuario = id_usuario;
    this.total = 0;
  }


  async addProduct(id_producto, id_usuario, cant_producto){
    let carrito = {
      id_usuario: id_usuario,
      id_producto: id_producto,
      cant_producto: cant_producto
    }
    console.log(carrito);
    const resultado = await fetch('http://localhost:3000/carrito', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(carrito)
    });
//    console.log(this.productos);
    return resultado;
  }


  async deleteProduct(id_carrito){
    const resultado = await fetch('http://localhost:3000/carrito/'+id_carrito, {
      method: 'DELETE'
    });

    return resultado;
  }

  //Regresa id y cantidad de cada producto asociado al usuario
  async getProducts(){
    const resultado = await fetch('http://localhost:3000/carrito/'+this.id_usuario)
    let res = await resultado.json();
    return res;
  }

  async getDataProductos(idProducto){
    const resultado = await fetch('http://localhost:3000/productos/verProducto/'+ idProducto)
    let res = await resultado.json();
    this.total = this.total + res[0].precio
    return res;
  }

  getTotal(){
    return this.total;
  }
  getIdUsuario(){
    return this.id_usuario;
  }
}

//DECLARA CARRITO

let id_usuario = localStorage.getItem('id');

//Obtiene el carrito guardado del usuario
const usuarioCarrito = async (id) => {
  let result = await fetch('http://localhost:3000/carrito/'+id)
  let resultado = await result.json()
  return resultado;
}

let carrito = new Carrito(usuarioCarrito(id_usuario),id_usuario);


