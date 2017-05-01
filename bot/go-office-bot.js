var logger = require('../util/logger');
var slackBot = require('../util/slack-bot');
var msg_list = [
  "아직도 출근안하셨나요?? :rage: 출근 좀 하세요.!!:briefcase:",
  "오늘은 아직도 출근안한사람이 커피 쏩니다.!:coffee:"
];

module.exports = {
  botCmd: function(){
    var key = Math.floor(Math.random() * msg_list.length);
    var opt = {
      username: "출근봇",
      text: msg_list[key]
    };
    slackBot.sendMessage(opt, function(resultStatus){
      if(resultStatus === Number(200)){
        logger.debug("[GO OFFICE BOT - SUCCESS]");
        // res.send("[SEND MSG SUCCESS]");
      }else{
        logger.debug("[GO OFFICE BOT - FAIL]");
        // res.send("[SEND MSG FAIL]");
      }
    });
  }
};
