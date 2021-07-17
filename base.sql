CREATE DATABASE tecla_tienda;

USE tecla_tienda;

CREATE TABLE usuarios (
    id_usuario int NOT NULL IDENTITY (1,1),
    nombre varchar(50) NOT NULL,
    apellidos varchar (100) NOT NULL,
	correo varchar(100) NOT NULL,
	password varchar(30) NOT NULL,
    PRIMARY KEY (id_usuario)
)

CREATE TABLE categorias(
	id_categoria int NOT NULL IDENTITY(1,1),
	nombre varchar(255) NOT NULL,
	PRIMARY KEY (id_categoria)
);

CREATE TABLE productos(
    id_producto int NOT NULL IDENTITY (1,1),
    id_categoria int NOT NULL,
    nombre varchar (100) NOT NULL,
	precio float NOT NULL,
	stock int NOT NULL,
	descripcion varchar(255) NOT NULL,
    PRIMARY KEY (id_producto),
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);


CREATE TABLE carritos (
  id_carrito int NOT NULL IDENTITY(1,1),
  id_usuario int NOT NULL,
  id_producto int NOT NULL,
  cant_producto int NOT NULL,
  PRIMARY KEY (id_carrito),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

CREATE TABLE direcciones (
  id_direccion int NOT NULL IDENTITY(1,1),
  id_usuario int NOT NULL,
  calle varchar(100) NOT NULL,
  colonia varchar(100) NOT NULL,
  municipio varchar(100) NOT NULL,
  ciudad varchar(100) NOT NULL,
  estado varchar(100) NOT NULL,
  codigo_postal int NOT NULL,
  telefono_1 int NOT NULL,
  telefono_2 int,
  PRIMARY KEY (id_direccion),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE ordenes(
  id_orden int NOT NULL IDENTITY(1,1),
  id_direccion int NOT NULL,
  fecha datetime default CURRENT_TIMESTAMP,
  estatus varchar(100) NOT NULL,
  monto_total float NOT NULL,
  PRIMARY KEY (id_orden),
  FOREIGN KEY (id_direccion) REFERENCES direcciones(id_direccion)
);


CREATE TABLE detalle_orden(
  id_detalle_orden int NOT NULL IDENTITY(1,1),
  id_orden int NOT NULL,
  id_producto int NOT NULL,
  cantidad int NOT NULL,
  monto float NOT NULL,
  PRIMARY KEY (id_detalle_orden),
  FOREIGN KEY (id_orden) REFERENCES ordenes(id_orden),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

