const Sequelize = require('sequelize');
const db = require('../db/db.conexion');

const detalle_orden = db.define('detalle_orden', {
    id_detalle_orden: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_orden: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_producto: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    monto: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

module.exports = { detalle_orden }