const { DataTypes } = require("sequelize")
const { sequelize } = require("../db/mysql");

const Artist = sequelize.define(
    "artist", 
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
        grammy: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }
)

module.exports = Artist;