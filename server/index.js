const express = require('express');

let app = express();
let PORT = 3010;

app.use(express.static(__dirname + '/../public'));
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
	console.log(`listening to port ${PORT}`);
});
