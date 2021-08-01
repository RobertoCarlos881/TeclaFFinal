function addToCart(id_producto){
  carrito.addProduct(id_producto, id_usuario, "1")
  alert("Producto añadido al carrito");
}

//Obtiene los productos de la categoria
const getProducts = async (categoria) => {
  let result = await fetch('http://localhost:3000/productos/'+categoria)
  let resultado = await result.json()
  return resultado;
}

//Render productos en front
const showProducts = async (categoria) => {
  console.log("Productos de categoria: " + categoria)
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



//Obtiene categoria a mostrar
function renderProducts(){
  const urlParams = new URLSearchParams(window.location.search);
  showProducts(urlParams.get('categoria'));
}

renderProducts();




