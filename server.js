const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

// variables de entorno heroku

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express hbs engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    // res.send('Hello World');

    res.render('home', {
        nombre: 'Fernando'
    });
});

app.get('/about', (req, res) => {
    // res.send('Hello World');

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});