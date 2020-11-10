const router = require("express").Router();

router.post("/login", (req, res) => {
    return res.status(501).send();
});

router.post("/register", (req, res) => {
    return res.status(501).send();
});

router.get("/logout", (req, res) => {
    return res.status(501).send();
});

module.exports = router;
