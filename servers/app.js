var express = require('express');

var app = new express();

var staticpath = path.join(__dirname, "../static");

app.use (express.static(staticpath));
app.listen(3000,function(){
	console.log('http://127.0.0.1:3000')
})