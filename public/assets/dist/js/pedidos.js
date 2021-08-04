if(localStorage.getItem('id') == ""){
  
  alert('INICIA SESION POR FAVOR');
  window.location.href = "./index.html";
}


const productosPedidos = async () => {
  let id_usuario = localStorage.getItem('id');
  let result = await fetch('http://localhost:3000/compra/'+id_usuario);
  let resultado = await result.json();
  console.log(resultado)
  return resultado;
}


productosPedidos();
