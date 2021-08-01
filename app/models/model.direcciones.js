const { Sequelize, Deferrable }  = require('sequelize');
const db = require('../db/db.conexion');
const Usuario = require('./model.usuarios');

const direcciones = db.define('direcciones', {
    id_direccion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id_usuario'
        }
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
    }
}, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});


//direcciones.sync();

module.exports = { direcciones }