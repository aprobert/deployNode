var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

//routes
app.get('/', function(req, resp) {
    resp.sendFile(__dirname + "/index.html");
});

app.get('/user', function(req, resp) {
    resp.render('user');
});

//server port
app.listen(port, function() {
    console.log(`server running on port ${port}`);
});
