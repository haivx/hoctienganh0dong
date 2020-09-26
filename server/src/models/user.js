'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Role, { as: 'role', foreignKey: "role_id" });
      User.hasMany(models.UserClass, { as: 'user_classes', foreignKey: "student_id" });
    }
  };
  User.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: DataTypes.STRING,
    encryptedPassword: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    avatar: DataTypes.STRING,
    full_name: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};