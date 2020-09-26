'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserClass extends Model {
    static associate(models) {
      UserClass.belongsTo(models.User, {as: 'user', foreignKey: "student_id" });
    }
  };
  UserClass.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    student_id: DataTypes.INTEGER,
    courser_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserClass',
    tableName: 'users_classes'
  });
  return UserClass;
};