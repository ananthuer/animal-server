const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  "local": {
    "username": "ananthuer",
    "password":  '123456',
    "database":"animals",
    "host": '127.0.0.1',
    "dialect": 'mysql'
    },
  "development": {
    "username": "ananthuer",
    "password": '123456',
    "database": "animals",
    "host": "127.0.0.1",
    "port": "3306",
    "dialect": "mysql"
  },
  "test": {
    "username": "ananthuer",
    "password": '123456',
    "database": "animals",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "3306"
  },
  "production": {
    "username": "ananthuer",
    "password": '123456',
    "database": "animals",
    "host": "127.0.0.1",
    "port": "3306",
    "dialect": "mysql"
  }
}
