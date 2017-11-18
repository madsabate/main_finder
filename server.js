// Import dependencies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up path to /public
app.use(express.static(path.join(__dirname, './app/public')));

// Set up Body Parser dependency to pick up user entered data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add application routs
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Sets up server, app starts listenings on port 3000
app.listen(PORT, function() {
    console.log('MainFinder is listening on PORT: ' + PORT);

});