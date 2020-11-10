const express = require("express");
const app = express();

app.use(express.json());

require("dotenv").config();

const session = require("express-session");

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

const authRoutes = require("./routes/auth.js");
const pagesRoutes = require("./routes/pages.js");
const sessionRoutes = require("./routes/session.js");
app.use(authRoutes);
app.use(pagesRoutes);
app.use(sessionRoutes);

/*
app.use((req, res, next) => {
    console.log("This runs on all routes");
    next();
});
*/

function greeting(req, res, next) {
    console.log("Wow, nice to see you", req.ip);
    next();
}

app.get("/", greeting, (req, res, next) => {
    console.log("Hit the first route");
    next();
});

app.get("/", (req, res) => {
    console.log("Hit the second route");
    return res.send({ data: "The is the frontpage" });
});

app.get("/*", (req, res) => {
    return res.status(501).send({ data: "Could not find the page" });
});



// 200 - OK
// 4xx
// 401 - Unauthorized
// 403 - Forbidden
// 5xx
// 500 - Internal Server Error
// 501 - Not Implemented Yet

const port = 8080;
app.listen(port, (error) => {
    console.log(`Server running on ${port}`);
});
