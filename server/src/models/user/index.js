"use strict";
import bcrypt from 'bcrypt'
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

                if (
                    bcrypt.compareSync(password, user.encryptedPassword || "")
                ) {
                    const loginDetail = await user.getLoginDetail();
                    return {
                        success: true,
                        ...loginDetail,
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
