const {DB_SELECT} = require('../config');

if(DB_SELECT === 'json'){
  module.exports = require('./jsondb');
}else{
  module.exports = require('./mysqldb')
}