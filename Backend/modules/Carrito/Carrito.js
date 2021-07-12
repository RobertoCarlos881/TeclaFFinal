class Carrito{

    constructor(id, usuario, productos) {
        this.id = id;
        this.usuario = usuario;
        this.productos = productos; 	//array
        this.total = 0;
    }
    
    getId(){
        return this.id;
    }
    getUsuario(){
        return this.usuario;
    }
    getProducto(i){
        return this.producto[i];
    }
    getProductos(){
        return this.productos;
    }
    getTotal(){
        return this.total;
    }

    agregarProducto(producto){
    		
    	  this.total = this.total + producto.precio;
    	  this.productos.push(producto);
    	  
    	  //***DESPLIEGA PRODUCTO EN PAGINA DEL CARRITO HTML**	
        //Obtiene etiqueta ul que contendra los productos agregados
        let ulCarrito = document.getElementById("carrito-productos");

        //etiqueta li que tendra un producto dentro de la lista ul del html
        let liCarrito = document.createElement("li");
        liCarrito.setAttribute("class","list-group-item d-flex justify-content-between lh-sm");

        // Crea etiqueta div que contendra nombre y descripcion del producto
        let divCarrito = document.createElement("div");

        let h6Carrito = document.createElement("h6");
        h6Carrito.setAttribute("my=0");
        h6Carrito.textContent(producto.nombre);

        let smallCarrito = document.createElement("small");
        smallCarrito.setAttribute("class","text-muted");
        smallCarrito.textContent(producto.descripcion);
        
        //Etiqueta span que contendra precio del producto
        let spanCarrito = document.createElement("span");
        spanCarrito.setAttribute("class","text-muted");
        spanCarrito.textContent(producto.precio);
        //Muestra los elementos en el html
        divCarrito.appendChild(h6Carrito);
        divCarrito.appendChild(smallCarrito);
        liCarrito.appendChild(divCarrito);
        liCarrito.appendChild(spanCarrito);
        ulCarrito.appendChild(liCarrito);
/*
        <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 class="my-0">Product name</h6>
          <small class="text-muted">Brief description</small>
        </div>
        <span class="text-muted">$12</span>
      </li>
*/      
    }

}
