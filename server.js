// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
var config = require('./server/config.json');

// Get our API routes

const adacorn = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// use JWT auth to secure the api
// app.use(expressJwt({ secret: config.secret }).unless({ path: ['/u/auth', '/u/register'] }));
app.use('/api', require('./server/routes/api'));

// Set our api routes
app.use('/u', require('./server/controllers/user.controller'));
app.use('/m', expressJwt({ secret: config.secret }), require('./server/controllers/member.controller'));
app.use('/d', expressJwt({ secret: config.secret }), require('./server/controllers/department.controller'));
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
