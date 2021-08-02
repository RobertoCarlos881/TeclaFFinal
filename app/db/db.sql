CREATE DATABASE tecla_tienda
USE tecla_tienda;
 
GO

CREATE TABLE usuarios (
  id_usuario int NOT NULL IDENTITY (1,1),
  user varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  rol varchar(50) NOT NULL,
	pass varchar(30) NOT NULL,
  PRIMARY KEY (id_usuario)
)

CREATE TABLE categorias(
	categoria varchar(255) NOT NULL UNIQUE,
	PRIMARY KEY (categoria)
);

CREATE TABLE productos(
  id_producto int NOT NULL IDENTITY (1,1),
  categoria varchar(255) NOT NULL,
  nombre varchar (100) NOT NULL,
	precio float NOT NULL,
	stock int NOT NULL,
	descripcion varchar(255) NOT NULL,
  PRIMARY KEY (id_producto),
  FOREIGN KEY (categoria) REFERENCES categorias(categoria)
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


CREATE TABLE ordenes(
  id_orden int NOT NULL IDENTITY(1,1),
  id_usuario int NOT NULL,
  estatus varchar(100) NOT NULL,
  monto_total float NOT NULL,
  PRIMARY KEY (id_orden),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);


CREATE TABLE detalle_ordenes(
  id_detalle_orden int NOT NULL IDENTITY(1,1),
  id_orden int NOT NULL,
  id_producto int NOT NULL,
  cantidad int NOT NULL,
  monto float NOT NULL,
  PRIMARY KEY (id_detalle_orden),
  FOREIGN KEY (id_orden) REFERENCES ordenes(id_orden),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

GO









//******************** CREAR PRODUCTOS */



USE tecla_tienda
GO

INSERT INTO categorias (categoria) VALUES ('Juguetes');
INSERT INTO categorias (categoria) VALUES ('Celulares');
INSERT INTO categorias (categoria) VALUES ('Computacion');
INSERT INTO categorias (categoria) VALUES ('Focos');
INSERT INTO categorias (categoria) VALUES ('Electricidad');
INSERT INTO categorias (categoria) VALUES ('Carpinteria');
GO

SELECT * FROM categorias

INSERT INTO productos (categoria, nombre, precio, stock, descripcion) VALUES('Juguetes','item1',456,34,'nada');
INSERT INTO productos (categoria, nombre, precio, stock, descripcion) VALUES('Celulares','item2',456,34,'nada');
INSERT INTO productos (categoria, nombre, precio, stock, descripcion) VALUES('Computacion','item3',456,34,'nada');
INSERT INTO productos (categoria, nombre, precio, stock, descripcion) VALUES('Computacion','item4',456,34,'nada');
INSERT INTO productos (categoria, nombre, precio, stock, descripcion) VALUES('Focos','item5',456,34,'nada');
INSERT INTO productos (categoria, nombre, precio, stock, descripcion) VALUES('Carpinteria','item6',456,34,'nada');
INSERT INTO productos (categoria, nombre, precio, stock, descripcion) VALUES('Carpinteria','item7',456,34,'nada');
INSERT INTO productos (categoria, nombre, precio, stock, descripcion) VALUES('Focos','item8',456,34,'nada');
INSERT INTO productos (categoria, nombre, precio, stock, descripcion) VALUES('Focos','item9',456,34,'nada');
INSERT INTO productos (categoria, nombre, precio, stock, descripcion) VALUES('Focos','item10',456,34,'nada');
INSERT INTO productos (categoria, nombre, precio, stock, descripcion) VALUES('Electricidad','item11',456,34,'nada');
INSERT INTO productos (categoria, nombre, precio, stock, descripcion) VALUES('Electricidad','item12',456,34,'nada');


SELECT * FROM productos


INSERT INTO usuarios (usuario, password) VALUES('prueba','123')