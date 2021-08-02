const { Sequelize, Deferrable }  = require('sequelize');
const db = require('../db/db.conexion');

const Ordenes = db.define('ordenes', {
    id_orden: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 
    estatus: {
        type: Sequelize.STRING,
        allowNull: false
    },
    monto_total: {
        type: Sequelize.FLOAT,
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
    

module.exports = { Ordenes }