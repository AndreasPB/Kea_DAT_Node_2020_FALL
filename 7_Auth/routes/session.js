const express = require('express');

const router = express.Router();
// let viewCount = 0;

router.get('/setSession', (req, res) => {
  req.session.mySecret = 'This is my private secret';
  //  req.session.viewCount += 1;
  req.session.viewCount += 1;
  // res.send({ data: 'Session set' });
  res.send('session', { viewCount: req.session.viewCount });
});
router.get('/getSession', (req, res) => {
  req.session.viewCount += 1;
  res.send({ data: req.session.viewCount });
});

module.exports = router;
