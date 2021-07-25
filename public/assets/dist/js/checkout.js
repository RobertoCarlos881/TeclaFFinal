  ul = document.getElementById("carrito-productos");
  productos = JSON.parse(localStorage.getItem('productos'));

  console.log(productos);
  Object.values(productos).forEach(producto =>{
    li = document.createElement('li');
    ul.appendChild(li);
    li.className = "class','list-group-item d-flex justify-content-between lh-sm";
    div = document.createElement('div');
    li.appendChild(div);
    span = document.createElement('span');
    span.textContent = producto.precio;
    span.className = "text-muted";
    li.appendChild(span);

    a = document.createElement('button');
    a.textContent = "borrar";
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

//    button = document.createElement('button');
//    div.appendChild(button);

  })
