var logger = require('../util/logger');
var slackBot = require('../util/slack-bot');
var msg_list = [
  "퇴근시간입니다!!:smiley: 야근하셔도 뽀너스 없습니다:sweat_drops:. 언넝 들어가시죠.!",
  "이왕의 야근이라면 밥이나 잘 챙겨먹고 하시죠!:rice:"
];

module.exports = {
  botCmd: function(){
    var key = Math.floor(Math.random() * msg_list.length);
    var opt = {
      username: "퇴근봇",
      text: msg_list[key]
    };
    slackBot.sendMessage(opt, function(resultStatus){
      if(resultStatus === Number(200)){
        logger.debug("[GO HOME BOT - SUCCESS]");
        // res.send("[SEND MSG SUCCESS]");
      }else{
        logger.debug("[GO HOME BOT - FAIL]");
        // res.send("[SEND MSG FAIL]");
      }
    });
  }
};
