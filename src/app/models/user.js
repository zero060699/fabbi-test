const { DataTypes } = require("sequelize")
const { sequelize } = require("../db/mysql");

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        version: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
    }
)

module.exports = User;