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










class Carrito{
  constructor(productos) {
    this.productos = productos;
    this.total = this.setTotal();
  }

  addProduct(producto){
      this.productos.push(producto);
      localStorage.setItem('productos', JSON.stringify(this.productos)); 
      this.total = total + producto.precio;
  }

  deleteProduct(producto){
    let index = this.productos.indexOf(producto);
    this.productos.splice(index, 1);
    this.total = total - producto.precio;
  }
  
  getProducts(){
    return this.productos;
  }

  getTotal(){
    return this.total;
  }
  setTotal() {
      let total = 0;
      this.productos.forEach(p => {
          total += p.precio;            
      });
      return total;
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

function addToCart(){
console.log(carrito.getProducts());
const item = new Producto("12", "sebas","50", "jpg");
carrito.addProduct(item);
}


//const carrito = new Carrito();
