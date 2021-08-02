  ul = document.getElementById("carrito-productos");
  
  const renderCarrito = async () => {
    //Obtiene los registros de la tabla carritos que estan asociados al id del usaurio
    let registrosCarrito = await carrito.getProducts();
    //Obtiene los datos del producto en cada registro y lo renderiza
    for(let i = 0; i < registrosCarrito.length; i++){
      producto = await carrito.getDataProductos(registrosCarrito[i].id_producto);
//      console.log(producto);
      li = document.createElement('li');
      ul.appendChild(li);
      li.className = "class','list-group-item d-flex justify-content-between lh-sm";
      div = document.createElement('div');
      li.appendChild(div);
      span = document.createElement('span');
      span.textContent = "$"+producto[0].precio;
      span.className = "text-muted";
      li.appendChild(span);
  
      button = document.createElement('button');
      button.textContent = "borrar";
      button.className = "btn-borrar";
      //Borra el registro de la bd con el id del registro
      button.setAttribute("onclick",'borrar('+ registrosCarrito[i].id_carrito +')');
      li.appendChild(button);
  
      h6 = document.createElement('h6');
      h6.className = "my-0"
      h6.textContent = producto[0].nombre;
      div.appendChild(h6)
      
      small = document.createElement('small');
      small.className = "text-muted"
      small.textContent = producto[0].id;
      div.appendChild(small);
    }
    let total = document.getElementById("total-cost");
    total.textContent = carrito.getTotal();
}
  renderCarrito();

const borrar = async (id_carrito) => {
  if(confirm("Seguro que deseas eliminar el producto?")){
    let borrar = await carrito.deleteProduct(id_carrito);
    let res = await borrar.json();
    alert(res);
    location.reload();
  } 
}

const comprar = async () => {
  if(confirm("Confirmar compra")){
    let resultado = await fetch('http://localhost:3000/compra/', {
      method: 'POST',
      body: JSON.stringify( {
            total: carrito.getTotal(),
            id_usuario: carrito.getIdUsuario()
          }),  
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })
    let res = await resultado.json();
    window.location.href = 'congratulations.html';
  } 
}