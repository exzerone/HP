const express = require('express');
const morgan = require('morgan');
const Mongo = require('../database/index.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const app = express();

app.use(jsonParser);
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.status(200).send();
});

app.get('/products', (req, res) => {
	Mongo.getProduct((err, result) => {
		if (err) console.log(err);
		res.status(200).send(result);
	});
});

app.get('/userList', (req, res) => {
	Mongo.getUser((err, result) => {
		if (err) console.log(err);
		res.status(200).send(result);
	});
});

app.post('/user', (req, res) => {
	console.log(req.body.user);
	Mongo.post(req.body.user, (err, result) => {
		if (err) console.log(err);
		res.status(200).send(result);
	});
});

module.exports = app;
