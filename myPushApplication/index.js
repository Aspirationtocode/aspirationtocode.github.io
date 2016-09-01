var express = require('express');
var app = express();
var body = require('body-parser');
app.use(body.urlencoded({
	extended: true
})); 
app.set('view engine', 'jade');

app.get('/', function (req, res) {
	res.render('index', { header: 'PUSHHHHH' });
});

// app.post('/pushpostrequest', function (req, res) {
// 	console.log(req.body)
// });

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

