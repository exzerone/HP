var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'hp';

MongoClient.connect(
	url,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, client) => {
		if (err) console.log(err);

		let db = client.db(dbName);
		console.log(`Connected MongoDB database: ${dbName}`);
	}
);
