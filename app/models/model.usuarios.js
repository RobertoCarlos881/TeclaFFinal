const Sequelize = require('sequelize');
const db = require('../db/db.conexion');

const Usuarios = db.define('usuarios', {
    id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rol: {
        type: Sequelize.STRING,
        allowNull: false
    },

    pass: {
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


module.exports = { Usuarios }