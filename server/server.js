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
		// let data = {};
		// data.photos = [];
		// // console.log(result[0].media[0].sizes[3].url);
		// result.forEach((item) => {
		// 	data.title = item.title;
		// 	data.price = item.price;
		// 	data.description = item.description;
		// 	item.media.forEach((photos) => {
		// 		if (photos.type === 'photo') {
		// 			data.photos.push(photos.size[3].url);
		// 		}
		// 	});
		// });

		res.status(200).send(result);
	});
});

module.exports = app;
