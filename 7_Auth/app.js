const express = require('express');

const session = require('express-session');

const app = express();

app.use(express.json());

require('dotenv').config();

console.log(process.env.SESSION_SECRET);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: 'false' },
}));

const authRoutes = require('./routes/auth.js');
const pagesRoutes = require('./routes/pages.js');
const sessionRoutes = require('./routes/session.js');

app.use(authRoutes);
app.use(pagesRoutes);
app.use(sessionRoutes);

/*
app.use((req, res, next) => {
  console.log('This runs on all routes');
  next();
});
*/

function greeting(req, res, next) {
  console.log('Nice to see you!', req.ip);
  next();
}

app.get('/', (req, res) => res.send({ data: 'this is the frontpage' }));

app.get('/*', (req, res) => res.status(501).send({ data: 'could not find the page' }));

const port = 8080;

app.listen(port, (error) => {
  if (error) throw error;

  console.log(`Server running on ${port}`);
});