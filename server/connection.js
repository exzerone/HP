const app = require('./server.js');

let PORT = 3010;

app.listen(PORT, () => {
	console.log(`listening to port ${PORT}`);
});
