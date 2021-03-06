# TeclaFFinal

<h3 align="center">Tecla Tienda Online</h3>

  <p align="center">
    Una tienda online donde puedes vender tus propios productos y donde puedes comprar articulos de Mercado Libre.
    <br />
    <a href="https://github.com/Roberto881/TeclaFFinal"><strong>Explora los documentos »</strong></a>
    <br />
    <br />
    ·
    <a href="https://teclatienda3.atlassian.net/jira/software/projects/TEC/boards/1">Nuestro Jira</a>
    ·
    <a href="https://app.swaggerhub.com/apis/Roberto881/TeclaTienda1/1.0.0">Consultar la documentacion de la API en Swagger</a>
  </p>
  <p>Autores:
    <br/>
    <a href="https://github.com/SebastianIslas">Github Sebastian Islas</a>
    <br/>
    <a href="https://github.com/Roberto881">Github Roberto Carlos</a>
  </p>



<details open="open">
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del proyecto</a>
      <ul>
        <li><a href="#construido-con">Construido con</a></li>
      </ul>
    </li>
    <li>
      <a href="#comenzar">Comenzar</a>
      <ul>
        <li><a href="#prerequisitos">Prerequisitos</a></li>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#licencia">Licencias</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>


## Acerca Del Proyecto
Este proyecto es para el aprendizaje de backend en el bootcamp de Tecla.


### Construido Con

Algunas de las tecnologias usadas
* [Bootstrap](https://getbootstrap.com)
* [NodeJS](https://nodejs.org)
* [Express](https://expressjs.com/)


## Comenzar

Es muy facil montar este proyecto localmente, solo hay que seguir unos pequeños pasos.

### Prequisitos

* Tener instalado node v12.20.1 o posterior


### Instalación

1. Clona el repositorio
   ```sh
   git clone https://github.com/Roberto881/TeclaFFinal.git
   ```
2. Instala los paquetes de NPM
   ```sh
   npm install o npm i
   ```
3. Crea tu archivo de variables de entorno `.env`
   ```JS
   HOST = 'localhost'
   PORT = 3000

   LISTA_BLANCA = ["http://127.0.0.1:3000", "http://127.0.0.1:5500"]

   ENDPOINT_CATEGORIES = ' https://api.mercadolibre.com/sites/MLM/categories'
   ENDPOINT_TRENDS = 'https://api.mercadolibre.com/trends/MLM'
   ENDPOINT_CATEGORY_PRODUCTS = 'https://api.mercadolibre.com/sites/MLM/search?category='

   DB_HOST = localhost
   DB_USR = 'sa'
   DB_PASS = '123456'
   DB_NAME = tecla_tienda
   DB_PORT= 51532
   SECRET_KEY= <Unallavebiensecreta>

   ID = '79611746555630'
   CLIENT SECRET = '1fBvw1HgxLoLROUg1UOcK1gF8CTPz7aC'
   ```

## Uso
1. Para la creacion de la base de datos, hay 3 pasos, el primero es en sql server crear la base de datos llamada tecla_tienda.

2. El segundo ir al archivo server.js y descomentar la linea 35 para crear la primer tabla de la base de datos dinamicamente, para esto correr la aplicacion con:
    ```sh
    nodemon server.js
       ```
3. De la carpeta DB copiar y pegar en sql server, para poder tener la base de datos y que funcione sin problemas, apagar el servidor antes de esto.

4. Enciende el servidor de node con:
    ```sh
    nodemon server.js
       ```
5. Abre el archivo index.html y comienza a navegar entre las vistas, abrirlo localmente, no abrir con Live Server.

6. Agregar en localStorage un item que se llame id en el cual se ingrese como valor el id de un usuario registrado en la bd para vincular el carrito a ese usuario.

7. Si quieres consultar las APIS y crear una página personalizada checa nuestra documentación en swagger
[Documentation](https://app.swaggerhub.com/apis/Roberto881/TeclaTienda1/1.0.0)

   
## Licencia

Distributed under the MIT License. See `LICENSE` for more information.


## Contacto

Sebastian Islas - [GitHub](https://github.com/SebastianIslas) - sebasislasbecerra@gmail.com
Roberto Carlos - [GitHub](https://github.com/Roberto881) - roberto881carlos881@hotmail.com

Project Link: [https://github.com/Roberto881/TeclaFFinal](https://github.com/Roberto881/TeclaFFinal)
