const express = require("express")
const dotenv = require("dotenv");

var app = express()

let port = process.env.PORT || 4000;

app.get()

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