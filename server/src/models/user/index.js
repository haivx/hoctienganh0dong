"use strict";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.belongsTo(models.Role, { as: "role", foreignKey: "role_id" });
            User.hasMany(models.UserClass, {
                as: "user_classes",
                foreignKey: "student_id",
            });

            User.login = async function (email, password) {
                let user = await User.findOne({
                    where: { email: email || "" },
                });

                if (!user)
                    return {
                        code: -1,
                        success: false,
                        message: "Email has not registered yet",
                    };

                if (bcrypt.compareSync(password, user.encryptedPassword || "")) {
                    const jwtToken = jwt.sign({ payload: this.id }, process.env.API_KEY, { expiresIn: "365d" });
                    return {
                        code: 0,
                        success: true,
                        data: {
                            user,
                            jwtToken,
                        }
                    };
                } else {
                    return {
                        success: false,
                        message: "Incorrect email or password",
                    };
                }
            };
        }
    }
    User.init(
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            email: DataTypes.STRING,
            encryptedPassword: DataTypes.STRING,
            phone: DataTypes.BIGINT,
            avatar: DataTypes.STRING,
            full_name: DataTypes.STRING,
            role_id: DataTypes.INTEGER,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
        }
    );

    return User;
};
