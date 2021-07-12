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
    data.results.forEach(data => {
        let div_productos = document.getElementById("productos");

        let div = document.createElement("div");
        div.className = "col mb-5";
        div_productos.appendChild(div);
    
    
        let img = document.createElement("img");
        img.setAttribute("src",data.thumbnail);
        img.className = "card-img-top";
        div.appendChild(img);
    
        //Seccion de detalles del producto
        let div_details = document.createElement("div");
        div_details.className= "text-center";
        div.appendChild(div_details);
    
        let h5 = document.createElement("h5");
        h5.className= "fw-bolder";
        h5.textContent= data.title
        div_details.appendChild(h5);
    
        let span = document.createElement("span");
        span.textContent= data.price
        div_details.appendChild(span);
    
        //Seccion del boton    
        let div_actions = document.createElement("div");
        div_actions.className = "text-center";
        div.appendChild(div_actions);
    
        let a = document.createElement("a");
        a.className = "btn btn-outline-dark mt-auto";
        a.setAttribute('href','#');
        a.textContent = "Agregar al carrito";
        div_actions.appendChild(a);
    
    });

}


function renderProducts(category){
    const urlParams = new URLSearchParams(window.location.search);
    showProducts(urlParams.get('category'));
}

renderProducts();