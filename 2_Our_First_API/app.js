const express = require("express");
const app = express();
const fetch = require("node-fetch");
const encoding = require("encoding");

// Oneliner version
// const app = require("express")();

// Kan også tilgå lokalt
// const object = require("../1._Intro/object.json");

app.use(express.urlencoded());
app.use(express.json());

const apiObject = require("./package.json");

app.get("/", (req, res) => {
    // return res.send({"davs":"daaaavs"});
    return res.send(apiObject);
});

app.get("/me", (req, res) => {
    return res.send({"Andreas":"25"});
});

app.get("/time", (req, res) => {
    const currentDate = new Date();
    const time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    return res.send({time});
});

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

app.get("/month", (req, res) => {
    const d = new Date();
    currentMonth = months[d.getMonth()];
    return res.send({month: currentMonth});
});

const days = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"
    ];

app.get("/day", (req, res) => {

    const d = new Date();
    day = d.getDay();
    return res.send({day: days[d.getDay()]});

});

app.get("/querystring", (req, res) => {
    return res.send({query: req.query});
});

app.get("/message/:personalMessage", (req, res) => {

    return res.send({
        message: req.params.personalMessage,
        queryString: req.query
    });

});

app.get("/proxy", (res, req) => {
    fetch("http://www.google.com")
        .then(result => result.textConverted())
        .then(body => {
            return res.send(body);
        });

});

app.post("/showmethebody", (req, res) => {
    return res.send(req.body);
});

app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("Server is running on port", 8080);
});