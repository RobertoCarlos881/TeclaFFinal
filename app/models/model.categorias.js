const Sequelize = require('sequelize');
const db = require('../db/db.conexion');

const Categorias = db.define('categorias', {
    categoria: {
        type: Sequelize.STRING,
        primaryKey: true
    }
}, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});


module.exports = { Categorias }