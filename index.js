const express = require("express")
const dotenv = require("dotenv");
const { connectMysql, initDatabaseMysql } = require("./src/app/db/mysql")

var app = express()

let port = process.env.PORT || 4000;


app.listen(port, () => {
    const start = async () => {
      try {
        await connectMysql();
        await initDatabaseMysql();
        console.log("connect success");
      } catch (error) {
        console.log(error?.message);
      }
    };
    start();
    console.log(`server listening at ${port}`);
  });