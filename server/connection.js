const app = require('./server.js');

let PORT = 3010;

app.listen(PORT, () => {
	console.log(`Node Express listening to port ${PORT}`);
});
