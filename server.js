var express = require('express');
var app = express();
 
app.use(express.static(__dirname + '/dist'));
app.all('/*', function(req, res) {
  res.sendFile('index.html', { root: __dirname+'/dist' });
});
 
var port = process.env.PORT || 1980;
app.listen(port, function () {
    console.log("Listening on " + port);
});
module.exports = app;