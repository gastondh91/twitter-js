
var express = require('express')
var app = express();
var nunjucks = require('nunjucks')

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

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks

var locals = {
    title: 'Esto es un ejemplo',
    
    people: [
        { name: 'Gandalf' },
        { name: 'Frodo' }, 
        { name: 'Hermione' }
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log('usamos nunjucks');
});

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.get('/',function(req,res){
    res.render( 'index', {title: 'Hall of Fame', people: people} );
})

app.listen(3000, function () {
    console.log('Corriendo servidor')
});