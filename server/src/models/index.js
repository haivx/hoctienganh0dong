const fs = require('fs')
const path = require('path')
import Sequelize from 'sequelize';
import { development as dbConfig } from '../../bin/database';
export const sequelize = new Sequelize(dbConfig)

let db = {}

fs.readdirSync(__dirname)
.filter((file) => file.indexOf('.') !== 0 && file !== 'index.js' && (file.slice(-3) === '.js'))
.forEach(function(file) {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model
})

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;