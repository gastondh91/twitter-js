
const express = require('express')
const app = express();
const nunjucks = require('nunjucks')
const routes = require('./routes/index.js')

app.use(express.static('./public'))
app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views', {noCache: true});

app.use('/', routes);

app.listen(3000, function () {
    console.log('Corriendo servidor')
});
