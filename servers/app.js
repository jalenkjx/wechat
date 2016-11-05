var express = require('express');

var bodyparser = require('body-parser')

var app = new express();

app.use(bodyparser.urlencoded({
	extended:true
}))

var path = require('path');

//加载 token 模块
require("./token.js")(app);

require("./jssdk.js")(app);

var staticpath = path.join(__dirname, "../static");

app.use (express.static(staticpath));
app.listen(80,function(){
	console.log('http://127.0.0.1:80')
})
