const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.HOST,
  dialect: 'mysql'
});


module.exports = sequelize;


















/* 
const sequelize = new Sequelize('tecla_tienda','sa','123', {
  host: 'localhost',
  dialect: 'mssql'
});

*/
/*
const sequelize = new Sequelize('tecla_tienda', null, null, {
  dialect: 'mssql',
  server: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialectOptions: {
    authentication: {
      type: 'default',
      options: {
        encrypt: true,
        userName: process.env.DB_USR,
        password: process.env.DB_PASS
      }
    }
  }
})
*/

/*
const sequelize = new Sequelize('tecla_tienda', 'tecla', '123', {
  dialect: 'mssql',
  server: 'localhost',
  port: 1433,
  logging: false,
  dialectOptions: {
    requestTimeout: 30000,
    encrypt: true
  }
});
*/

