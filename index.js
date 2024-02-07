const express = require("express")
const dotenv = require("dotenv");
const { connectMysql, initDatabaseMysql } = require("./src/app/db/mysql")
const RouterRoot = require("./src/routers/rootRouter");
const bodyParser = require("body-parser");

var app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,applicatio n/x-www-form-urlencoded"
  );
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, PATCH, POST, PUT, DELETE, GET"
    );
    return res.status(200).json({});
  }
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let port = process.env.PORT || 4000;

RouterRoot(app)

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