const getCategories = async () => {
    let result = await fetch('http://localhost:3000/categorias/')
    let resultado = await result.json()
    return resultado;
}

const showCategorias = async () => {
    console.log("entro a nav_categorias")
    let data = await getCategories()
    data.forEach(data => {
        const lista = document.getElementById('categorias');
        const categoria = document.createElement('li');
        const a_cat = document.createElement('a');
        lista.appendChild(categoria);
        a_cat.setAttribute('class','dropdown-item');
        a_cat.setAttribute('href','productos.html?categoria='+data.categoria);
        a_cat.textContent = data.categoria;
        categoria.appendChild(a_cat);
    });
}


showCategorias();