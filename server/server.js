const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.status(200).send();
});

app.get('/products', (req, res) => {});

module.exports = app;
