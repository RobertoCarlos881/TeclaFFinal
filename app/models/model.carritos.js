const { Sequelize, Deferrable }  = require('sequelize');
const db = require('../db/db.conexion');

const carritos = db.define('carritos', {
    id_carrito: {
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
    id_producto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'productos',
            key: 'id_producto'
        }
    },
    cant_producto: {
        type: Sequelize.INTEGER,
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


module.exports = { carritos }