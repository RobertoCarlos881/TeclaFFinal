const Sequelize = require('sequelize');
const db = require('./db/conexion')

const ordenes = db.define('ordenes', {
    id_orden: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_direccion: {
        type: Sequelize.INTEGER,
        allowNull: false
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
});

module.exports = { ordenes }