const user = require("../routers/user/user");
const album = require("../routers/user/album");
const artist = require("../routers/user/artist");
const track = require("../routers/user/track");
const favorite = require("../routers/user/favorites");

function RouterRoot(app) {
    app.use("/api/services/User", user);
    app.use("/api/services/Album", album);
    app.use("/api/services/Artist", artist);
    app.use("/api/services/Track", track);
    app.use("/api/services/Favorite", favorite);
    app.use("/", (req, res, next) => {
        res.status(404).send("404 pages not found")
    })
}

module.exports = RouterRoot;