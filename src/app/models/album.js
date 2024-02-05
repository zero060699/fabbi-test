const { DataTypes } = require("sequelize")
const { sequelize } = require("../db/mysql");

const Album = sequelize.define(
    "Album",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        artistId: {
            type: DataTypes.UUID,
            allowNull: true,
        },
    }
)

module.exports = Album;