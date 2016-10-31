var express = require('express');

var app = express();
app.listen(80);
app.use('/public', express.static('./public') );
app.get('/', (req, res) => {
	res.sendFile('index.html', { root : __dirname });	
});
