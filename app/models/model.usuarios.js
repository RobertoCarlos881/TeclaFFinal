const Sequelize = require('sequelize');
const db = require('../db/db.conexion');

const usuarios = db.define('usuarios', {
    id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellidos: {
        type: Sequelize.STRING,
        allowNull: false
    },
    correo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = { usuarios }