
var express = require('express')
var app = express();

app.use(function (req, res, next) {
    console.log('quien esta ahi')
    next();
});

app.use('/special/', function (req, res, next) {
    console.log('ahora estamos en special')
    next();
});

app.use('/special/subpath/', function (req, res, next) {
    console.log('ahora estamos en subpath')
    next();
});

app.listen(3000, function () {
    console.log('Corriendo servidor')
});

