var Slack = require('slack-node');
var utilExtend = require('util-extend');
var slack = new Slack();

webhookUri = "https://hooks.slack.com/services/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";
slack.setWebhook(webhookUri);
module.exports = {
  sendMessage: function(opt, cb){
    var defaultOpt = {
      username: "봇",
      text: "teset"
    }
    defaultOpt = utilExtend(defaultOpt, opt);
    slack.webhook(defaultOpt, function(err, response){
      if(typeof cb === "function"){
        cb(response.statusCode)
      }
    });
  }
}
