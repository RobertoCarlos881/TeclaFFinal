const { Sequelize, Deferrable }  = require('sequelize');
const db = require('../db/db.conexion');


const detalle_orden = db.define('detalle_orden', {
    id_detalle_orden: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_orden: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'ordenes',
            key: 'id_orden'
        }
    },
    id_producto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'productos',
            key: 'id_producto',
        }

    },
    cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    monto: {
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



module.exports = { detalle_orden }