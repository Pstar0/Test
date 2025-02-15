const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

// First, apply the security check from server.js
const securityCheck = require('./server');  
app.use(securityCheck);  // Ensures the check runs before anything else

require('events').EventEmitter.defaultMaxListeners = 500;
__path = process.cwd();

app.use(express.static(__path));  // Serve static files

// Routes
const tele = require('./telegram');
const whatsapp = require('./whatsapp');
const youtube = require('./youtube');

app.use('/telegram', tele);
app.use('/whatsapp', whatsapp);
app.use('/youtube', youtube);

// Serve different pages
app.get('/index', (req, res) => res.sendFile(__path + '/index.html'));
app.get('/tools', (req, res) => res.sendFile(__path + '/tools.html'));
app.get('/activity', (req, res) => res.sendFile(__path + '/activity.html'));
app.get('/ai', (req, res) => res.sendFile(__path + '/ai.html'));
app.get('/bots', (req, res) => res.sendFile(__path + '/bots.html'));
app.get('/games', (req, res) => res.sendFile(__path + '/games.html'));
app.get('/premium', (req, res) => res.sendFile(__path + '/premium.html'));
app.get('/profile', (req, res) => res.sendFile(__path + '/profile.html'));
app.get('/about', (req, res) => res.sendFile(__path + '/about.html'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;