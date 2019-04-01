const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const controller = require('./controller');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.get('/milenio-bus-api/', (req, res) => res.send('Hello Milenio Bus!'))

app.route('/milenio-bus-api/registro').post(controller.registro)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Milenio Bus app listening on port ${port}!`))