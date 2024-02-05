const { DataTypes } = require("sequelize")
const { sequelize } = require("../db/mysql");

const Track = sequelize.define(
    "Track", 
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
        artistId: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        albumId: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
)

module.exports = Track;