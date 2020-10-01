'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Schedules.belongsTo(models.Courses, {
        as: "course",
        foreignKey: "course_id",
    });
    }
  };
  Schedules.init({
    course_id: DataTypes.STRING,
    class_level: DataTypes.STRING,
    class_id: DataTypes.INTEGER,
    schedule_class: DataTypes.STRING,
    open_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Schedules',
    tableName: 'schedules'
  });
  return Schedules;
};