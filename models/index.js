const dotenv = require('dotenv')
dotenv.config()

const dbConfig = require("../config/database");

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.company = require('./company')(sequelize, Sequelize)

db.animals = require('./animals')(sequelize, Sequelize)


//Associations
//hasOne 




module.exports = db;