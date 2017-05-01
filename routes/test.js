var express = require('express');
var router = express.Router();
var slackBot = require('../util/slack-bot');


var msg_list = [
  // "TEST!!!",
  // "야근 그만하고 :house:에 가세요~ :beers:마시지 말고 :house:으로! :smile:",
  // "정리하고~ 집에갑시다!",
  // "commit하고, :beer:이나 마시러 가죠~ 각자 집에서 혼술:smile:",
  // "야근 그만하고 :house:에 가세요~ :beers:마시지 말고 :house:으로! :smile:",
  // "내일도 일해야죠. 오늘은 여기서 마무리 합시다.",
  // "집이죠? 아니라고요?? 이런:anger: 빨리 집으로!",
  // "야근도 적당히 해야죠.. 어찌 매일 야근입니까? 집에 갑시다!",
  // ":beers:마시고 있나요? 집에는 야근한다고 했죠? :house:에 갑시다",
  // "퇴근할땐 인사하지 않습니다.:smile: 퇴근좀 합시다:rage:",
  // "달빛에 출근하고 별빛에 퇴근한다.",
  // "우리는 무적의 야근 부대다:exclamation: ",
  // "갑시다~ 정회형이 쏩니다~:beers::chicken: ",
  // "일 중독의 심각성 테스트를 위해 사무실 전원을 내리도록 하겠습니다.",
  // "잠시 후 사무실 전원을 차단하겠습니다. 모두 집에 가세요",
  // "오늘은 봇이 쉽니다. 봇도 쉽니다~~ ",
  // "퇴근할땐 인사하지 않습니다.:smile: 퇴근 합시다:rage:",
  // "달빛에 출근하고 별빛에 퇴근한다.",

  "아직도 출근안하셨나요?? :rage: 출근 좀 하세요.!!:briefcase:"
];

router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  var opt = {
    username: "출근봇",
    text: msg_list[0]
  };

  var a = slackBot.sendMessage(opt);
  if(a){
    res.send("SUCCESS");
  }else{
    res.send("FAIL");
  }

});


module.exports = router;
