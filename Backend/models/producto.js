const Sequelize = require('sequelize');
const db = require('./db/conexion')

const Producto = db.define('producto', {
    id_producto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_categoria: {
        type: Sequelize.INTEGER,
        allowNull: false
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
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = { Producto }