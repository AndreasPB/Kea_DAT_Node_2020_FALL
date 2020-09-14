const express = require("express");
const app = express();

// Oneliner version
// const app = require("express")();

// Kan også tilgå lokalt
// const object = require("../1._Intro/object.json");

const apiObject = require("./package.json");

app.get("/", (req, res) => {
    // return res.send({"davs":"daaaavs"});
    return res.send(apiObject);
});

app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("Server is running on port", 8080);
});