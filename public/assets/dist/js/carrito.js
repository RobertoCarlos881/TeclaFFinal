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

  addProduct2(producto){
    this.productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(this.productos)); 
    this.total = total + producto.precio;
  }

  async deleteProduct(id_carrito){
    const resultado = await fetch('http://localhost:3000/carrito/'+id_carrito, {
      method: 'DELETE'
    });

    return resultado;
  }

  deleteProduct2(producto){
    let index = this.productos.indexOf(producto);
    this.productos.splice(index, 1);
    this.total = total - producto.precio;
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

}

//DECLARA CARRITO

localStorage.setItem('id','1');
let id_usuario = localStorage.getItem('id');

//Obtiene el carrito guardado del usuario
const usuarioCarrito = async (id) => {
  let result = await fetch('http://localhost:3000/carrito/'+id)
  let resultado = await result.json()
  return resultado;
}

let carrito = new Carrito(usuarioCarrito(id_usuario),id_usuario);



/*
document.addEventListener('DOMCContentLoaded',()=>{
  if(localStorage.getItem('productos')){
      productos = JSON.parse(localStorage.getItem('productos'));
      renderCarrito(); 
  }
});



const renderCarrito = ()=>{    
  divCarrito = document.getElementById("carrito-productos");
  divCarrito.innerHTML ="";
  productos = JSON.parse(localStorage.getItem('productos'));
  let total = 0; 
  console.log(productos);
  productos.forEach(producto =>{
    li = document.createElement('li');
    divCarrito.appendChild(li);
    li.className = "list-group-item d-flex justify-content-between lh-sm";
    div = document.createElement('div');
    li.appendChild(div);
    span = document.createElement('span');
    span.textContent =  producto.precio;
    span.className = "text-muted";
    li.appendChild(span);

    a = document.createElement('button');
    a.textContent = "borrar";
    a.setAttribute('onclick','borrarProducto("'+producto.id+'");')
    a.className = "btn-borrar";
    li.appendChild(a);

    h6 = document.createElement('h6');
    h6.className = "my-0"
    h6.textContent = producto.nombre;
    div.appendChild(h6)
    
    small = document.createElement('small');
    small.className = "text-muted"
    small.textContent = producto.id;
    div.appendChild(small);

    total = total + Number(producto.precio);
  })

  document.getElementById("total-cost").textContent = total
}

renderCarrito();


function borrarProducto(id){
  productos = JSON.parse(localStorage.getItem('productos'));
  for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].id)
    if (id === productos[i].id) {
        productos.splice( i, 1);
        i = productos.length+1;
    }
  }
  localStorage.setItem('productos', JSON.stringify(this.productos)); 
  
  renderCarrito()
  alert("Producto eliminado");
}


*/

