const { DataTypes } = require("sequelize")
const { sequelize } = require("../db/mysql");

const Favorites = sequelize.define(
    "favorites",
    {
        artists: {
            type: DataTypes.ARRAY(DataTypes.UUID),
            allowNull: false,
        },
        albums: {
            type: DataTypes.ARRAY(DataTypes.UUID),
            allowNull: false,
        },
        tracks: {
            type: DataTypes.ARRAY(DataTypes.UUID),
            allowNull: false,
        },
    }
)

module.exports = Favorites;