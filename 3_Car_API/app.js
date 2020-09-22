const Joi = require('joi');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();



// Middlewares
app.use(express.json());
app.use("/static", express.static('./static/'));
//app.use('/', () => {
//    console.log('Det her er en middleware');
//});


let carWashes = [
    { id: 1, name: 'Basis', price: 39 },
    { id: 2, name: 'Guld', price: 59},
    { id: 3, name: 'Premium', price: 79},
    { id: 4, name: 'Premium Plus', price: 99}
]


/* CRUD Operations / Routes
app.get()
app.post()
app.put()
app.delete()
*/

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get('/api/carWashes', (req, res) => {
    res.send({ data: carWashes });
});

app.get('/api/carWashes/:id', (req, res) =>{
    const carWash = carWashes.find(c => c.id === parseInt(req.params.id));
    // 404
    if (!carWash) return res.status(404).send('Kurset med det givende ID blev ikke fundet!');
    res.send(carWash)
});

app.post('/api/carWashes', (req, res) => {
    // Validate
    // const validation = validateCarWash(req.body);
    // Object destructuring version
    const { error } = validateCarWash(req.body);
    // If invalid, 400
    if (error) return res.status(400).send(error.details[0].message);

    const carWash = {
        id: carWashes.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    carWashes.push(carWash);
    res.send(carWash);
});


app.patch("/api/carWashes/:id", (req, res) => {
    carWashes = carWashes.map(carWash => {
        if (carWash.id === Number(req.params.id)) {
            return { ...carWash, ...req.body, id: carWash.id };
        }
        return carWash;
    });
    return res.send({ data: carWashes });

});

app.put('/api/carWashes/:id', (req, res) => {
    // Look up the course
    const carWash = carWashes.find(c => c.id === parseInt(req.params.id));
    // If not existing, 404
    if (!carWash) return res.status(404).send('Kurset med det givende ID blev ikke fundet!');
    
    // Validate
    // const validation = validateCarWash(req.body);
    // Object destructuring version
    const { error } = validateCarWash(req.body);
    // If invalid, 400
    if (error) return res.status(400).send(error.details[0].message);
    
    // Update course
    carWash.name = req.body.name;
    carWash.price = req.body.price;
    // Return the updated course
    res.send(carWash);
});


// Validation - For reuse
function validateCarWash(carWash) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        price: Joi.number().required()
    });

    return schema.validate(carWash);
}

app.delete('/api/carWashes/:id', (req, res) => {
    const carWash = carWashes.find(c => c.id === parseInt(req.params.id));
    if (!carWash) return res.status(404).send('Kurset med det givende ID blev ikke fundet!');
    
    // Delete
    const index = carWashes.indexOf(carWash);
    carWashes.splice(index, 1);
    // Return the same car wash

    res.send(carWashes);
});


// PORT
const port = process.env.PORT || 3000;
app.listen(port, (error) => {
    

    if (error) {
        console.log("Error starting the server");
    }
    console.log(`Listening to port ${port}...`);
    
});