const express = require('express');
const morgan = require('morgan');
const Mongo = require('../database/index.js');

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.status(200).send();
});

app.get('/products', (req, res) => {
	Mongo.get((err, result) => {
		if (err) console.log(err);
		console.log('result on server', result);
	});
	res.status(200).send();
});

module.exports = app;
