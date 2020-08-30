import statics from "./statics";

export default function (sequelize, DataTypes) {
    const User = sequelize.define(
        
        "User",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoincrement: true,
            },
            email: {
                type: DataTypes.STRING,
                primaryKey: true,
                autoincrement: true,
            },
            encryptedPassword: {
                type: DataTypes.STRING,
                primaryKey: true,
                autoincrement: true,
            },
            phone: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoincrement: true,
            },
            avatar: {
                type: DataTypes.STRING,
                primaryKey: true,
                autoincrement: true,
            },
            full_name: {
                type: DataTypes.STRING,
                primaryKey: true,
                autoincrement: true,
            },
        },
        {
            tableName: "users",
        }
    );

    User.associate = (models) => {
        User.belongsTo(models.Role, {
            foreignKey: "user_id",
        });

        statics(User, models)
    };
    return User;
}
