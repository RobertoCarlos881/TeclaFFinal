const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/db.conexion');

const Producto = sequelize.define('productos', {
    id_producto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoria: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'categorias',
        key: 'categoria'
      }
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    precio: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false
    }
  }, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});


module.exports = { Producto } 






/*Producto.sync().then(() => {
  console.log('table created');
});


/*
module.exports = class Productos {

  constructor(producto){
    this.producto = producto;
  }

  async agregar() {
    let producto = [
      this.producto.id_categoria,
      this.producto.nombre,
      this.producto.precio,
      this.producto.stock,
      this.producto.descripcion        
    ];
    let resultado = await sequelize.query('INSERT INTO productos (id_categoria, nombre, precio, stock, descripcion) VALUES (?, ?, ?, ?, ?)', { replacements: producto, type: sequelize.QueryTypes.SELECT })
    return resultado;
  }


  async productosCategoria(idCategoria) {
    let resultado = await sequelize .query('SELECT * FROM productos WHERE id_Categoria='+idCategoria);
    return resultado;
  }

  async getProducto(idProducto) {
    let resultado = await sequelize .query('SELECT * FROM productos WHERE id_producto='+idProducto);
    return resultado;
  }
  
  async editarProducto(idProducto) {
    let producto = getProducto(idProducto);
    let producto2 = [
      producto2.id_categoria = producto.id_categoria,
      producto2.nombre = producto.nombre,
      producto2.precio = producto.precio,
      producto2.stock = producto.stock,
      producto2.descripcion = producto.descripcion        
    ];
    
    let resultado = await sequelize.query('INSERT INTO productos (id_categoria, nombre, precio, stock, descripcion) VALUES (?, ?, ?, ?, ?)', { replacements: producto, type: sequelize.QueryTypes.SELECT })
    return resultado;
  }

}


*/