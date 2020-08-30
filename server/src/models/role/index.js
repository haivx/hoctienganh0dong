export default function (sequelize, DataType) {
    const Role = sequelize.define(
        "Role",
        {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataType.INTEGER,
            },
            role_name: {
                type: DataType.STRING,
                allowNull: false,
            },
        },
        {
            tableName: "roles",
        }
    );
    Role.associate = (models) => {
        Role.hasMany(models.User, { as: "user", foreignKey: "id" });
    };
    return Role;
}
