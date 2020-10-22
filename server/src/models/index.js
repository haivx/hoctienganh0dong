const fs = require('fs')
const path = require('path')
import Sequelize from 'sequelize';
import { development as dbConfig } from '../../bin/database';
export const sequelize = new Sequelize(dbConfig)

let db = {};

fs.readdirSync(__dirname)
  .filter(function(file) {
    
    return file.indexOf('.') !== 0 && file !== 'index.js';
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file, 'index.js'));

    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// export default db;

module.exports = db;