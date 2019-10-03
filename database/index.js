var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dateFns = require('date-fns');
const dbName = 'hp';

MongoClient.connect(
	url,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, client) => {
		if (err) console.log(err);

		let db = client.db(dbName);
		console.log(`Connected MongoDB database: ${dbName}`);

		let getProduct = (cb) => {
			db.collection('data')
				.find()
				.toArray((err, result) => {
					if (err) cb(err);
					cb(null, result);
				});
		};

		let getUser = (cb) => {
			db.collection('users')
				.find()
				.toArray((err, result) => {
					if (err) cb(err);
					cb(null, result);
				});
		};

		let post = (username, cb) => {
			db.collection('users').save(
				{
					user: username,
					date: dateFns.format(new Date(), "LLL d, yyyy h:mm aaaa")
				},
				(err, response) => {
					if (err) cb(err);
					cb(null, response);
				}
			);
		};
		module.exports.getProduct = getProduct;
		module.exports.post = post;
		module.exports.getUser = getUser;
	}
);
