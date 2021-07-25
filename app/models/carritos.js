const Sequelize = require('sequelize');
const db = require('./db/conexion')

const carritos = db.define('carritos', {
    id_carrito: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_producto: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cant_producto: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = { carritos }