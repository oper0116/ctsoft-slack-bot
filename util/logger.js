var winston = require('winston');

var logger = module.exports = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({
      filename: 'slack-bot.log',
      level: 'debug'
    })
  ]
});


module.exports = logger;
