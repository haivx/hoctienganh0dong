"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Note extends Model {
        static associate(models) {
            Note.belongsTo(models.Courses, {
                as: "course",
                foreignKey: "note_id",
            });
        }
    }
    Note.init(
        {
            title: DataTypes.STRING,
            content: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Note",
            tableName: 'notes',
        }
    );
    return Note;
};
