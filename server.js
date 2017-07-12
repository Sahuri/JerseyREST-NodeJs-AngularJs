var express = require('express');  
var app = new express();  
var port = 3000;  
app.listen(port, function(err) {  
    if (typeof(err) == "undefined") {  
        console.log('Your application is running on : ' + port + ' port');  
    }  
});  

app.use(express.static('lib'));
app.use(express.static('src/modules')); 
app.use(express.static('src/controllers')); 
app.use(express.static('src/views')); 

app.get('/', function(req, res) {  
	console.log("1");
});  
