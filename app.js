var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var logger = require('./util/logger.js');
var goOfficeBot = require('./bot/go-office-bot');
var goHomeBot = require('./bot/go-home-bot');
var weatherBot = require('./bot/weather-bot');


var app = express();
var cron = require('cron');  // Cron

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
// app.use('/users', users);
// app.use('/test', test);
// app.use('/goOfficeBot', goOfficeBot);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var goOfficeJob = new cron.CronJob({
  cronTime: '0 10 * * 1-5',
  onTick: function(){
    logger.debug('info', 'goOfficeBot running a task every minute / ' + new Date());
    goOfficeBot.botCmd();
  },
  start: true
});

var goHomeJob = new cron.CronJob({
  cronTime: '0 18 * * 1-5',
  onTick: function(){
    logger.debug('info', 'goHomeBot running a task every minute / ' + new Date());
    goHomeBot.botCmd();
  },
  start: true
});


// weatherBot.botCmd();


module.exports = app;
