var express = require('express');

var app = new express();

var path = require('path');

var staticpath = path.join(__dirname, "../static");

app.use (express.static(staticpath));
app.listen(80,function(){
	console.log('http://127.0.0.1:80')
})
