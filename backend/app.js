var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var indices = require('./routes/indices');  
var listlog = require('./routes/listlog');  
var systeminfo = require('./routes/systeminfo');  
var cors = require('cors')
var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/indice', indices);
//app.use('/listlog', listlog);
//app.use('/system', systeminfo);
module.exports = app;
