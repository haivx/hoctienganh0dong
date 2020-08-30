const fs = require('fs')
const path = require('path')
import Sequelize from 'sequelize';

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: false,
        dateStrings: true
    },
    logging: false
})

let db = {}

fs.readdirSync(__dirname)
.filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
.forEach(function(file) {
    const model = sequelize.import(path.join(__dirname, file, 'index.js'));
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