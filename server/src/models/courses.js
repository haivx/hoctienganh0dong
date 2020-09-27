'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    static associate(models) {
      Courses.hasMany(models.UserClass, { as: 'user_classes', foreignKey: 'course_id'})
      Courses.hasMany(models.Note, { as: 'notes', foreignKey: 'note_id'})
    }
  };
  Courses.init({
    title: DataTypes.CHAR,
    picture: DataTypes.CHAR,
    portforlio: DataTypes.STRING,
    note_id: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Courses',
    tableName: 'courses',
  });
  return Courses;
};