/*!
* Start Bootstrap - Shop Homepage v5.0.2 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


const getProducts = async (category) => {
  let result = await fetch('http://localhost:8080/products/'+category)
  let resultado = await result.json()
  return resultado;
}

const showProducts = async (category) => {
  console.log("entro2")
  let data = await getProducts(category)
  const cards = document.getElementById('cards');
  const templateCard = document.getElementById('template-card').content;
  const fragment = document.createDocumentFragment();

  data.results.forEach(data => {
    templateCard.querySelector('div').setAttribute("id",data.id);
    templateCard.querySelector('img').setAttribute("src",data.thumbnail);
    templateCard.querySelector('h5').textContent = data.title;
    templateCard.querySelector('p').textContent = `${data.price}`;
    templateCard.querySelector('button').setAttribute('onclick','addToCart("'+data.id+'");');
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
        

}


function renderProducts(category){
  const urlParams = new URLSearchParams(window.location.search);
  showProducts(urlParams.get('category'));
}

renderProducts();


function addToCart(id){
  console.log("entro")
  let productos = [];
  if(!localStorage.getItem('productos')){
  localStorage.setItem('productos',productos);
  } else{
  productos = JSON.parse(localStorage.getItem('productos'));
  }

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