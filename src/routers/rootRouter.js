const user = require("../routers/user/user");

function RouterRoot(app) {
    app.use("/api/services/createUser", user);
    app.use("/", (req, res, next) => {
        res.status(404).send("404 pages not found")
    })
}

module.exports = RouterRoot;