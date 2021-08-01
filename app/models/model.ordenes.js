const { Sequelize, Deferrable }  = require('sequelize');
const db = require('../db/db.conexion');
const Direccion = require('./model.usuarios');

const ordenes = db.define('ordenes', {
    id_orden: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_direccion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'direccion',
            key: 'id_direccion'
        }
    },
    fecha: {
        type: Sequelize.DATE,
        allowNull: false
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
    

module.exports = { ordenes }