var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var compression = require('compression');
var minifyHTML = require('express-minify-html');

var routes = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', exphbs({}));
app.set('view engine', 'handlebars');

app.disable('x-powered-by');

app.use(minifyHTML({
    override:      true,
    displayErrors: process.env.NODE_ENV === 'development',
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true
    }
}));

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: "604800000" }));

app.use('/', routes);

module.exports = app;
