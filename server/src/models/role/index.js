'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.hasMany(models.User, { as: 'users', foreignKey: "role_id" });
    }
  };
  Role.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    role_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles',
  });
  return Role;
};