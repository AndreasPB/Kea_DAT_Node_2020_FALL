const router = require('express').Router();

router.post('/login', (req, res) => res.status(501).send({ data: 'OK' }));

router.post('/register', (req, res) => res.status(501).send({ data: 'OK' }));

router.get('/logout', (req, res) => res.status.send());

module.exports = router;
