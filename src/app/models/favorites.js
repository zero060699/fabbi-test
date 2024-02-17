const { DataTypes } = require("sequelize")
const { sequelize } = require("../db/mysql");

const Favorites = sequelize.define(
    "favorites",
    {
        artists: {
            type: DataTypes.ARRAY(DataTypes.UUID),
            allowNull: false,
            defaultValue: []
        },
        albums: {
            type: DataTypes.ARRAY(DataTypes.UUID),
            allowNull: false,
            defaultValue: []
        },
        tracks: {
            type: DataTypes.ARRAY(DataTypes.UUID),
            allowNull: false,
            defaultValue: []
        },
    }
)

module.exports = Favorites;