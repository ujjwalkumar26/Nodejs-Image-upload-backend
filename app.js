var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
var mongoose = require('mongoose')
var multer = require('multer');
var fs = require('fs');
require('dotenv/config');

mongoose.connect(process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true }, err => {
      console.log('connected')
  });


var indexRouter = require('./routes/download');
var imageRouter = require('./routes/upload');
var updateRouter = require('./routes/update');
var deleteRouter = require('./routes/delete');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); 

app.use(logger('dev'));
app.use(fileUpload());
app.use('/download/', indexRouter);
app.use('/upload', imageRouter);
app.use('/update',updateRouter);
app.use('/delete/',deleteRouter);

app.use(express.static('public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({error:err});
});

module.exports = app;
