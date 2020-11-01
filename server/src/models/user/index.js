"use strict";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const { Model } = require("sequelize");

const refreshTokenList = {};
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
                    const accessToken = jwt.sign({ payload: this.id }, process.env.API_KEY, {
                        expiresIn: "365d",
                    });
                    const refreshToken = jwt.sign({ payload: this.id }, process.env.API_KEY, {
                        expiresIn: 300,
                    });
                    refreshTokenList[refreshToken] = user.email;
                    return {
                        code: 0,
                        success: true,
                        data: {
                            accessToken,
                            refreshToken,
                            user: {
                                phone: user.phone,
                                email: user.email,
                                full_name: user.full_name,
                            },
                        },
                    };
                } else {
                    return {
                        success: false,
                        message: "Incorrect email or password",
                    };
                }
            };
            User.refreshToken = async function (refreshToken, email) {
                const currentAccountEmail = refreshTokenList[refreshToken];
                if(currentAccountEmail === email) {
                    const newRefreshToken = jwt.sign({ payload: this.id }, process.env.API_KEY, {
                        expiresIn: 300,
                    });
                    delete refreshTokenList[refreshToken];
                    refreshTokenList[newRefreshToken] = email;
                    return {
                        code: 0,
                        success: true,
                        data: {
                            accessToken: newRefreshToken
                        }
                    }
                } else {
                    return {
                        code: -1,
                        data: {
                            message: 'Account not found'
                        }
                    }
                }
            }
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
