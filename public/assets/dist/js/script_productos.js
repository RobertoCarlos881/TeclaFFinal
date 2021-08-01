/*!
* Start Bootstrap - Shop Homepage v5.0.2 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project  


const getProducts = async (categoria) => {
  let result = await fetch('http://localhost:3000/productos/'+categoria)
  let resultado = await result.json()
  return resultado;
}

const showProducts = async (categoria) => {
  console.log("entro a script_productos")
  let data = await getProducts(categoria)
  const cards = document.getElementById('cards');
  const templateCard = document.getElementById('template-card').content;
  const fragment = document.createDocumentFragment();

  data.forEach(data => {
    templateCard.querySelector('div').setAttribute("id",data.id_producto);
    templateCard.querySelector('img').setAttribute("src","data.thumbnail");
    templateCard.querySelector('h5').textContent = data.nombre;
    templateCard.querySelector('p').textContent = `${data.precio}`;
    templateCard.querySelector('button').setAttribute('onclick','addToCart("'+data.id_producto+'");');
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
        

}


function renderProducts(){
  const urlParams = new URLSearchParams(window.location.search);
  showProducts(urlParams.get('categoria'));
}

renderProducts();

localStorage.setItem('id','1')
let carrito = new Carrito([],localStorage.getItem('id'));

function addToCart(id){
  console.log("entro")
  carrito.addProduct(id_usuario)
 /* if(!localStorage.getItem('productos')){
  localStorage.setItem('productos',productos);
  } else{
  productos = JSON.parse(localStorage.getItem('productos'));
  }
*/
  item = document.getElementById(id);
  console.log(item)
  productos.push({
    id: id,
    nombre: item.querySelector('h5').textContent,
    precio: item.querySelector('p').textContent
  })
  console.log(productos);
  localStorage.setItem('productos',JSON.stringify(productos));
  alert("Producto añadido al carrito");
}