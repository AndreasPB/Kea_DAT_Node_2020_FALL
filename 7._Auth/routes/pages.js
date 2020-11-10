const router = require("express").Router();
const path = require("path");

router.get("/frontpage", (req, res) => {
    return res.sendFile(path.join(__dirname + "/../index.html"));
});

module.exports = router;
