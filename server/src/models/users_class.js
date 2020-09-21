'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_class extends Model {
    static associate(models) {
      Users_class.belongsTo(models.User, {as: 'users', foreignKey: "id" });
    }
  };
  Users_class.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    student_id: DataTypes.INTEGER,
    courser_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users_class',
  });
  return Users_class;
};