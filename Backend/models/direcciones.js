const Sequelize = require('sequelize');
const db = require('./db/conexion')

const direcciones = db.define('direcciones', {
    id_direccion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    calle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    colonia: {
        type: Sequelize.STRING,
        allowNull: false
    },
    municipio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ciudad: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codigo_postal: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    telefono_1: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    telefono_2: {
        type: Sequelize.INTEGER,
    },
});

module.exports = { direcciones }