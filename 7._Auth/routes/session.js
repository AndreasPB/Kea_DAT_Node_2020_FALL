const router = require("express").Router();

router.get("/setSession", (req, res) => {
    req.session.mySecret = req.query.secret;
    return res.send({ data: "Session set" });
});

router.get("/getSession", (req, res) => {
    return res.send({ data: req.session.mySecret });
});

module.exports = router;
