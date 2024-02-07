const mysql = require("mysql2");
const { Sequelize } = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASEWMYSQL, process.env.USERMYSQL, process.env.PASSWORDMYSQL, {
    // ...config,
    host: process.env.HOSTMYSQL || '127.0.0.1',
    port: process.env.PORTMYSQL || 3306,
    dialect: 'mysql',
    logging: false,
});

async function connectMysql(){
    try {
        await sequelize.authenticate();
        await sequelize.sync({
            force: false
        });
        console.log("Mysql connect successfully");
    } catch (error) {
        console.log(error.message);
    }
}

async function initDatabaseMysql() {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
          host: process.env.HOSTMYSQL,
          user: process.env.USERMYSQL,
          password: process.env.PASSWORDMYSQL,
        });
        connection.query(
          `CREATE DATABASE IF NOT EXISTS ${process.env.DATABASEWMYSQL} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`,
          (error, results) => {
            connection.destroy();
            if (error) {
              console.log(`Init mysql database ${process.env.DATABASEWMYSQL} failed: ${error?.message || JSON.stringify(error)}`);
              return reject(error);
            }
            console.log(`Init mysql database ${process.env.DATABASEWMYSQL} successfully: ${JSON.stringify({results})}`);
            return resolve();
          }
        );
    });  
}

module.exports = {
    connectMysql,
    sequelize,
    initDatabaseMysql
}