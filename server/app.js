var express = require('express');

var app = new express();

var path = require('path');

var staticPath = path.join(__dirname,'../static');
app.use(express.static(staticPath));

app.listen(80,function(){
	console.log(80);
})