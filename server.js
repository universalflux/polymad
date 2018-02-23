const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const io = require("socket.io");
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 2000;

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname + '/client')));

app.listen(port, (req, res) => {
	console.log("Hello Friend, you are on port#", port);
});
