
'use strict';
var express = require('express');

var app = express();

app.all('/', function(req, res, next){
   res.redirect('http://medicalassistant-remedyshare.rhcloud.com');
});

app.listen(Number(process.env.PORT || 3001));


module.exports = app;