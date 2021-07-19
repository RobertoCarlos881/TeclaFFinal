const Sequelize = require('sequelize');
const db = require('./db/conexion')

const categorias = db.define('categorias', {
    id_categoria: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = { categorias }